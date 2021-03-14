document.getElementById("Input").defaultValue="100";
var Subtotal=document.getElementById("Input")
var Total=document.getElementById("Total")
var AmountPaid=document.getElementById("AmountPaid")
var Change=document.getElementById("Change")

Subtotal.oninput = function(){
    var value1= this.value;
    if(this.value>=100 && this.value<=10000){
        document.getElementById("AmountPaid").disabled=false;
        var Tax= this.value *12 / 100
        Tax= parseFloat(Tax).toFixed(2)
        var Total= this.value*1.12
        Total= parseFloat(Total).toFixed(2)
        document.getElementById("Tax").value=(Tax)
        document.getElementById("Total").value=(Total)
        document.getElementById("AmountPaid").value=(Total)
        document.getElementById("AmountPaid").min=(Total)
        document.getElementById("Change").value=(AmountPaid-Total)
        document.getElementById("Pay").style.backgroundColor = "green";
        document.getElementById("Pay").disabled=false;
    
    }else{
        document.getElementById("AmountPaid").disabled=true;
        for (var index=0; index<document.getElementsByName("field").length;index++){
            document.getElementsByName("field")[index].value="";
        }
        document.getElementById("Pay").disabled=true;
        document.getElementById("Pay")
    }


}
AmountPaid.oninput=function(){
    var Change=AmountPaid.value-Total.value
    Change=parseFloat(Change).toFixed(2)
    document.getElementById("Change").value=(Change)
    if(Changevalue.value >= 0){
        document.getElementById("Pay").style.backgroundColor = "green";
        document.getElementById("Pay").disabled=false;
    }else{
        document.getElementById("Pay").style.backgroundColor = "green";
        document.getElementById("Pay").disabled=true;
    }
}




