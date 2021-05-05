const fs = require('fs');

//Create an object
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}
console.log(book);

//Convert object to a JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(bookJSON.author); //returns undefined, because bookJSON is not an object, it is a string, so you cannot access its properties

//Convert a JSON string to an object
const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook);
console.log(parsedBook.author);

//Write a JSON string to a file, commenting it, as it is already written once
//fs.writeFileSync('1-json.json',bookJSON);

//Read a string from a JSON file
dataBuffer=fs.readFileSync('1-json.json'); //data is read from the file as some binary numbers, hence, called a buffer
console.log(dataBuffer);

const dataJSON = dataBuffer.toString(); //convert buffer to string
console.log(dataJSON);

const data = JSON.parse(dataJSON); //convert string to an object
console.log(data);
console.log(data.title);
