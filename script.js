var century, month, dayOfWeek, dayOfMonth, day;
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sturday"];
maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
femaleNmaes=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

// get input
function getInput(){
var century = parseInt(document.getElementById("century").value);
var year = parseInt(document.getElementById)("year").value);
var month  = parseInt(document.getElementById)("month").value);
var day = parseInt(document.getElementById)("day").value);
// validation
if(century > 21 ){
    alert("Enter correct Century");
} else {
    console.log("continue");
}
if(year <= 0|| > 2020){
    alert("Enter correct Year");
} else {
    console.log("continue");
}
if(month <= 0 || > 12)
    alert("Enter correct month");
} else {
    console.log("continue");
}
if(day <= 0 || > 31)
    alert("Enter valid day");
} else {
    console.log("continue");
}
console.log = "result"
// calculation function 
function calculate(){
  dayOfWeek = ( ( (century/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) mod 7;
  console.log = "result"
}if "dayOfWeek < 0"{e. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born.
  dayOfWeek = dayOfWeek * -1;
}
else if (dayOfWeek > 0){
  return dayOfWeek;
}
function CheckDayOfWeek(){
  day = calculateDay();
  checkGender();
}
console.log = "result"

// radio function 
function checkGende(){
  var gen = document.getElementsByName("")
}
console.log = "result"

























