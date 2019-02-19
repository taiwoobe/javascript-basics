var johnBills = {
    fullName: 'John Smith',
    bill: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalPaidAmount = [];
        for (i = 0; i < this.bill.length; i++) {
            // Get percentage based on tipping rules.
            var tipPercentage;
            var bill = this.bill[i];
            if(bill < 50) {
                tipPercentage = 20 / 100;
            } else if (bill >= 50 && bill < 200) {
                tipPercentage = 15 / 100;
            } else {
                tipPercentage = 10 / 100;
            }
            // Add result to the respective arrays.
            this.tips[i] = bill * tipPercentage;
            this.finalPaidAmount[i] = this.tips[i] + bill;
        }
    }
}

var markBills = {
    fullName: 'Mark Mullenweng',
    bill: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalPaidAmount = [];
        for (i = 0; i < this.bill.length; i++) {
            // Get percentage based on tipping rules.
            var tipPercentage;
            var bill = this.bill[i];
            if(bill < 100) {
                tipPercentage = 20 / 100;
            } else if (bill >= 100 && bill < 300) {
                tipPercentage = 10 / 100;
            } else {
                tipPercentage = 25 / 100;
            }
            // Add result to the respective arrays.
            this.tips[i] = bill * tipPercentage;
            this.finalPaidAmount[i] = this.tips[i] + bill;
        }
    }
}

// Calculating the average of a given tip array
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

// Calling the two tip calculating functions.
johnBills.calcTips();
markBills.calcTips();

// calculating and storing the average tip of each family into the object. 
johnBills.average = calcAverage(johnBills.tips);
markBills.average = calcAverage(markBills.tips);

console.log(johnBills, markBills);


// Checking who pays higher bills 
if (johnBills.average > markBills.average) {
    console.log('John pays higher tips than Mark.');
} else if (markBills.average > johnBills.average) {
    console.log('Mark pays higher tips than John.');
} else {
    console.log('They both pay the same tip.');
}