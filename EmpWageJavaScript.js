const IS_EMP_ABCENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HURS = 8;
const WAGE_PER_HOURS = 20;
let empHrs = 0;
function getWorkingHours(empCheck){
switch(empCheck){
    case IS_FULL_TIME:
        empHrs = IS_FULL_TIME;
        break;
    case IS_PART_TIME:
        empHrs = IS_PART_TIME;
        break;
    default:
        empHrs = 0;      
}}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let employeeWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("Tatal Days"+ totalWorkingDays+"Employee Wage"+employeeWage+"Total Hrs"+totalEmpHrs);