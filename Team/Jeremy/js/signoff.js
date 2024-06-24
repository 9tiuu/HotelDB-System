// Sign off Alert -------------------------

const button = document.getElementById('sign-off');
const alert = document.querySelector('.alert');

const cancelButton = document.getElementById('cButton');
const exitButton = document.getElementById('eButton');

button.addEventListener('click', () => {
    alert.classList.add('active');
});

cancelButton.addEventListener('click', () => {
    alert.classList.remove('active');
});

exitButton.addEventListener('click', () => {
    window.location = 'login.html';
});

// Perfil de usuario -------------------------

const userAccount = document.getElementById('account');
const profileButton = document.getElementById('rButton');
const userProfile = document.querySelector('.user-profile');

userAccount.addEventListener('click', () => {
    userProfile.classList.add('active');
});

profileButton.addEventListener('click', () => {
    userProfile.classList.remove('active');
});

// Crear Pasajeros -------------------------

const btnCreate = document.querySelector('.pasajero');
const btnModalCancel = document.getElementById('cancelButton');
const ModalCreate = document.querySelector('.create');

btnCreate.addEventListener('click', () => {
    ModalCreate.classList.add('active');
});

btnModalCancel.addEventListener('click', () => {
    ModalCreate.classList.remove('active');
});

// Editar Pasajeros -------------------------

// Eliminar Pasajeros -------------------------