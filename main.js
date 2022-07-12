let nombreIngresado = prompt("Ingrese su nombre")
console.log(nombreIngresado);

let montoIngresado = prompt("Ingrese el importe")
console.log(montoIngresado);

let cuotasIngresadas = prompt("Ingrese las cuotas deseadas (3,6 o 12)")
console.log(cuotasIngresadas);

let resultado = 0

function validarCuotas(primerNumero, segundoNumero) {
    resultado = primerNumero / segundoNumero;
    if (segundoNumero == 3)
        resultado = resultado * 1.05;
    else if (segundoNumero == 6)
        resultado = resultado * 1.15;
    else if (segundoNumero == 12)
        resultado = resultado * 1.20;
        else resultado = 0;
}

validarCuotas(montoIngresado, cuotasIngresadas);

console.log(resultado);

function validarResultado(resultado) {
    if (resultado == 0)
    alert("No es posible realizar el pago en esas cuotas.");
    else alert("El valor de la cuota es $" + resultado);}

validarResultado(resultado);
