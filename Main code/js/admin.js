// Menu buttons --------------------------

const usersButton = document.getElementById('userbutton');
const auditButton = document.getElementById('auditbutton');
const configButton = document.getElementById('configuration');

const configInfo = document.querySelector('.config-info');
const usersInfo = document.querySelector('.users-info');
const auditInfo = document.querySelector('.audit-info');

function BtnNoSelected(btn1, btn2) {
    let btn = [btn1, btn2];

    btn.forEach(function(menuBtns) {
        return menuBtns.classList.remove('selected');
    });
};

function InfoNoVisible(info1, info2) {
    let info = [info1, info2];

    info.forEach(function(menuInfo) {
        return menuInfo.classList.remove('active');
    });
};

function BtnSelected(btn, info, b1, b2, f1, f2) {
    btn.classList.add('selected');

    if (btn.classList.contains('selected')) {
        info.classList.add('active');

        BtnNoSelected(b1, b2);
        InfoNoVisible(f1, f2);
    };
};

usersButton.classList.add('selected');

usersButton.addEventListener('click', () => {  
    BtnSelected(usersButton, usersInfo, auditButton, configButton, auditInfo, configInfo);
});

auditButton.addEventListener('click', () => {
    BtnSelected(auditButton, auditInfo, usersButton, configButton, usersInfo, configInfo);
});

configButton.addEventListener('click', () => {
    BtnSelected(configButton, configInfo, usersButton, auditButton, usersInfo, auditInfo);
});

// Crear Usuario -------------------------

const btnCreateUser = document.querySelector('.cusuario');
const ModalCreateUser = document.querySelector('.create-user');
const btnCreateCancelUser = document.getElementById('cancelUserButton');

btnCreateUser.addEventListener('click', () => {
    ModalCreateUser.classList.add('active');
});

btnCreateCancelUser.addEventListener('click', () => {
    ModalCreateUser.classList.remove('active');
});

// Editar Usuario -------------------------

const btnUpdateUser = document.querySelector('.u-update');
const ModalEditUser = document.querySelector('.edit-user');
const btnCancelEditUSer = document.getElementById('btnCancelEditUser');

btnUpdateUser.addEventListener('click', () => {
    ModalEditUser.classList.add('active');
});

btnCancelEditUSer.addEventListener('click', () => {
    ModalEditUser.classList.remove('active');
});

// Eliminar Usuario -------------------------

const btnDeleteUser = document.querySelectorAll('.u-delete');
const ModalDeleteUser = document.querySelector('.delete-user');
const btnCancelDeleteUser = document.getElementById('aboton');

btnDeleteUser.forEach(btn => {
    btn.addEventListener('click', () => {
        ModalDeleteUser.classList.add('active');
    });
});

btnCancelDeleteUser.addEventListener('click', () => {
    ModalDeleteUser.classList.remove('active');
});

