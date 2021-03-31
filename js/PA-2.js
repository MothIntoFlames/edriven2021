var month = parseInt(prompt("Month (1-12)"));
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = parseInt(prompt("Day (1-7)"));



var tbody = document.getElementById("calendar");
var startday = 1;
var check = 0;

var end = true; 
if(month <= 12 && day <= 7 && month > 0 && day > 0){
    var m = document.getElementById("month");
    var mtxt = document.createTextNode(months[month - 1]);
    m.appendChild(mtxt);   
    while(end){ 
        var tr = document.createElement("tr");
        for(var i = 1; i <= 7; i++){ 
            if(i == day){ 
                if(check == 1){ 
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode(startday);
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                    if(i == 1){
                        td.className = "color";
                    }
                    startday++;
                }
                else{ 
                    var td = document.createElement("td");  
                    var tdTextNode = document.createTextNode(startday);
                    
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(i == 1){ 
                        td.className = "color";
                    }
                    startday++;
                    check = 1; 
                }
            }
            else{
                if(check == 1){ 
                    if(startday >= 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)){ // 31 DAYS FOR SPECIFIED MONTHS
                        end = false;
                        break;
                    }
                    else if(startday >= 31 && (month == 4 || month == 6 || month == 9 || month == 11 )){ // 30 DAYS FOR SPECIFIED MONTHS
                        end = false;
                        break;
                    }
                    else if(startday >= 28 && (month == 2)){
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode('28');
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                        if(i == 1){ 
                            td.className = "color";
                        }
                        end = false;
                        break;
                    }
                    else{
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode(startday);
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                        if(i == 1){
                            td.className = "color";
                        }
                        startday++;
                    }
                }
                else{ 
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode('');
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(i == 1){
                        td.className = "color";
                    }
                }
            }
        }
    }
}
else{
    var h = document.getElementById("invalid");
    var htxt = document.createTextNode("Invalid Input");
    h.appendChild(htxt);
}


