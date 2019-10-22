const chalk= require('chalk');
const fs = require('fs');
const getNotes = () =>{
    return 'Your Notes...'
};

// Funcion para agregar una nota a la base de datos
const addNote = (title,body)=>{
    const notes = loadNotes(); // me descargo  la notas ya estan en la base de datos
   const duplicateNote = notes.find((note)=> note.title === title // basta que encuentre un first match que se repita
  // retornara true
  )
  // entonces duplicate notes es igual a un  nuevo array de notas que son notas que ya se estan repitiendo en el array original
if (!duplicateNote){// si no hay nota duplicada  // si no encuentras un match
    notes.push({ // entonces agrega la nueva nota al array de notas original 
        title:title,
        body:body,
    })
    saveNotes(notes); // y posteriormente guarda la nueva nota en la base de datos (notes.json)
    console.log(chalk.green.inverse.bold('new notes added'));
}else{// si hay notas duplicada 
    console.log(chalk.red.inverse.bold('Note title taken'));// entonces consolea que la nota ya existe y no lo guardes en la base de datos (notes.json)
}   

    };
    const removeNote = (title) => {
        const notes= loadNotes();// me descargo  la notas ya estan en la base de datos
        const notesToKeep = notes.filter((note)=> // me quedo con aquellas notas  cuyo titulo sean diferentes al titulo de la nota a eliminar
         note.title !== title
        )
        saveNotes(notesToKeep); // guardo las notas restantes  en la base de datos
        if(notes.length > notesToKeep.length ){ // si la longitud de las notas de la base de datos es mayor a la longitud de las notas restantes
            console.log(chalk.green.bold.inverse('Note removed')); // quiere decir que una nota fue eliminada
        }else{
            console.log(chalk.red.bold.inverse('No note founded')); // sino quiere decir que ninguna nota que haga match con el titulo de la nota a eliminar fue encontrada 
                                                                // por lo tanto ninguna nota fue eliminada
        }
        }

const saveNotes = (notes) => { // [ {},{},{}] que reciba el array de notas
    const dataJSON= JSON.stringify(notes); // que lo convierta a JSON (string)
fs.writeFileSync('notes.json',dataJsON); // que lo guarde  en el archivo notes.json
}


const loadNotes = ()=> { 
    try { // en caso de exito
        const dataBuffer = fs.readFileSync('notes.json');// que lea el archivo notes.json
        const dataJSON = dataBuffer.toString(); // que convierta el buffer a un JSON (string)
        return JSON.parse(dataJSON); // que convierta el JSON string a un objeto o [{},{}]
    }
    catch(e){// en caso de que exista algun error al leer el archivo notes.json
return []; // retornara un array vacio que siginifcara que no hay ninguna nota en la base de datos
    }

}
const listNotes = ()=>{
    console.log(chalk.blue.inverse.bold('The  notes are the following'));
   const notes = loadNotes();
   notes.forEach((note)=>{
console.log(note.title);
   })
   
}
const readNote = (title)=>{
    const notes = loadNotes();
   const noteFirstMatch =  notes.find((note)=> note.title === title);
   if(noteFirstMatch){
    console.log(chalk.green.inverse.bold(noteFirstMatch.title));
    console.log(noteFirstMatch.body);


   }else{
    console.log(chalk.red.inverse.bold('No note founded'));
      
   }

}


module.exports = {
    getNotes: getNotes,
    addNote:  addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
    };