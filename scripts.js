swal ( " ¡Hola mundo!" ) ;
function pintarNumero(numero) {
    pintarDatos(numero)
}

function pintarOperador(operador) {
    pintarDatos(operador)
}

function pintarDatos(dato){
    let valorInput = document.getElementById("data")
    valorInput.value = `${valorInput.value}${dato}`
}

function Limpiar(){
    document.getElementById("data").value=null
}

function mostrarResultado() {
    let valorInput=document.getElementById("data").value
    let arreglo = valorInput.split("")

    if (arreglo[1]== "+") {
      
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById("data").value = suma 
}
    else if (arreglo[1]== "-") {
      
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById("data").value = resta 
}

    else if (arreglo[1]== "*") {
      
        let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById("data").value = multiplicar 
}
    else if (arreglo[1]== "/") {
      
        let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById("data").value = dividir 
}
}

/*function mostrarResultado() {
    let valorInput=document.getElementById("data").value
    let arreglo = valorInput.split("")

    switch (arreglo[1]) {
        case "+":
            console .log ("suma")
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById("data").value = suma 
            break;
        case "-":
            console.log("resta")
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById ("data").value = resta 
            break;
            default:
                alert("No es + ni menos"
        case "*":
            console.log("multiplicar")
            let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById ("data").value = multiplicar 
            break;
        case "/":
            console.log("dividir")
            let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById ("data").value = dividir 
            break;

}*/

    function Diafecha (){
        let dia = prompt("¿que dia es hoy?")
        
        switch (dia){
            case "lunes":
                alert ("hoy es lunes")
                break;
        }

        switch (dia){
            case "martes":
                alert("hoy es martes")
                break;
        }

        switch(dia){
            case "miercoles":
                alert("Hoy es miercoles")
                break;
        }


        switch (dia){
            case "jueves":
            alert("Hoy es jueves")
            break;
        }

        switch (dia){
            case "viernes":
                alert ("Hoy es viernes")
                break;

        }

        switch (dia){
            case "domingo":
                alert ("Hoy es domingo")
                break;

        }

}
