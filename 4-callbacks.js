//A callback fn is a fn you pass as an argument to another fn with the intention of calling it later on

setTimeout(() => {
    console.log('Two seconds are up');
}, 2000);

const names = ['Andrew', 'Don', 'Naomi', 'Joseph'];             //Callbacks need not be asynchronous. 
const shortNames = names.filter((name) => (name.length < 4));   //filter, foreach are callback fns but, synchronous 
console.log(shortNames);

// Return statement will give the geocoded data for the address you pass as an argument to the geoCode fn
// This is synchronous, and no callback fn is used.
const geoCode1 = (address) => {
    const data = {
        latitude: 0,
        longitude: 0
    };
    return data;
}
const data = geoCode1('Chennai');
console.log(data);

//Using a callback function - return will not work, because callbacks don't finish until main finishes
const geoCode = (address, callback) => {
    const data = {
        latitude: 1,
        longitude: 1
    };
    callback(data); //calling the callback function from inside the geoCode fn, passing data obj as an argument
}

geoCode('Kerala', (data) => {          //when I am calling the geoCode fn, I pass 2 arguments
    console.log(data);                // 1st arg is the address string, 2nd is the callback fn
});

const add = (num1, num2, callback) => {
    setTimeout(() => {                     //simulating an asynchronous process
        callback(num1 + num2);
    }, 3000);
 }

add(2,5, (sum) => {
    console.log('SUM = ' + sum);
});

