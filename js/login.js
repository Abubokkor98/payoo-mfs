// step - 1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step - 2: prevent default behavior (reloading browser)
    event.preventDefault();
    // step - 3: get the phone number and the pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    // bad way to validate, [i will learn good and perfect way in couple of days]
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('you are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin')
    }
});