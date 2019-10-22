/* const square = function (x){
return x *x ;
} */
/* const square = (x)=>{
    return x * x 
}
console.log(square(3)); */
const square = (x)=> x * x;
console.log(square(3));
  


const event = {
    age:function (){
        console.log('my age is 20 years old')
    },
    guestList:['Andrew,Jen','Mike'],
    name:'Birthday Party',
    printGuestList() {
       
        console.log('guest list for ' + this.name); // this.binding
        this.guestList.forEach((guest)=>{
console.log(guest + 'is attending '+ this.name);
        })   
    }
}
event.printGuestList(); 