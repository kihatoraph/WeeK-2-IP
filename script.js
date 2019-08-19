var century, month, dayOfWeek, dayOfMonth, day;
// get input
function getInput(){
    century = parseInt(document.getElementById("Century").value);
    year = parseInt(document.getElementById)("Year").value);
    month  = parseInt(document.getElementById)("Month").value;
    day = parseInt(document.getElementById)("Day").value;

    if (century == ""){
        alert("Input the correct century");
        return false;
    }
    if (Year == ""){
        alert("Input correct year");
        return false;
    }
    if (month < 0){
        console.log("Number too small");
    } else if (month >150){
        console.log(Number too large);
    }
    if (day < 0){
        console.log(False)
        else if (day > 31){
            console.log(False)
        }
    }
    
}

