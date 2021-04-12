//Arreglo con las rutas o indexeador
const rutas = [
    {nombre: 'Cariari - Guápiles', valor: 150, enlace: 'ca-gu'},
    {nombre: 'Cariari - Campo 4', valor: 200, enlace: 'ca-c4'},
    {nombre: 'Cariari - Encanto', valor: 100, enlace: 'ca-en'},
    {nombre: 'Cariari - Campo 5', valor: 250, enlace: 'ca-c5'},
    {nombre: 'Cariari - Los Ángeles', valor: 300, enlace: 'ca-la'},
    {nombre: 'Cariari - Portica', valor: 180, enlace: 'ca-po'},
    {nombre: 'Cariari - Astua Pirie', valor: 110, enlace: 'ca-ap'},
];

//selectores importantes
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

//funcion principal
const filtrar = ()=> {
    /* console.log(formulario.value) */
    resultado.innerHTML = ''
    const texto = formulario.value.toLowerCase();
    for(let ruta of rutas){
        let nombre = ruta.nombre.toLowerCase()
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <a href="#${ruta.enlace}" target="_blank"><button>Ruta: ${ruta.nombre} - Precio: ${ruta.valor}</button></a><br>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML = `<li>Ruta no encontrada...</li>`
    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

//activador
filtrar()