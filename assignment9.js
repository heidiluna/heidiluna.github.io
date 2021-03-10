const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const total = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calTip(bills[i]);
    tips.push(tip);
    const total1 = tip + bills[i];
    total.push(total1);
}
console.log(tips);
console.log(total);
console.log(total);
const Lucas ={
    firstname1:'Lucas',
    lastname1:'Miller',
    Mass1:78,
    Height1:169,
}
const John ={
    firstname:'John',
    lastname:'Smith',
    Mass:92,
    Height:195,
}
LucasBMI= Lucas.Mass/ (Lucas.Height * Lucas.Height),
console.log(LucasBMI)

JohnBMI = John.Mass / ( John.Height * John.Height);
console.log(JohnBMI);
 if (JohnBMI > LucasBMI){ 
    console.log(`john BMI ${JohnBMI} is higher than lucas BMI ${LucasBMI}`)}
else {
    console.log(`lucas BMI ${LucasBMI} is higher than John BMI ${JohnBMI}`)
}
function calTip(bill) {
    const bill1 = Number(bill);
    if (bill1 >= 30 && bill1 <= 300) {
        return bill1 * .15;
    } else {
        return bill1 * .20;
    }
}
console.log(calTip(100));

const bills1 = new Array(125, 44, 555);
const tips1 = new Array(calTip(bills1[0]), calTip(bills1[1]), calTip(bills1[2]));
const total1 = new Array(bills1[0] + tips1[0], bills1[1] + tips1[1], bills1[2] + tips1[2])
console.log(total1);
