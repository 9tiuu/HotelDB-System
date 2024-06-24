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
const btnCreateCancel = document.getElementById('cancelButton');
const ModalCreate = document.querySelector('.create');

btnCreate.addEventListener('click', () => {
    ModalCreate.classList.add('active');
});

btnCreateCancel.addEventListener('click', () => {
    ModalCreate.classList.remove('active');
});

// Editar Pasajeros -------------------------

const btnEdit = document.querySelectorAll('.h-update');
const MotalEdit = document.querySelector('.edit');
const btnEditCancel = document.getElementById('btnCancelEdit')

btnEdit.forEach(btn => {
    btn.addEventListener('click', () => {
        MotalEdit.classList.add('active');
    });
});

btnEditCancel.addEventListener('click', () => {
    MotalEdit.classList.remove('active');
});

// Eliminar Pasajeros -------------------------

const botonEliminar = document.querySelectorAll(".h-delete");
const ModalDelete = document.querySelector(".alert-eliminar");
const botonCancelar = document.getElementById("aboton");

botonEliminar.forEach(boton => {
    boton.addEventListener('click', () => {
        ModalDelete.classList.add('active');
    });
});

botonCancelar.addEventListener('click', () => {
    ModalDelete.classList.remove('active');
});

// Crear Habitacion -------------------------
// Editar Habitacion -------------------------
// Eliminar Habitacion-------------------------