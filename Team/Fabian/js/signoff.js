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

// Boton Perfil de usuario -------------------------

const userAccount = document.getElementById('account');
const profileButton = document.getElementById('rButton');
const userProfile = document.querySelector('.user-profile');

userAccount.addEventListener('click', () => {
    userProfile.classList.add('active');
});

profileButton.addEventListener('click', () => {
    userProfile.classList.remove('active');
});

// Boton Crear Pasajeros -------------------------

const btnCreate = document.querySelector('.pasajero');
const btnCreateCancel = document.getElementById('cancelAddhostedButton');
const ModalCreate = document.querySelector('.create');

btnCreate.addEventListener('click', () => {
    ModalCreate.classList.add('active');
});

btnCreateCancel.addEventListener('click', () => {
    ModalCreate.classList.remove('active');
});

// Boton Crear Habitacion -------------------------

const btnCreateBedroom = document.querySelector('.habitacion');
const btnCancelCreateBedroom = document.querySelector('.b-btnCancel');
const ModalCreateBedroom = document.querySelector('.create-bedroom')

btnCreateBedroom.addEventListener('click', () => {
    ModalCreateBedroom.classList.add('active');
});

btnCancelCreateBedroom.addEventListener('click', () => {
    ModalCreateBedroom.classList.remove('active');
});