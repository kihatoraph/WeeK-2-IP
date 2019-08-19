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
    document.write("continue");
}
if(year <= 0|| > 2020){
    alert("Enter correct Year");
} else {
    document.write("continue");
}
if(month <= 0 || > 12)
    alert("Enter correct month");
} else {
    document.write("continue");
}
if(day <= 0 || > 31)
    alert("Enter valid day");
} else {
    document.write("continue");
}
// function 
switch(gender){
    case gender = "male":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
            break;
            case (1 || -1):
              document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
            break;
            case; (2 || -2):
            document.getElementById("result").innerHTML = "The day is on Tuesday." + "" + "Your akan name is" + maleNames[2];
            break;
            case;
            document.getElementById("result").innerHTML = "The day is on Wednesday." + "" + "Your akan name is" + maleNames[3];
            break;
            document.getElementById("result").innerhtml = "The day is on Thursday." + "" + "Your akan name is" + maleNames[4];
            break;