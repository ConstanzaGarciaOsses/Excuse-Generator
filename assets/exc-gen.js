// Creo una funcion que concatene los elementos de los 4 arreglos para generar una excusa aleatoria //

function excgen(){
    //Aqui van los let con los elementos con los que haremos las excusas 
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    // Ahora tenemos que hacer que la funcion seleccione aleatoriamente algun elemento de cada arreglo. 
    function seleccionAleatoria(let) {
        return let[Math.floor(Math.random() * let.length)];
    }

    // Generar la excusa combinando los elementos aleatorios
    var generarExcusa = seleccionAleatoria(who) + " " +
    seleccionAleatoria(action) + " " +
    seleccionAleatoria(what) + " " + 
    seleccionAleatoria(when);

    // Por ultimo se mostrará el resultado de la excusa aleatoria en la pagina. 
    document.getElementById("generarExcusa").textContent = generarExcusa
}
console.log()
