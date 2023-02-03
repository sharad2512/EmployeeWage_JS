const IS_EMP_ABCENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HURS = 8;
const WAGE_PER_HOURS = 20;
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = 0;
switch(empCheck){
    case IS_FULL_TIME:
        empHrs = IS_FULL_TIME;
        break;
    case IS_PART_TIME:
        empHrs = IS_PART_TIME;
        break;
    default:
        empHrs = 0;        
}
let employeeWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage "+employeeWage);