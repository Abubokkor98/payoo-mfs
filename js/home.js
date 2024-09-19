/*
 * -----------------
 * ADD MONEY STEPS
 * -----------------
 * step - 1: add event handler to the add money button
 * step - 2: get amount and get pin
 * step - 3: check pin validation
 * step - 4: get current balance
 * step - 5: set updated amount [currentBalance + get amount]
 * step - 6: update the balance in the UI/DOM 
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault()
   
    // step-2: get amount to be added
    const addAmountInput = document.getElementById('input-add-amount').value;
    console.log(addAmountInput)
    
    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)

    // step-3: verify the pin the
    // this is not the right way to verify
    if (pinNumberInput === '1234'){
        console.log('adding money to your account')

        // step-4: get the current balance
        const currentBalance = document.getElementById('account-balance').innerHTML;
        console.log(currentBalance)

        // step-5: set updated balance
        const addMoneyNumber = parseFloat(addAmountInput);
        const currentBalanceNumber = parseFloat(currentBalance);
        const updateBalance = addMoneyNumber + currentBalanceNumber;
        console.log(updateBalance)

        // step-6: update the balance
        document.getElementById('account-balance').innerText = updateBalance;

        // clear the inputs value after click
        document.getElementById('input-add-amount').value = '';
        document.getElementById('input-pin-number').value = '';
    }
    else{
        alert('Invalid Pin')
    }
})