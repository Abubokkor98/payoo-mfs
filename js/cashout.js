
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutAmount = parseFloat(cashOut);

    const cashOutPin = document.getElementById('input-cash-out-pin').value;

// wrong way to verify pin
    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;

        // reduce the balance
        const newBalance = balance - cashOutAmount;

        // update the balance in DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out, Please try again!')
    }

    // clear the inputs value after click
     document.getElementById('input-cash-out').value = '';
     document.getElementById('input-cash-out-pin').value = '';
})