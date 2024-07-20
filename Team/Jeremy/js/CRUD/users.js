const tbody = document.getElementById('tableData2');
console.log(tbody);
tbody.innerHTML = '';

const validacion = (id) => {
    const inpt = document.getElementById(id + "-vali");
    console.log(inpt);

    if (inpt.value.trim() === "") {
        inpt.classList.add("error");
        inpt.value = "campo vacio";

        setTimeout(() => {
            inpt.classList.remove("error");
            inpt.value = "";
        }, 3000);
    } else {
        return inpt.value;
    }
};

const limpiar = () => {
    const intps = document.querySelectorAll(".inpt-profile");
    intps.forEach(inpt => {
        inpt.value = "";
    });
};

const usuarios = [];
let usuarioid = 1;

const AgregarUsuario = () => {
    const user = validacion("usario");
    const tipousuario = validacion("tipouse");
    const correo = validacion("correouse");
    const contraseñá = validacion("contrause");
    const usuarioSistema = document.querySelector(".create-user");

    const usuario = {
        id: usuarioid,
        name: user,
        tipouser: tipousuario,
        email: correo,
        passwor: contraseñá
    };

    if (user && tipousuario && correo && contraseñá) {

        const findcorreo = usuarios.find(h => h.email === correo);

        if (!findcorreo) {
            usuarios.push(usuario);
            console.log(usuarios);

            limpiar();
            datos();

            usuarioid += 1;
            usuarioSistema.classList.remove("active");
            
        } 
    }
};

const eliminar = (id) => {
    const tr = document.getElementById("usuario_" + id);
    console.log(tr);
    tbody.removeChild(tr);
  
};

const datos = () => {
    const tr = document.createElement("tr");
    usuarios.forEach(h => {
        tr.setAttribute('id', `usuario_${h.id}`);
        tr.innerHTML = `
            <td>${h.id}</td>
            <td>${h.name}</td>
            <td>${h.tipouser}</td>
            <td>${h.email}</td>
            <td>${h.passwor}</td>
            <td class="buttons">
                <button type="button" class="actualizar u-update">Editar</button>
                <button type="button" class="eliminar u-delete" onclick="">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

const buton = document.getElementById("createButton");
buton.addEventListener("click", AgregarUsuario);


// const btnEliminar = document.querySelectorAll(".u-delete")
// btnEliminar.addEventListener("click", eliminar)

