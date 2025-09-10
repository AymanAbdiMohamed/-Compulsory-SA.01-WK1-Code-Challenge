


function calculateNetSalary(basicSalary, benefits) {
    //calculate gross salary

    let grossSalary = basicSalary + benefits;

    //deduction of tax (10%), nhif and nssf(6%) from grossSalary
    let paye = 0.1 * grossSalary;
    let nhif = 1500;
    let nssf = 0.06 * grossSalary;
    //Add up all the deductions
    let totalDeductions = paye+ nhif + nssf;
    //Subtract it from the grossSalary
    let netSalary = grossSalary - totalDeductions;

    //print out everything before running the file
    console.log("Gross Salary", grossSalary);
    console.log("PAYE (Taxation):", paye);
    console.log("NHIF:", nhif);
    console.log("NSSF:", nssf);
    console.log("Net Salary:", netSalary);

    return netSalary;

}
//e.g argumnets for the parameters
calculateNetSalary(10000, 800);
