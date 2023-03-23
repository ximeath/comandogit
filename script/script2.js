let placa,tipo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas;
let formulario = document.getElementById('form')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos() 
})

function LeerDatos() {
    placa = document.getElementById('placa') .value
    tipo = document.getElementById('tipo').value
    modelo = document.getElementById('modelo').value
    propietario = document.getElementById('propietario').value
    fecha_de_entrada= document.getElementById('fecha de entrada').value
    hora= document.getElementById('hora').value
   cantidad_de_horas = document.getElementById('cantidad de horas').value
    ValidarData(placa,tipo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas)
    GuardarLocalStorage(placa,tipo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas)
    ListarData()
}


function ValidarData(placa,tipo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas) {
    if(placa.length==0 || tipo.length==0 || modelo.length==0 || propietario.length==0 || fecha_de_entrada.length==0 || hora.length==0 || cantidad_de_horas==0){

        swal.fire({
            title: 'error!',
            text: 'do you want to continue',
            icon: 'error',
            confirmButtonText: 'cool',
            iconColor: 'purple'
        }) 
    }
}

function GuardarLocalStorage(placa,tipo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas) {
    localStorage.setItem('placa',placa)
    localStorage.setItem('tipo',tipo)
    localStorage.setItem('modelo',modelo)
    localStorage.setItem('propietario',propietario)
    localStorage.setItem('fecha_de_entrada',fecha_de_entrada)
    localStorage.setItem('hora',hora)
    localStorage.setItem('cantidad_de_horas',cantidad_de_horas)
    ListarData()
}

    function ListarData() {
        let placaUsu = localStorage.getItem('placa')
        let tipoUsu = localStorage.getItem('tipo')
        let  modeloUsu = localStorage.getItem('modelo')
        let propietarioUsu = localStorage.getItem('propietario')
        let fecha_de_entradaUsu = localStorage.getItem('fecha_de_entrada')
        let horaUsu = localStorage.getItem('hora')
        let cantidad_de_horasUsu = localStorage.getItem('cantitad_de_horas')
        
    }
