// the first and second challanges

        var marksMass = 92;
        var johnMass = 78;
        var marksHeight = 1.95;
        var johnsHeight = 1.68;

        let MarksBMI = marksMass / marksHeight ** 2;
        let JohnsBMI = johnMass / johnsHeight ** 2;

        var markHigherBMI = MarksBMI > JohnsBMI;
        if (markHigherBMI) {
        console.log("Mark has higher BMI than Johns");
        } else {
        console.log("John has higher BMI than Mark");
        }
// the third and fourth challanges
// function sum(n){
//         var sum = 0;
//         for(i in n){
//                 sum+=n[i]
//         }
//         return sum;
// }

// var Dolphines = [96,108,89];
// var Koalas = [88,91,110];

// let avgOfDols=(sum(Dolphines)/Dolphines.length)
// let avgOfKoals=(sum(Koalas)/Koalas.length)

// if(avgOfDols>avgOfKoals){
//         console.log("Dolphines wins")
// }else{
//         console.log("Koalas wins")
// }