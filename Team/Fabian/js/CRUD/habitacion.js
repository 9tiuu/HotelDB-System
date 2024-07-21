const tbody = document.querySelector('.CrearH');
tbody.innerHTML='';

const Valitation = (id) => {
    const inpt = document.getElementById(id + 'Help');

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
    const intps = document.querySelectorAll('.inptH');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

const HABITACIONES = ['Habitaciones'];
let habitID = 1;

// Agregar Habitaciones ---------------------------

const Addbedroom = () => {
    const bednumber = Valitation('numero');
    const bedresponsable = Valitation('responsable');
    const bedfecha = Valitation('fecha');
    const bedcapacidad = Valitation('capacidad');
    const bedprecio = Valitation('precio');
    const bedpasajeros = Valitation('pasajeros');
    const bedestado = Valitation('estado');
    const bedorientacion = Valitation('orientacion');
    const BedModalCreate = document.querySelector('.create-bedroom');

    const bedroom = {
        
        number: bednumber,
        responsable: bedresponsable,
        fecha: bedfecha,
        capacidad: bedcapacidad,
        precio:bedprecio,
        pasajeros:bedpasajeros,
        estado:bedestado,
        orientation:bedorientacion
    };

    if (bednumber && bedresponsable && bedfecha && bedcapacidad && bedprecio && bedpasajeros && bedestado && bedorientacion) {

        const findNumber = HABITACIONES.find(h => h.number === bednumber);

        if (!findNumber) {
            HABITACIONES.push(bedroom);
            console.log(HABITACIONES);

            DataTable();
            CleanInpts();

            habitID += 1;
            BedModalCreate.classList.remove('active');
        };
    };
};

// Editar Habitacion ---------------------------

const EditbedroomEvent = (num) => {
    const MotalEdit = document.querySelector('.edit-bedroom');
    const btnEditCancel = document.querySelector('.b-btnECancel')

    MotalEdit.classList.add('active');

    btnEditCancel.addEventListener('click', () => {
        MotalEdit.classList.remove('active');
    });

    HABITACIONES.forEach(h => {
        if (h.number == num) {
            console.log(h.number, h.responsable, h.precio);
        };
    });
};

// Eliminar Habitacion ---------------------------

const DeletebedroomEvent = (num) => {
    const ModalDelete = document.querySelector(".delete-bedroom");
    const botonCancelar = document.getElementById("aboton-bedroom");
    const btnEliminar = document.getElementById('eboton-bedroom');
    const bedroom = document.querySelector('.habitE');

    ModalDelete.classList.add('active');
    bedroom.innerHTML = num; // test

    botonCancelar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');
    });

    btnEliminar.addEventListener('click', () => {
        const tr = document.getElementById('bedroom_' + num);
        ModalDelete.classList.remove('active');    
           
        tbody.removeChild(tr);
        console.log(HABITACIONES);
    });
};

//Buscar Habitacion

const DataTable = () => {
    const tr = document.createElement('tr');
    HABITACIONES.forEach(h => {
        tr.setAttribute('id', `bedroom_${h.number}`);

        tr.innerHTML = `
            <td>${h.number}</td>
            <td>${h.responsable}</td>
            <td>${h.fecha}</td>
            <td>${h.capacidad}</td>
            <td>${h.precio}</td>
            <td>${h.pasajeros}</td>
            <td>${h.estado}</td>
            <td>${h.orientation}</td>
            <td class="buttons">
                <button type="button" class="actualizar b-update" onclick="EditbedroomEvent(${h.number})">Editar</button>
                <button type="button" class="eliminar b-delete" onclick="DeletebedroomEvent(${h.number})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
};