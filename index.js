var user   = document.querySelector('#userID')
var pass   = document.querySelector('#passID')
var button = document.querySelector('#btn')

button.addEventListener('click',function(){
    if (user = ' ') {
        alert("Username is empty!")
    }
    else {
        console.log('user');
    }

    if (pass = ' ') {
        alert("Password is empty!")
    }    
    else {
        console.log('pass');
    }
})