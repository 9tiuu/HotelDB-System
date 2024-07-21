const tbody = document.querySelector('.hosted-tbody');

const Valitation = (id) => {
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

const CleanInpts = () => {
    const intps = document.querySelectorAll('.addP');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

const HOSTEDS = ['HostedList'];
let hostedID = 1;

// Agregar pasajeros ---------------------------

const AddHosted = () => {
    const hostedName = Valitation('name');
    const hostedLastname = Valitation('lastname');
    const hostedRut = Valitation('rut');
    const hostedBedroom = Valitation('bedroom-asigned');
    const HostedCreateModal = document.querySelector('.create');

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

            DataTable();
            CleanInpts();

            hostedID += 1;
            HostedCreateModal.classList.remove('active');
        };
    };
};

// Editar Pasajeros ---------------------------

const EditHostedEvent = (id) => {
    const MotalEdit = document.querySelector('.edit');
    const btnEditCancel = document.getElementById('btnCancelEdit')

    MotalEdit.classList.add('active');

    btnEditCancel.addEventListener('click', () => {
        MotalEdit.classList.remove('active');
    });

    HOSTEDS.forEach(h => {
        if (h.id === id) {
            console.log(h.id, h.name, h.rut);
        };
    });
};

// Eliminar pasajeros ---------------------------

const DeleteHostedEvent = (id) => {
    const ModalDelete = document.querySelector(".alert-eliminar");
    const botonCancelar = document.getElementById("aboton-hosted");
    const btnEliminar = document.getElementById('eboton-hosted');
    const hosted = document.querySelector('.delselectedhosted');

    ModalDelete.classList.add('active');
    hosted.innerHTML = id; // test

    botonCancelar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');
    });

    btnEliminar.addEventListener('click', () => {
        const tr = document.getElementById('hosted_' + id);
        ModalDelete.classList.remove('active');    
           
        tbody.removeChild(tr);
        console.log(HOSTEDS);
    });
};

const DataTable = () => {
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

        tbody.appendChild(tr);
    });
};