
//create function to grade the marks, with limits of 0 to 100. Above or below the range results in invalid input 
function generateGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid input. Marks should be between 0 and 100.";
    }
    if(marks > 79) {
        return "A" //marks greater than 79
    }
    else if (marks >= 60) {
        return "B" //marks greater than 60 less than 79
    }
    else if (marks >= 50) {
        return "C" //marks greater than 50 less than 60
    }
    else if (marks >= 40) {
        return "D" //marks greater than 40 less than 50
    }
    else {
        return "E" //marks less than 40
    }
}
//e.g run
console.log(generateGrade(85))
