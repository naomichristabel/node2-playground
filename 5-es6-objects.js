//Object property shorthand

const name = 'Naomi';
const userAge = 29;

const user = {
    name,
    age: userAge,
    location: 'Chennai'

};

console.log(user);

//Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 210,
    salePrice: undefined
}

//You can now use label or price as variables instead of always calling the property on an object
// But this is tedious.
    // const label = product.label;
    // const price = product.price;

// While doing object destructuring, you can add a property that doesn't already exist
// You can also set a default value for a property. In case, it already has a value, that is shown. Otherwise, default value is shown.
    // const {label: productLabel, price, rating = 5, availability} = product;
    // console.log(productLabel);
    // console.log(price);
    // console.log(rating);
    // console.log(availability);

const transaction = (type, myProduct) => {
    console.log(myProduct);
};

transaction('new order', product);

//When the argument to a fn is an object, you can destructure it inline
// Use default parameters, that is, ={}, so that it (an empty object, and not UNDEFINED) can be destructured, 
// ...if suppose no 2nd argument was passed, when the fn was called.
//Setting default parameter stock = 0, will set stock to 0, if that property was not found on the object 'product'
const transaction1 = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
};

transaction1('Another new order', product);
//Not passing 2nd argument. Since default parameter was specified, that empty object will be destructured
//... and the two properties 'label' and 'stock' are set to undefined
transaction1('Another new order');