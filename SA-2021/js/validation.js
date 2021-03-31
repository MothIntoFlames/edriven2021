var newCustomer = document.getElementById('newCustomer')
var ORNumber = document.getElementById('ORNumber')
var customerName = document.getElementById('customerName')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var item4 = document.getElementById('item4')
var itemList = [item1, item2, item3, item4]
var price1 = document.getElementById('price1')
var price2 = document.getElementById('price2')
var price3 = document.getElementById('price3')
var price4 = document.getElementById('price4')
var qty1 = document.getElementById('qty1')
var qty2 = document.getElementById('qty2')
var qty3 = document.getElementById('qty3')
var qty4 = document.getElementById('qty4')
var subtotal1 = document.getElementById('subtotal1')
var subtotal2 = document.getElementById('subtotal2')
var subtotal3 = document.getElementById('subtotal3')
var subtotal4 = document.getElementById('subtotal4')
var save = document.getElementById('save')
var a = [ORNumber,
    customerName,
    item1,
    item2,
    item3,
    item4,
    price1,
    price2,
    price3,
    price4,
    qty1,
    qty2,
    qty3,
    qty4,
    subtotal1,
    subtotal2,
    subtotal3,
    subtotal4]
newCustomer.addEventListener('show.bs.modal', function(){ //TRIGGER UPON MODAL DISPLAY
    for(var i = 0; i < a.length; i++){
        a[i].value = ''
        if (i >= 2){
            a[i].disabled = true
        }
    }
    
})

const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
var response 
fetch (request)
.then((res) => {
    let converted = res.json()
    converted
    .then((data) => {      
        response = data
        for (var i = 0; i < itemList.length; i++){
            for (var ii = 0; ii < data['meals'].length; ii++){
                var option = document.createElement("option")
                var optionTextNode = document.createTextNode(data['meals'][ii]['strMeal'])
                option.value = data['meals'][ii]['strMeal']
                option.appendChild(optionTextNode)
                itemList[i].appendChild(option)
            }
        }
    })
    .catch((err) =>{
        console.log(err) 
    })
})
.catch((err) =>{
    console.log(err)
})


newCustomer.addEventListener('change', function(){ //TRIGGER EVERY CONTENT CHANGE INSIDE MODAL
    if(ORNumber.value != '' && customerName.value != ''){
        item1.disabled = false
    }
    else{
        item1.disabled = true
    }
})
ORNumber.addEventListener('change', function(){ //ORNUMBER VALIDATOR
    var data = JSON.parse(localStorage.getItem('customers'))
    if(data != null){
        for(var i = 0; i < data.length; i++){
            if(ORNumber.value == data[i]['ORNumber']){
                ORNumber.value = ''
                break
            }
        }
    }
})
customerName.addEventListener('change', function(){ //CUSTOMERNAME VALIDATOR
    if(customerName.value.search(' ') != -1 && customerName.value.split(' ').length == 2 && (isNaN(customerName.value.split(' ')[0]) && isNaN(customerName.value.split(' ')[1]))){
        var checker = true
        var customerNameArray = customerName.value.split(' ')
        var firstNameArray = customerNameArray[0].split('')
        var lastNameArray = customerNameArray[1].split('')       
        for(var i = 0; i < firstNameArray.length; i++){
            if(!((firstNameArray[i] >= "a" && firstNameArray[i] <= "z") || (firstNameArray[i] >= "A" && firstNameArray[i] <= "Z"))){
                customerName.value = ''
                checker = false
                break
            }
        }
        if(checker){
            for(var i = 0; i < lastNameArray.length; i++){
                if(!((lastNameArray[i] >= "a" && lastNameArray[i] <= "z") || (lastNameArray[i] >= "A" && lastNameArray[i] <= "Z"))){
                    customerName.value = ''
                    checker = false
                    break
                }
            }
            if(checker){
                item1.disabled = false   
            }
            else{
                item1.disabled = true   
            }               
        }
        else{
            customerName.value = ''
        }              
           
    }
    else{
        item1.disabled = true
        customerName.value = ''
    }
    
})

