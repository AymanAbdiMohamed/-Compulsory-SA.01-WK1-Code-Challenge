


function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let paye = 0.1 * grossSalary;
    let nhif = 1500;
    let nssf = 0.06 * grossSalary;
    let totalDeductions = paye+ nhif + nssf;
    let netSalary = grossSalary - totalDeductions;


    console.log("Gross Salary", grossSalary);
    console.log("PAYE (Taxation):", paye);
    console.log("NHIF:", nhif);
    console.log("NSSF:", nssf);
    console.log("Net Salary:", netSalary);

    return netSalary;

}

calculateNetSalary(10000, 800);
