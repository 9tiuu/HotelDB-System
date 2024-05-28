// Formulario test 

const button = document.getElementById('buttonAdd');

button.addEventListener('click', () => {
    let form = document.getElementById('form');
    const tableData = document.getElementById('tableData');

    const nombre = document.getElementById('name').value;
    const numero = document.getElementById('number').value;
    const rut = document.getElementById('rut').value;
    
    if (nombre == '' || numero == '' || rut == '') {
        alert('Campos vacios...');
        return false;

    } else {
        let userList = [];

        let user = {name:nombre, num:numero, rutt:rut};
        userList.push(user);

        userList.forEach(function(data) {
            tableData.innerHTML += `
            <tr>
                <td>${data.name}</td>
                <td>${data.num}</td>
                <td>${data.rutt}</td>
                <td class="buttons">
                    <button type="button" class="btn btn-primary btn-sm">Editar</button>
                    <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>`;
        });  
            
        form.reset();
    };
});