item1.addEventListener('change', function(){ //ITEM1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER ITEMS)
        price1.value = ''
        qty1.value = ''
        subtotal1.value = ''
        price1.disabled = false
        qty1.disabled = false
        
        item2.value = ''
        price2.value = ''
        qty2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        price2.disabled = true
        qty2.disabled = true

        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
})
price1.addEventListener('change', function(){ // PRICE1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER PRICES)
    if(isNaN(price1.value)){

        price1.value = ''
        subtotal1.value = ''
        save.disabled = true

        item2.value = ''
        price2.value = ''
        qty2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        price2.disabled = true
        qty2.disabled = true

        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(price1.value <= '0'){
            subtotal1.value = ''
            qty1.value = ''
            save.disabled = true

            item2.value = ''
            price2.value = ''
            qty2.value = ''
            subtotal2.value = ''
            item2.disabled = true
            price2.disabled = true
            qty2.disabled = true
    
            item3.value = ''
            price3.value = ''
            qty3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            price3.disabled = true
            qty3.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true 
        }
        else{
            if(qty1.value <= "0" || qty1.value == ''){
                subtotal1.value = ''
                save.disabled = true
    
                item2.value = ''
                price2.value = ''
                qty2.value = ''
                subtotal2.value = ''
                item2.disabled = true
                price2.disabled = true
                qty2.disabled = true
        
                item3.value = ''
                price3.value = ''
                qty3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                price3.disabled = true
                qty3.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price1.value) * parseInt(qty1.value)
                subtotal1.value = result.toFixed(2)
                save.disabled = false
                item2.disabled = false
                price2.disabled = false
                qty2.disabled = false            
            }            
        }
    }
})
qty1.addEventListener('change', function(){// QTY VALIDATOR (REFER VARIABLE NAMING FOR OTHER QTYS)
    if(price1.value <= '0'){
        qty1.value = ''
        subtotal1.value = ''
        save.disabled = true

        item2.value = ''
        price2.value = ''
        qty2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        price2.disabled = true
        qty2.disabled = true

        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(qty1.value <= '0'){
            qty1.value = ''
            subtotal1.value = ''
            save.disabled = true
    
            item2.value = ''
            price2.value = ''
            qty2.value = ''
            subtotal2.value = ''
            item2.disabled = true
            price2.disabled = true
            qty2.disabled = true
    
            item3.value = ''
            price3.value = ''
            qty3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            price3.disabled = true
            qty3.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true         
        }
        else{
            if(price1.value <= "0" || price1.value == ''){
                subtotal1.value = ''
                save.disabled = true
    
                item2.value = ''
                price2.value = ''
                qty2.value = ''
                subtotal2.value = ''
                item2.disabled = true
                price2.disabled = true
                qty2.disabled = true
        
                item3.value = ''
                price3.value = ''
                qty3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                price3.disabled = true
                qty3.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price1.value) * parseInt(qty1.value)
                subtotal1.value = result.toFixed(2)
                save.disabled = false
                item2.disabled = false
                price2.disabled = false
                qty2.disabled = false            
            }     
        }
    }
    
})
item2.addEventListener('change', function(){
        price2.value = ''
        qty2.value = ''
        subtotal2.value = ''
        price2.disabled = false
        qty2.disabled = false
        save.disabled = true
    
        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
})
price2.addEventListener('change', function(){
    if(isNaN(price2.value)){
        price2.value = ''
        subtotal2.value = ''
        save.disabled = true

        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(price2.value <= '0'){
            subtotal2.value = ''
            qty2.value = ''
            save.disabled = true
    
            item3.value = ''
            price3.value = ''
            qty3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            price3.disabled = true
            qty3.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true 
        }
        else{
            if(qty2.value <= "0" || qty2.value == ''){
                subtotal2.value = ''
                save.disabled = true
        
                item3.value = ''
                price3.value = ''
                qty3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                price3.disabled = true
                qty3.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price2.value) * parseInt(qty2.value)
                subtotal2.value = result.toFixed(2)
                save.disabled = false
                item3.disabled = false
                price3.disabled = false
                qty3.disabled = false            
            }            
        }
    }
})
qty2.addEventListener('change', function(){
    if(price2.value <= '0'){
        qty2.value = ''
        subtotal2.value = ''
        save.disabled = true

        item3.value = ''
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        price3.disabled = true
        qty3.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(qty2.value <= '0'){
            qty2.value = ''
            subtotal2.value = ''
            save.disabled = true
        
            item3.value = ''
            price3.value = ''
            qty3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            price3.disabled = true
            qty3.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true         
        }
        else{
            if(price2.value <= "0" || price2.value == ''){
                subtotal2.value = ''
                save.disabled = true
        
                item3.value = ''
                price3.value = ''
                qty3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                price3.disabled = true
                qty3.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price2.value) * parseInt(qty2.value)
                subtotal2.value = result.toFixed(2)
                save.disabled = false
                item3.disabled = false
                price3.disabled = false
                qty3.disabled = false            
            }     
        }
    }
    
})
item3.addEventListener('change', function(){
        price3.value = ''
        qty3.value = ''
        subtotal3.value = ''
        price3.disabled = false
        qty3.disabled = false
        save.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
})
price3.addEventListener('change', function(){
    if(isNaN(price3.value)){
        price3.value = ''
        subtotal3.value = ''
        save.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(price3.value <= '0'){
            subtotal3.value = ''
            qty3.value = ''
            save.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true 
        }
        else{
            if(qty3.value <= "0" || qty3.value == ''){
                subtotal3.value = ''
                save.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price3.value) * parseInt(qty3.value)
                subtotal3.value = result.toFixed(2)
                save.disabled = false
                item4.disabled = false
                price4.disabled = false
                qty4.disabled = false            
            }            
        }
    }
})
qty3.addEventListener('change', function(){
    if(price3.value <= '0'){
        qty3.value = ''
        subtotal3.value = ''
        save.disabled = true

        item4.value = ''
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        price4.disabled = true
        qty4.disabled = true
    }
    else{
        if(qty3.value <= '0'){
            qty3.value = ''
            subtotal3.value = ''
            save.disabled = true
    
            item4.value = ''
            price4.value = ''
            qty4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            price4.disabled = true
            qty4.disabled = true         
        }
        else{
            if(price3.value <= "0" || price3.value == ''){
                subtotal3.value = ''
                save.disabled = true
        
                item4.value = ''
                price4.value = ''
                qty4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                price4.disabled = true
                qty4.disabled = true 
            }
            else{
                var result = parseFloat(price3.value) * parseInt(qty3.value)
                subtotal3.value = result.toFixed(2)
                save.disabled = false
                item4.disabled = false
                price4.disabled = false
                qty4.disabled = false            
            }     
        }
    }
    
})
item4.addEventListener('change', function(){
        price4.value = ''
        qty4.value = ''
        subtotal4.value = ''
        price4.disabled = false
        qty4.disabled = false
        save.disabled = true
})
price4.addEventListener('change', function(){
    if(isNaN(price4.value)){
        price4.value = ''
        subtotal4.value = ''
        save.disabled = true
    }
    else{
        if(price4.value <= '0'){
            subtotal4.value = ''
            qty4.value = ''
            save.disabled = true
        }
        else{
            if(qty4.value <= "0" || qty4.value == ''){
                subtotal4.value = ''
                save.disabled = true
            }
            else{
                var result = parseFloat(price4.value) * parseInt(qty4.value)
                subtotal4.value = result.toFixed(2)
                save.disabled = false          
            }            
        }
    }
})
qty4.addEventListener('change', function(){
    if(price4.value <= '0'){
        qty4.value = ''
        subtotal4.value = ''
        save.disabled = true
    }
    else{
        if(qty4.value <= '0'){
            qty4.value = ''
            subtotal4.value = ''
            save.disabled = true      
        }
        else{
            if(price4.value <= "0" || price4.value == ''){
                subtotal4.value = ''
                save.disabled = true
            }
            else{
                var result = parseFloat(price4.value) * parseInt(qty4.value)
                subtotal4.value = result.toFixed(2)
                save.disabled = false          
            }     
        }
    }
    
})