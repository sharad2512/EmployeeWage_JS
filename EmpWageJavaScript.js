const IS_EMP_ABCENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 2;
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
}
}
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = empHrs + getWorkingHours(empCheck);
}
let employeeWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hours:"+empHrs+"Employee wage"+employeeWage);
