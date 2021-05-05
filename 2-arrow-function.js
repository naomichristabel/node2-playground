const square1 = function(x) {
    return x*x;
}

const square2 = (x) => {
    return x*x;
}

const square3 = (x) => x*x;

console.log(square1(3));
console.log(square2(4));
console.log(square3(5));

const event1 = {
    name: 'Anniversary party',
    printGuestList: function() {
        console.log('Guest list for ' + this.name); 
    }
}
event1.printGuestList(); 

//Arrow functions in an object
const event2 = {
    name: 'Birthday party',
    printGuestList: () => {
        console.log('Guest list for ' + this.name); //arrow functions don't bind their own THIS value, so you get undefined, if you call this method
    }
}
event2.printGuestList(); //you get undefined in console

const event3 = {
    name: 'Farewell party',
    printGuestList() {
        console.log('Guest list for ' + this.name); 
        }
}
event3.printGuestList();

const event4 = {
    name: 'Boring party',
    guestList: ['Jane','Brian','Tina'],
    printGuestList() {
        console.log('Guest list for ' + this.name); 
        this.guestList.forEach(function(guest) {              //this child function has its own binding
            console.log(guest + ' is attending ' + this.name); //using this here, will try to access (is bound to) parent object. But that is outside the function, so you get undefined
        })
    }
}
event4.printGuestList();

const event5 = {
    name: 'Boring party',
    guestList: ['Jane','Brian','Tina'],
    printGuestList() {
        console.log('Guest list for ' + this.name); 
        this.guestList.forEach((guest) => {              //this child function has its own binding
            console.log(guest + ' is attending ' + this.name); //arrow functions don't bind their own THIS value. This is right in this situation.
        })
    }
}
event5.printGuestList();