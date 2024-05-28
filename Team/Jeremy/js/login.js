// Login Script

function UsersSystem(username, password) {
    const okButton = document.getElementById('okButton');
    const alert = document.querySelector('.alert');
    const alertText = document.querySelector('.alertText');

    let users = [
        {rol:'admin', username:'root', password:'1234'},
        {rol:'admin', username:'Administrador', password:'1234'},
        {rol:'user', username:'Pepito', password:'test'}
    ];

    users.forEach(function(data) {
        if (username == data.username && password == data.password && data.rol == 'admin') {
            alert.classList.remove('active');
            return window.location = 'admin.html';

        } else if (username == data.username && password == data.password && data.rol == 'user') {
            alert.classList.remove('active');
            return window.location = 'index.html';
            
        } else if (username.trim() === '' || password.trim() === '') {
            alertText.innerHTML = 'Los campos están vacios';
            alert.classList.add('active');
    
        } else {
            alertText.innerHTML = 'Los datos de usuario son incorrectos';
            alert.classList.add('active');
        };
    });

    okButton.addEventListener('click', () => {
        alert.classList.remove('active');
    });
};

const lButton = document.getElementById('loginButton');

lButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    UsersSystem(username, password); 
});