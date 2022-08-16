document.getElementById('btn-submit').addEventListener('click', function () {
    const EmailField = document.getElementById('user-email');
    const Email = EmailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (Email == 'jabed@gmail.com' && password == '62732') {
        console.log('congratulations!!!!');
    }
    else {
        console.log('Please enter your valid informations')
    }
}
