
const chalk= require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
// customize your yargs version
yargs.version('1.1.0');
// add ,remove , read , listen
// Create add command
yargs.command({
    command :'add',
    describe:'Add a new note',
    builder :{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',

        },
        body:{
            describe:'Note content',
            demandOption:true,
            type:'string',

        }
    },
    handler(argv){
       notes.addNote(argv.title,argv.body);
    }
    
})

// Create remove command 
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',

        }
        
    },
    handler (argv){
       notes.removeNote(argv.title);
    }
})
//Create list command
yargs.command({
    command:'list',
    describe:'List your  notes',
    handler(){
       notes.listNotes();
    },
    builder:{

    }
})
// Create read command
 yargs.command({
     command:'read',
     describe:'Read a note',
     handler (argv){
        notes.readNote(argv.title);
     },
     builder:{
         title:{
             describe:'Note title',
             demandOption:true,
             type:'string',
         }
        
     }
 })





yargs.parse();

//console.log(yargs.argv);

