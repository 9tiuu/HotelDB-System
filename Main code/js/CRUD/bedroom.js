const tbodyBedroom = document.querySelector('.CrearH');

const ValidationBedroom = (id) => {
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

const CleanInptsBedroom = () => {
    const intps = document.querySelectorAll('.inptH');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

let HABITACIONES = [];
let habitID = 1;

// Agregar Habitaciones ---------------------------

const AddBedroom = () => {
    const bednumber = ValidationBedroom('numero');
    const bedresponsable = ValidationBedroom('responsable');
    const bedfecha = ValidationBedroom('fecha');
    const bedcapacidad = ValidationBedroom('capacidad');
    const bedprecio = ValidationBedroom('precio');
    const bedpasajeros = ValidationBedroom('pasajeros');
    const bedestado = ValidationBedroom('estado');
    const bedorientacion = ValidationBedroom('orientacion');
    const BedCreateModal = document.querySelector('.create-bedroom');

    const bedroom = {   
        number: parseInt(bednumber),
        responsable: bedresponsable,
        fecha: bedfecha,
        capacidad: bedcapacidad,
        precio:bedprecio,
        pasajeros:bedpasajeros,
        estado:bedestado,
        orientation:bedorientacion
    };

    if (bednumber && bedcapacidad && bedprecio && bedestado && bedorientacion) {

        const findNumber = HABITACIONES.find(h => h.number === parseInt(bednumber));

        if (!findNumber) {
            HABITACIONES.push(bedroom);
            console.log(HABITACIONES);

            DataTableBedroom();
            CleanInptsBedroom();

            habitID += 1;
            BedCreateModal.classList.remove('active');

        } else {
            const BedNumberTitle = document.querySelector('.bedroomNumberTitle');
            BedNumberTitle.classList.add('warning');
            BedNumberTitle.innerHTML = 'La habitación ya existe';

            setTimeout(() => {
                BedNumberTitle.classList.remove('warning');
                BedNumberTitle.innerHTML = 'N° Habitación';
            }, 2000);
        };
    };
};

// Editar Habitacion ---------------------------

const EditbedroomEvent = (num) => {
    const MotalEdit = document.querySelector('.edit-bedroom');
    const btnEditCancel = document.querySelector('.b-btnECancel');

    const numhabit = document.getElementById('edit-num');
    const responsable = document.getElementById('edit-responsable');
    const fecha = document.getElementById('edit-fecha');
    const capacidad = document.getElementById('edit-capacidad');

    const precio = document.getElementById('edit-precio');
    const pasajerosp = document.getElementById('edit-pasajeros');
    const estado = document.getElementById('edit-estado');
    const orientacion = document.getElementById('edit-orientacion')

    MotalEdit.classList.add('active');

    btnEditCancel.addEventListener('click', () => {
        MotalEdit.classList.remove('active');
    });

    HABITACIONES.forEach(h => {
        if (h.number === num) {
            console.log(h.number, h.responsable, h.precio);

            numhabit.value = h.number;
            responsable.value = h.responsable;
            fecha.value = h.fecha;
            capacidad.value = h.capacidad;

            precio.value = h.precio;
            pasajerosp.value = h.pasajeros;
            estado.value = h.estado;
            orientacion.value = h.orientation;
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
        ModalDelete.classList.remove('active');    
        HABITACIONES = HABITACIONES.filter(h=>h.number!=num);
        
        DataTableBedroom();
        console.log(HABITACIONES);
    });
};

// Buscar Habitacion ---------------------------

document.querySelector('#inpBusqueda').addEventListener('input', (event)=>{
    if(event.target.value===''){
        console.log('busquedavacia');
        DataTableBedroom();
    }
    else{
        tbodyBedroom.innerHTML='';
        let NewList=HABITACIONES.filter( h=> h.number == event.target.value);
        
        NewList.forEach(h=>{
            const tr = document.createElement('tr');
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

            tbodyBedroom.appendChild(tr);
        });
    }
});

const DataTableBedroom = () => {
    tbodyBedroom.innerHTML='';
    
    HABITACIONES.forEach(h => {
        const tr = document.createElement('tr');
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

        tbodyBedroom.appendChild(tr);
    });
};