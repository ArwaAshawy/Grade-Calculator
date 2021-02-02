function calculateGrades(num, total) {
    // to calcualte the percentage value
    // Math.round to display only two decimals 
    let percentageGrade = Math.round(((num / total) * 100) * 100) / 100;
    
    let grade;
    // to calculate the grading degree
    // switch (true) {
    //     case (percentageGrade >= 90):
    //         grade = 'A';
    //         break;
    //     case (percentageGrade >= 80):
    //         grade = 'B';
    //         break;
    //     case (percentageGrade >= 70):
    //         grade = 'C';
    //         break;
    //     case (percentageGrade >= 60):
    //         grade = 'D';
    //         break;
    //     case (percentageGrade >= 50):
    //         grade = 'E';
    //         break;
    //     default:
    //         grade = 'F';
    // }
    // I will use if coditiotn because it's faster than the switch statement in that case;
    if (percentageGrade <= 90) {
        grade = 'A';
    } else if (percentageGrade >= 80){
        grade = 'B';
    } else if (percentageGrade >=70) {
        grade = 'C';
    } else if (percentageGrade >=60){
        grade = 'D';
    } else if (percentageGrade >= 50){
        grade = 'E';
    } else {
        grade = 'F';
    }
    return `You got a ${grade} (${percentageGrade}%)!`;
}
console.log(calculateGrades(73,120));
