var century, month, dayOfWeek, dayOfMonth, day;
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sturday"];
maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
femaleNmaes=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

// get input
function getInput(){
    century = parseInt(document.getElementById("Century").value);
    year = parseInt(document.getElementById)("Year").value);
    month  = parseInt(document.getElementById)("Month").value;
    day = parseInt(document.getElementById)("Day").value;
// validation
if(century > 21 ){
    alert("Enter correct Century");
} else {
    document.write("continue");
}
if(year < 1 > 2020){
    alert("Enter correct Year");
} else {
    document.write("continue");
}
if(month < 1 > 12)
    alert("Enter correct month");
} else {
    document.write("continue");
}
if(day < 1 > 31)
    alert("Enter correct month");
} else {
    document.write("continue");
}
//