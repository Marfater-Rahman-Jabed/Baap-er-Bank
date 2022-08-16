document.getElementById('btn-submit').addEventListener('click', function () {
    const EmailField = document.getElementById('user-email');
    const Email = EmailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (Email == 'jabed@gmail.com' && password == '62732') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You entered wrong information.Please enter your valid information')
    }
})