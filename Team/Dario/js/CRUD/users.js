const tbodyUser = document.querySelector('.user-tbody');

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

//validar error en editar
const ValidationEditUser = (inpt) => {
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

let USERS = [];
let userID = 1;

// Agregar Usuarios ---------------------------

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
            registroUser(userUsername)
            userID += 1;
            UserCreateModal.classList.remove('active');
        };
    };
};

// Editar Usuarios ---------------------------

const EditUserEvent = (id) => {
    const MotalEdit = document.querySelector('.edit-user');
    const btnEditCancel = document.getElementById('btnCancelEditUser');
    const saveUser = document.querySelector('#editButtonUsuario'); //agregar boton

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

    saveUser.onclick = () => {
        if (ValidationEditUser(username) && ValidationEditUser(typeuser) && ValidationEditUser(email) && ValidationEditUser(password)) {
            USERS.forEach(h => {
                if (h.id === id) {
                    console.log(h.id, h.username, h.password);
                    
                    h.username = ValidationEditUser(username);
                    h.rol = ValidationEditUser(typeuser);
                    h.email = ValidationEditUser(email);
                    h.password = ValidationEditUser(password);
                };
            });

            MotalEdit.classList.remove('active');
            DataTableUser();
            ediUser(username.value)
        }
    };
};

// Eliminar Usuarios ---------------------------

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
        const paratomarusuario = USERS.find(h => h.id == id);
        ModalDelete.classList.remove('active');    
        USERS = USERS.filter(h => h.id != id);

        DataTableUser();
        console.log(USERS);    
        registroEli(paratomarusuario.username)
        
    });
};

// Buscar Usuarios ---------------------------

const findUser = document.getElementById('buscarusuarios');

findUser.addEventListener('input', (event) => {
    if (event.target.value === '') {
        DataTableUser();

    } else {
        tbodyUser.innerHTML = '';
        let newUSERS = USERS.filter(u => u.username == event.target.value);

        newUSERS.forEach(h => {
            const tr = document.createElement('tr');
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

            tbodyUser.appendChild(tr);
        });
    };   
});

const DataTableUser = () => {
    tbodyUser.innerHTML = '';

    USERS.forEach(h => {
        const tr = document.createElement('tr');
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

        tbodyUser.appendChild(tr);
    });
};


const auditoriaA = document.querySelector('.audit-data');

const registroUser = (username) =>{
    const diayhota = new Date();
    const total = diayhota.toLocaleString();
    const resgistrousuario = document.createElement("div");
    
    resgistrousuario.classList.add("data-user", "user-add-data")

    resgistrousuario.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill-add adduser" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
        </svg> <p>Se ha creado un nuevo usuario: <b class="user-name-data">${username}</b></p><p class="info-data">${total}</p>
        
        `;
    
    // auditoriaA.appendChild(resgistrousuario) para que aparesca arriba
    const firstChild = auditoriaA.firstChild;
    auditoriaA.insertBefore(resgistrousuario, firstChild)
}

const ediUser = (username) =>{
    const diayhota = new Date();
    const total = diayhota.toLocaleString();
    const editouser = document.createElement("div");
    
    editouser.classList.add("data-user", "user-edit-data")

    editouser.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill-gear edituser" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
        </svg> <p>Se han modificado los datos del usuario: <b class="user-name-data">${username}</b></p> <p class="info-data">${total}</p>
        `;
    // auditoriaA.appendChild(editouser)
    const firstChild = auditoriaA.firstChild;
    auditoriaA.insertBefore(editouser, firstChild)
}


const registroEli = (username) => {
    const diayhota = new Date();
    const total = diayhota.toLocaleString();
    const registroEliminar = document.createElement("div");
    
    registroEliminar.classList.add("data-user", "user-delete-data")

    registroEliminar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill-x deleteuser" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
        </svg> <p>Se ha eliminado el usuario: <b class="user-name-data">${username}</b></p> <p class="info-data">${total}</p>
        `;
    // auditoriaA.appendChild(registroEliminar)
    const firstChild = auditoriaA.firstChild;
    auditoriaA.insertBefore(registroEliminar, firstChild)
};

