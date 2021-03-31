customers = []
customer = {
    'ORNumber' : '',
    'name': '',
    'items': [],
    'total': 0
}

var mealNames = []
var items = [item1, item2, item3, item4]
var prices = [price1, price2, price3, price4]
var qtys = [qty1, qty2, qty3, qty4]
var subtotals = [subtotal1, subtotal2, subtotal3, subtotal4]

var data = JSON.parse(localStorage.getItem('customers'))


save.addEventListener('click', function(){
    customer['ORNumber'] = ORNumber.value
    customer['name'] = customerName.value
    for(var i = 0; i < response["meals"].length; i++){
        mealNames.push(response["meals"][i]['strMeal'])
    }
    for(var i = 0; i < items.length; i++){
        if(items[i].value == ''){
            break
        }
        else{
            for(var ii = 0; ii < mealNames.length; ii++){
                if(items[i].value == mealNames[ii]){
                    item = { //TO OVERWRITE PREVIOUS ITEM CONTENT
                        'name': items[i].value,
                        'price' : prices[i].value,
                        'qty': qtys[i].value,
                        'subtotal' : subtotals[i].value, 
                        'thumbnail' : response["meals"][ii]['strMealThumb']         
                    } 
                    customer['total'] = parseFloat(customer['total']) + parseFloat(item['subtotal'])
                    customer['items'].push(item)
                    break
                }
            }
            
        }
    }

    

   if(data != null){ //CHECK IF LOCALSTORAGE IS EMPTY
       data.push(customer) //SAVE EXISTING DATA
       localStorage.setItem('customers', JSON.stringify(data))//SAVE TO LOCAL STORAGE WITH UPDATED DATA
   }
   else{
       customers.push(customer)
       localStorage.setItem('customers', JSON.stringify(customers))// CREATES 'CUSTOMERS' KEY WITH CUSTOMERS
   }
   location.reload() 
})