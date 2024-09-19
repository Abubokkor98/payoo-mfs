/*
 * -----------------
 * ADD MONEY STEPS
 * -----------------
 * step - 1: add event handler to the add money button
 * step - 2: check pin validation
 * step - 3: get amount
 * step - 4: get current balance
 * step - 5: set updated amount [currentBalance + get amount]
 */

// step - 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault()
   
    // step 2: get amount to be added to the account
    const addAmountInput = document.getElementById('input-add-amount').value;
    console.log(addAmountInput)
    
    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})