const IS_EMP_ABCENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_EMP_ABCENT){
    console.log("Employee is Abcent")
    return;
}else{
    console.log("Employee is present")
}