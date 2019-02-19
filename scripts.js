var johnTeam = 89 + 120 + 103;
var markTeam = 116 + 94 + 123;
var maryTeam = 97 + 134 + 105;

var johnAverage = johnTeam / 3;
var markAverage = markTeam / 3;
var maryAverage = maryTeam / 3;

if (johnAverage > markAverage && johnAverage > maryAverage) {
    console.log("John's Team is the winner with an average score of " +johnAverage);
} else if (markAverage > johnAverage && markAverage > maryAverage) {
    console.log("Mark's Team is the winner with an average score of " +markAverage);   
} else if (maryAverage > johnAverage && maryAverage > markAverage) {
    console.log("Mary's Team is the winner with an average score of " +maryAverage); 
} else {
    console.log("There was no winner as all teams had an average score of " +maryAverage);
}

const calculateAge  = (birthYeah)  =>  {
    return 2018 - birthYeah;
}
var agePerson = calculateAge(1992); 
console.log(agePerson);

function yearsUntilRetirement(year, firstName) {
    var retirementAge = 65;
    var currentAge = calculateAge(year);
    var retirement = retirementAge - currentAge;

    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.");
    }

}
yearsUntilRetirement(1990, "Tunde");
yearsUntilRetirement(1908, "Tope");
yearsUntilRetirement(1960, "John");
yearsUntilRetirement(1987, "Module");


// Function Expressions 
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
        return firstName + " teaches kids programming.";
        case 'driver':
        return firstName + " teaches kids driving.";
        case 'designer':
        return firstName + " teaches kids designing.";
        default:
        return firstName + " does something else.";
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("architect", "Mark"));


var names = ["John", "Philip", "Toyosi", "Frank"];
var oldNames = new Array ("Pius", "Tom", "Sandra"); // Older method of declaring Arrays

console.log(names.length);


var bills = [124, 48, 268];
var tips = [];
var totalAmountPaid = [];

function tipCalculator(bill) {
    if(bill < 50) {
        return tip = (20/100) * bill;
    } else if (bill >= 50 && bill < 200) {
        return tip = (15/100) * bill;
    } else {
        return tip = (10/100) * bill;
    }
}

// var tips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)];
// var totalAmountPaid = [124 + tips[0], 48 + tips[1], 268 + tips[2]]

tips.push(tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]));
totalAmountPaid.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(tips);
console.log(totalAmountPaid);


// Objects & Properties

var user = {
    firstName: 'Peter',
    lastName: 'Tosin',
    sex: 'Male',
    familyMembers: ['Tobi', 'Tolu', 'Temitope'],
    maritalStatus: 'single',
    age: 27
}

// console.log(user);


// Objects & Methods

var user2 = {
    firstName: 'Peter',
    lastName: 'Tosin',
    sex: 'Male',
    familyMembers: ['Tobi', 'Tolu', 'Temitope'],
    maritalStatus: 'single',
    birthYear: 1993,
    calcAge: function() {
        // return 2019 - this.birthYear;
        this.age = 2019 - this.birthYear;
    }
}
user2.calcAge();
console.log(user2);


var Toni = {
    fullName: 'Toni Akinjiola',
    Mass: 90,
    height: 1.78,
    calcBMI: function() {
        this.bmi = this.Mass / (this.height * this.height);
        return this.bmi;
    }
}
var Ndubisi = {
    fullName: 'Ndubisi Anyaoku',
    Mass: 120,
    height: 1.78,
    calcBMI: function() {
        this.bmi = this.Mass / (this.height * this.height);
        return this.bmi;
    }
}

if (Toni.calcBMI() > Ndubisi.calcBMI()) {
    console.log(Toni.fullName + ' has a higher BMI of ' + Toni.calcBMI());
} else if (Toni.calcBMI() < Ndubisi.calcBMI()) {
    console.log(Ndubisi.fullName + ' has a higher BMI of ' + Ndubisi.calcBMI());
} else {
    console.log('They both have the same BMI.');
}

