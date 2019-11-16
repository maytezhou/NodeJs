//Object Property shorthand 
const name = 'Andrew';
const userAge= 27;
const user = {
    name,
    age: userAge,
    location:'Philadelphia',
};
console.log(user);
//Object destructuring 
const product = {
    label:'Red notebook',
    price: 3 ,
    stock: 201 ,
    salePrice: undefined,
    rating:4.2,

};
/* const {label: productLabel,price,stock,salePrice,rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(salePrice);
console.log(rating); */
const transaction = (type, {label, stock=0 }={})=>{
   console.log(type, label , stock) 
};
//transaction('order');
// transaction('order',product);
 transaction('order',product);
