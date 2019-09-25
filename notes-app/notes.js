const chalk= require('chalk');
const fs = require('fs');
const getNotes= ()=>{
    return 'Your Notes...';
};

const removeNote = (title)=>{
const notes= loadNotes();// me descargo  la notas ya estan en la base de datos
const notesToKeep = notes.filter((note)=>{ // me quedo con aquellas notas  cuyo titulo sean diferentes al titulo de la nota a eliminar
return note.title !== title
})
saveNotes(notesToKeep); // guardo las notas restantes  en la base de datos
if(notes.length > notesToKeep.length ){ // si la longitud de las notas de la base de datos es mayor a la longitud de las notas restantes
    console.log(chalk.green.bold.inverse('Note removed')); // quiere decir que una nota fue eliminada
}else{
    console.log(chalk.red.bold.inverse('No note founded')); // sino quiere decir que ninguna nota que haga match con el titulo de la nota a eliminar fue encontrada 
                                                        // por lo tanto ninguna nota fue eliminada
}
}
// Funcion para agregar una nota a la base de datos
const addNote = (title,body)=>{
    const notes = loadNotes(); // me descargo  la notas ya estan en la base de datos
    // las notas cuyo titulo sean igual a cualquier titulo de una nota que ya exista previamente 
    // formaran un nuevo array
    // se formara un nuevo array con las notas  cuyos titulos  ya se repiten
  const duplicateNotes = notes.filter((note)=>{
 return note.title === title // que se quede con aquellas notas cuyo titulo sean igual al titulo de la nueva nota a agregar
  })
  // entonces duplicate notes es igual a un  nuevo array de notas que son notas que ya se estan repitiendo en el array original
if (duplicateNotes.length === 0 ){// si no hay notas duplicadas 
    notes.push({ // entonces agrega la nueva nota al array de notas original 
        title:title,
        body:body,
    })
    saveNotes(notes); // y posteriormente guarda la nueva nota en la base de datos (notes.json)
    console.log('new notes added');
}else{// si hay notas duplicadas 
    console.log('Note title taken');// entonces consolea que la nota ya existe y no lo guardes en la base de datos (notes.json)
}   

    };
const saveNotes = (notes) => { // [ {},{},{}]
    const dataJSON= JSON.stringify(notes);
fs.writeFileSync('notes.json',dataJSON);
}
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
return [];
    }

}


module.exports = {
    getNotes: getNotes,
    addNote:  addNote,
    removeNote:removeNote,
    };