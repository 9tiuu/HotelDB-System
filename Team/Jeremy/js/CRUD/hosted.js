const tbody = document.getElementById('tableData');
tbody.innerHTML = '';

const Valitation = (id) => {
    const inpt = document.getElementById(id + '-hosted');

    if (inpt.value.trim() === '') {
        inpt.classList.add('error');
        inpt.value = 'Campo vacío';

        setTimeout(() => {
            inpt.classList.remove('error');
            inpt.value = '';
        }, 3000);

    } else { return inpt.value };
};

const CleanInpts = () => {
    const intps = document.querySelectorAll('.inpt-profile');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

const HOSTEDS = [];
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
        const findName = HOSTEDS.find(h => h.name === hostedName);


        if (!findRut && !findName) {
            HOSTEDS.push(hosted);
            console.log(HOSTEDS);

            DataTable();
            CleanInpts();

            hostedID += 1;
            HostedCreateModal.classList.remove('active');
        };
    };
};

// Eliminar pasajeros ---------------------------

const DeleteHosted = (id) => {
    const tr = document.getElementById('hosted_' + id);
    console.log(tr);
    tbody.removeChild(tr);
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
                <button type="button" class="actualizar h-update">Editar</button>
                <button type="button" class="eliminar h-delete">Eliminar</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
};