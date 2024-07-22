const tbodyHosted = document.querySelector('.user-tbody');

const ValidationUser = (id) => {
    const inpt = document.getElementById(id + '-user');

    if (inpt.value.trim() === '') {
        inpt.classList.add('error');
        inpt.setAttribute('placeholder', 'Campo vacío');

        setTimeout(() => {
            inpt.classList.remove('error');
            inpt.setAttribute('placeholder', '');
        }, 2000);

    } else { return inpt.value };
};

const CleanInptsUser = () => {
    const intps = document.querySelectorAll('.addU');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

const USERS = ['UserList'];
let userID = 1;

// Agregar pasajeros ---------------------------

const AddUser = () => {
    const userUsername = ValidationUser('username');
    const userRol = ValidationUser('rol');
    const userEmail = ValidationUser('email');
    const userPassword = ValidationUser('password');
    const UserCreateModal = document.querySelector('.create-user');

    const user = {
        id: userID,
        username: userUsername,
        rol: userRol,
        email: userEmail,
        password: userPassword
    };

    if (userUsername && userRol && userEmail && userPassword) {

        const findUser = USERS.find(h => h.username === userUsername);

        if (!findUser) {
            USERS.push(user);
            console.log(USERS);

            DataTableUser();
            CleanInptsUser();

            userID += 1;
            UserCreateModal.classList.remove('active');
        };
    };
};

// Editar Pasajeros ---------------------------

const EditUserEvent = (id) => {
    const MotalEdit = document.querySelector('.edit-user');
    const btnEditCancel = document.getElementById('btnCancelEditUser');

    const username = document.getElementById('username-edit');
    const typeuser = document.getElementById('typeuser-edit');
    const email = document.getElementById('email-edit');
    const password = document.getElementById('password-edit');

    MotalEdit.classList.add('active');

    btnEditCancel.addEventListener('click', () => {
        MotalEdit.classList.remove('active');
    });

    USERS.forEach(h => {
        if (h.id === id) {
            console.log(h.id, h.username, h.password);
            username.value = h.username;
            typeuser.value = h.rol;
            email.value = h.email;
            password.value = h.password;
        };
    });
};

// Eliminar pasajeros ---------------------------

const DeleteUserEvent = (id) => {
    const ModalDelete = document.querySelector(".delete-user");
    const botonCancelar = document.getElementById("aboton-user");
    const btnEliminar = document.getElementById('eboton-user');
    const delUser = document.querySelector('.delUser');

    ModalDelete.classList.add('active');
    delUser.innerHTML = id; // test

    botonCancelar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');
    });

    btnEliminar.addEventListener('click', () => {
        const tr = document.getElementById('user_' + id);
        ModalDelete.classList.remove('active');    
           
        // USERS.splice(id, 1);
        console.log(USERS);
        tbodyHosted.removeChild(tr);      
    });
};

const DataTableUser = () => {
    const tr = document.createElement('tr');
    USERS.forEach(function(h) {
        tr.setAttribute('id', `user_${h.id}`);

        tr.innerHTML = `
            <td>${h.id}</td>
            <td>${h.username}</td>
            <td>${h.rol}</td>
            <td>${h.email}</td>
            <td>${h.password}</td>
            <td class="buttons">
                <button type="button" onclick="EditUserEvent(${h.id})" class="actualizar h-update">Editar</button>
                <button type="button" onclick="DeleteUserEvent(${h.id})" class="eliminar h-delete">Eliminar</button>
            </td>
        `;

        tbodyHosted.appendChild(tr);
    });
};