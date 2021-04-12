//const formsv = document.querySelector('#formula').placeholder;
//const busc = document.querySelector('#buscab');

//crear un array vacío
//var pprod = [];
/* db.collection("productos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //push para añadir items a un array 
        pprod.push(doc.data())
    });
}); */



//Arreglo con las rutas o indexeador
const rutas = [
    {nombre: 'Cariari - Guápiles', valor: 71, enlace: 'ca-gu'},
    {nombre: 'Cariari - Campo 4', valor: 200, enlace: 'ca-c4'},
    {nombre: 'Cariari - Encanto', valor: 100, enlace: 'ca-en'},
    {nombre: 'Cariari - Campo 5', valor: 250, enlace: 'ca-c5'},
    {nombre: 'Cariari - Los Ángeles', valor: 300, enlace: 'ca-la'},
    {nombre: 'Cariari - Portica', valor: 180, enlace: 'ca-po'},
    {nombre: 'Cariari - Astua Pirie', valor: 110, enlace: 'ca-ap'},
];

//selectores importantes
const formulario = document.querySelector('#formula');
//  =======> const boton = document.querySelector('#boton');
const resultado = document.querySelector('#results');
const result = document.querySelector('#pepepio')

//funcion principal
const filtrar = ()=> {
    /* console.log(formulario.value) */
    resultado.innerHTML = ''
    const texto = formulario.value.toLowerCase();
    for(let ruta of rutas){
        let nombre = ruta.nombre.toLowerCase()
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <a class="plosd" href="#${ruta.enlace}"><p style="margin-bottom: 5px;" class="itemrr">Ruta: ${ruta.nombre} - Información adicional: ${ruta.valor}</p></a>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML = `<li>Ruta no encontrada...</li>`
    }
}

// ======>  boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

//activador
filtrar()


window.addEventListener('hashchange', function(){
    unavez()
})
/* window.addEventListener('hashchange', function(){
    hash = window.location.hash.substring(1);
    //console.log("Hash changed!");
    //alert(hash);
    if (hash !== "") {
    switch (hash) {
        case 'ca-gu':
            //console.log('Mostrando: Guapiles')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Guápiles</h2> <br> <p>Vale es piola</p>'
            break;
        case 'ca-c4':
            //console.log('Mostrando: Campo 4')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Campo 4</h2>'
            break
        case 'ca-en':
            //console.log('Mostrando: Encanto')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Encanto</h2>'
            break
        case 'ca-c5':
            //console.log('Mostrando: Campo 5')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Campo 5</h2>'
            break
        case 'ca-la':
            //console.log('Mostrando: Los Ángeles')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Los Ángeles</h2>'
            break
        case 'ca-po':
            //console.log('Mostrando: Portica')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Portica</h2>'
            break
        case 'ca-ap':
            //console.log('Mostrando: Astua Pirie')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Astua Pirie</h2>'
            break                
        default:
            console.log('Ehmm, hash incorrecto ¿?')
            result.innerHTML = '<h2 style="color: #ea4335;"><span title="Identificador # en url">Hash</span> y ruta incorrecta.</h2>'
            break;
    }

   }
return hash;
}) */
function unavez() {
hash = window.location.hash.substring(1);
    //console.log("Hash changed!");
    //alert(hash);
   if (hash !== "") {
    switch (hash) {
        case 'ca-gu':
            //console.log('Mostrando: Guapiles')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Guápiles</h2>'
            break;
        case 'ca-c4':
            //console.log('Mostrando: Campo 4')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Campo 4</h2>'
            break
        case 'ca-en':
            //console.log('Mostrando: Encanto')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Encanto</h2>'
            break
        case 'ca-c5':
            //console.log('Mostrando: Campo 5')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Campo 5</h2>'
            break
        case 'ca-la':
            //console.log('Mostrando: Los Ángeles')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Los Ángeles</h2>'
            break
        case 'ca-po':
            //console.log('Mostrando: Portica')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Portica</h2>'
            break
        case 'ca-ap':
            //console.log('Mostrando: Astua Pirie')
            result.innerHTML = '<h2>Ruta seleccionada: Cariari - Astua Pirie</h2>'
            break                
        default:
            console.log('Ehmm, hash incorrecto ¿?')
            result.innerHTML = '<h2 style="color: #ea4335;"><span title="Identificador # en url">Hash</span> y ruta incorrecta.</h2>'
            break;
    }

   } 
}
unavez()