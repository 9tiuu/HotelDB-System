const tbodyHosted = document.querySelector('.hosted-tbody');

const ValidationHosted = (id) => {
    const inpt = document.getElementById(id + '-hosted');

    if (inpt.value.trim() === '') {
        inpt.classList.add('error');
        inpt.setAttribute('placeholder', 'Campo vacío');

        setTimeout(() => {
            inpt.classList.remove('error');
            inpt.setAttribute('placeholder', '');
        }, 2000);

    } else { return inpt.value };
};

const CleanInptsHosted = () => {
    const intps = document.querySelectorAll('.addP');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

const HOSTEDS = ['HostedList'];
let hostedID = 1;

// Agregar pasajeros ---------------------------

const AddHosted = () => {
    const hostedName = ValidationHosted('name');
    const hostedLastname = ValidationHosted('lastname');
    const hostedRut = ValidationHosted('rut');
    const hostedBedroom = ValidationHosted('bedroom-asigned');
    const HostedCreateModal = document.querySelector('.create-hosted');

    const hosted = {
        id: hostedID,
        name: hostedName,
        lastname: hostedLastname,
        rut: hostedRut,
        bedroom: hostedBedroom
    };

    if (hostedName && hostedLastname && hostedRut && hostedBedroom) {

        const findRut = HOSTEDS.find(h => h.rut === hostedRut);

        if (!findRut) {
            HOSTEDS.push(hosted);
            console.log(HOSTEDS);

            DataTableHosted();
            CleanInptsHosted();

            hostedID += 1;
            HostedCreateModal.classList.remove('active');

        } else {
            const RutTitle = document.querySelector('.HostedRutTitle');
            RutTitle.classList.add('warning');
            RutTitle.innerHTML = 'Rut registrado';

            setTimeout(() => {
                RutTitle.classList.remove('warning');
                RutTitle.innerHTML = 'Rut';
            }, 2000);
        }
    };
};

// Editar Pasajeros ---------------------------

const EditHostedEvent = (id) => {
    const MotalEdit = document.querySelector('.edit-hosted');
    const btnEditCancel = document.getElementById('btnCancelEdit');

    const namep = document.getElementById('edit-namep');
    const lastname = document.getElementById('edit-lastname');
    const rut = document.getElementById('edit-rut');
    const bedroom = document.getElementById('edit-bedroom');

    MotalEdit.classList.add('active');

    btnEditCancel.addEventListener('click', () => {
        MotalEdit.classList.remove('active');
    });

    HOSTEDS.forEach(h => {
        if (h.id === id) {
            console.log(h.id, h.name, h.rut);
            namep.value = h.name;
            lastname.value = h.lastname;
            rut.value = h.rut;
            bedroom.value = h.bedroom;
        };
    });
};

// Eliminar pasajeros ---------------------------

const DeleteHostedEvent = (id) => {
    const ModalDelete = document.querySelector(".delete-hosted");
    const botonCancelar = document.getElementById("aboton-hosted");
    const btnEliminar = document.getElementById('eboton-hosted');
    const hostedDel = document.querySelector('.delselectedhosted');

    ModalDelete.classList.add('active');
    hostedDel.innerHTML = id; // test

    botonCancelar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');
    });

    btnEliminar.addEventListener('click', () => {
        const tr = document.getElementById('hosted_' + id);
        ModalDelete.classList.remove('active');    
           
        tbodyHosted.removeChild(tr);
        console.log(HOSTEDS);
    });
};

const DataTableHosted = () => {
    const tr = document.createElement('tr');
    HOSTEDS.forEach(h => {
        tr.setAttribute('id', `hosted_${h.id}`);

        tr.innerHTML = `
            <td>${h.id}</td>
            <td>${h.name}</td>
            <td>${h.lastname}</td>
            <td>${h.rut}</td>
            <td>${h.bedroom}</td>
            <td class="buttons">
                <button type="button" onclick="EditHostedEvent(${h.id})" class="actualizar h-update">Editar</button>
                <button type="button" onclick="DeleteHostedEvent(${h.id})" class="eliminar h-delete">Eliminar</button>
            </td>
        `;

        tbodyHosted.appendChild(tr);
    });
};