const tbodyBedroom = document.querySelector('.CrearH');
const tbodyTransaction = document.querySelector('.transaction-tbody');

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

//validar error en editar
const ValidationEdit = (inpt) => {
    if (inpt.value.trim() === '') {
        inpt.classList.add('error');
        inpt.setAttribute('placeholder', 'Campo vacío');

        setTimeout(() => {
            inpt.classList.remove('error');
            inpt.setAttribute('placeholder', '');
        }, 2000);

    } else { return inpt.value };
}

const CleanInptsBedroom = () => {
    const intps = document.querySelectorAll('.inptH');
    
    intps.forEach(inpt => {
        inpt.value = '';
    });
};

let HABITACIONES = [];
let TRANSACTIONS = [];
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

    let totalTransaction = bedcapacidad * bedprecio;

    const transaction = {
        number: parseInt(bednumber),
        responsable: bedroom.responsable,
        cantidad: bedroom.capacidad,
        precio: bedroom.precio,
        total: totalTransaction
    };

    if (bednumber && bedcapacidad && bedprecio && bedestado && bedorientacion) {

        const findNumber = HABITACIONES.find(h => h.number === parseInt(bednumber));

        if (!findNumber) {
            HABITACIONES.push(bedroom);
            TRANSACTIONS.push(transaction);
            console.log(HABITACIONES);
            console.log(TRANSACTIONS);

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
    const btnEditGuardar= document.querySelector('#editButton');//agregar boton

    const numhabit = document.getElementById('edit-num');
    const responsable = document.getElementById('edit-responsable');
    const fecha = document.getElementById('edit-fecha');
    const capacidad = document.getElementById('edit-capacidad');

    const precio = document.getElementById('edit-precio');
    const pasajerosp = document.getElementById('edit-pasajeros');
    const estado = document.getElementById('edit-estado');
    const orientacion = document.getElementById('edit-orientacion')

    MotalEdit.classList.add('active');
    numhabit.disabled = true;

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

    //actualizar
    btnEditGuardar.onclick = () => {
        if (ValidationEdit(responsable) &&  ValidationEdit(fecha) && ValidationEdit(capacidad) && ValidationEdit(precio) && ValidationEdit(pasajerosp) && ValidationEdit(estado) && ValidationEdit(orientacion)) {
            HABITACIONES.forEach(h => {
                if (h.number === parseInt(num)) {
                    console.log(h.number, h.responsable, h.precio);
                    
                    h.responsable= ValidationEdit(responsable);
                    h.fecha = ValidationEdit(fecha);
                    h.capacidad = ValidationEdit(capacidad);
        
                    h.precio = ValidationEdit(precio);
                    h.pasajeros = ValidationEdit(pasajerosp);
                    h.estado = ValidationEdit(estado);
                    h.orientation = ValidationEdit(orientacion);

                    TRANSACTIONS.forEach(t => {
                        if (t.number === h.number) {
                            t.number = h.number;
                            t.responsable = h.responsable;
                            t.cantidad = h.capacidad;
                            t.precio = h.precio;
                            t.total = h.capacidad * h.precio;
                        };

                        if (t.responsable === h.responsable) {
                            if (t.responsable !== 'Definir al crear') {
                                DataTableTransaction();
                            };
                        };
                    });
                };
            });

            MotalEdit.classList.remove('active');
            DataTableBedroom();  
        };
    };
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
        HABITACIONES = HABITACIONES.filter(h => h.number !== num);
        
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
            <td>$${h.precio}</td>
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

/////////////////// Transaccion de Habitaciones ///////////////////

const DataTableTransaction = () => {
    tbodyTransaction.innerHTML = '';

    TRANSACTIONS.forEach(t => {
        const tr = document.createElement('tr');
        tr.setAttribute('id', `transaction_${t.number}`);

        tr.innerHTML = `
            <td>${t.number}</td>
            <td>${t.responsable}</td>
            <td>${t.cantidad}</td>
            <td>$${t.precio}</td>
            <td>$${t.total}</td>
            <td class="buttons">
                <button type="button" class="eliminar t-delete" onclick="DeleteTransactionEvent(${t.number})">Eliminar</button>
            </td>
        `;

        tbodyTransaction.appendChild(tr);
    });
};

// Buscar Transaccion ---------------------------

document.getElementById('buscarResponsable').addEventListener('input', (event) => {
    if (event.target.value == '') {
        DataTableTransaction();

    } else {
        tbodyTransaction.innerHTML = '';
        let newTransaction = TRANSACTIONS.filter(t => t.responsable == event.target.value);
        
        newTransaction.forEach(t => {
            const tr = document.createElement('tr');
            tr.setAttribute('id', `transaction_${t.number}`);

            tr.innerHTML = `
                <td>${t.number}</td>
                <td>${t.responsable}</td>
                <td>${t.cantidad}</td>
                <td>$${t.precio}</td>
                <td>$${t.total}</td>
                <td class="buttons">
                    <button type="button" class="eliminar t-delete" onclick="DeleteTransactionEvent(${t.number})">Eliminar</button>
                </td>
            `;

            tbodyTransaction.appendChild(tr);
        });
    };
});

const DeleteTransactionEvent = (num) => {
    const ModalDelete = document.querySelector(".delete-transaction");
    const botonCancelar = document.getElementById("aboton-transaction");
    const btnEliminar = document.getElementById('eboton-transaction');

    ModalDelete.classList.add('active');

    botonCancelar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');
    });

    btnEliminar.addEventListener('click', () => {
        ModalDelete.classList.remove('active');    
        TRANSACTIONS = TRANSACTIONS.filter(t => t.number !== num);
        
        DataTableTransaction();
        console.log(TRANSACTIONS);
    });
};