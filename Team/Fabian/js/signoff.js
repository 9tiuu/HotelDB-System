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

const userAccount = document.getElementById('account');
const profileButton = document.getElementById('rButton');
const userProfile = document.querySelector('.user-profile');

userAccount.addEventListener('click', () => {
    userProfile.classList.add('active');
});

profileButton.addEventListener('click', () => {
    userProfile.classList.remove('active');
});


// const editarAccount = document.getElementById('edit'+id);
// const editarButton = document.getElementById('editarButton');
// const editar = document.querySelector('.editar');

// editarAccount.addEventListener('click', () => {
//     editar.classList.add('active');
// });

// editarButton.addEventListener('click', () => {
//     editar.classList.remove('active');
// });
const btnEdit=document.querySelectorAll('.actualizar');
btnEdit.forEach(btn=>{
    const editarButton = document.getElementById('editarButton');
    const modal=document.querySelector('.edit');
    btn.addEventListener('click', ()=>{
        modal.classList.add('active');
    });
    editarButton.addEventListener('click', ()=>{
        modal.classList.remove('active');
    });
});