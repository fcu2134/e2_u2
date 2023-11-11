// Obtener los valores necesarios de la URL (puedes usar parámetros de consulta si es necesario)
const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get("nombre");
const nota1 = parseFloat(urlParams.get("nota1"));
const nota2 = parseFloat(urlParams.get("nota2"));
const nota3 = parseFloat(urlParams.get("nota3"));
const nota4 = parseFloat(urlParams.get("nota4"));
const nota5 = parseFloat(urlParams.get("nota5"));
const nota6 = parseFloat(urlParams.get("nota6"));


const ponderacionUnidad1 = (nota1 * 0.12  + nota2 * 0.21).tofixed(2);
const ponderacionUnidad2 = (nota3 * 0.12  + nota4 * 0.21).tofixed(2) ;
const ponderacionUnidad3 = (nota5 * 0.12 + nota6 * 0.21 ).tofixed(2);

const promedioPonderado = (parseFloat(ponderacionUnidad1) + parseFloat(ponderacionUnidad2) + parseFloat(ponderacionUnidad3)).toFixed(1);

const promedioUnidad1 = (ponderacionUnidad1 * 33/100 ).toFixed(2);
const promedioUnidad2 = (ponderacionUnidad2 * 33/100 ).toFixed(2);
const promedioUnidad3 = (ponderacionUnidad3 * 33/100 ).toFixed(2);

document.getElementById("nombre").textContent = nombre;
document.getElementById("asignatura").textContent = "Tecnologías Web";

document.getElementById("u1_p").textContent = ponderacionUnidad1;
document.getElementById("u2_p").textContent = ponderacionUnidad2;
document.getElementById("u3_p").textContent = ponderacionUnidad3;

document.getElementById("nota1").textContent = nota1;
document.getElementById("nota2").textContent = nota2;
document.getElementById("nota3").textContent = nota3;
document.getElementById("nota4").textContent = nota4;
document.getElementById("nota5").textContent = nota5;
document.getElementById("nota6").textContent = nota6;

document.getElementById("nota1Ponde").textContent = ponderacionUnidad1;
document.getElementById("nota2Ponde").textContent = ponderacionUnidad2;
document.getElementById("nota3Ponde").textContent = ponderacionUnidad3;

document.getElementById("promedioFinal").textContent = "Promedio final: " + promedioPonderado;

const aprobadoMensaje = promedioPonderado > 4.0 ? "¡Has aprobado la asignatura!" : "No has aprobado la asignatura.";
document.getElementById("aprobadoMensaje").textContent = aprobadoMensaje;

