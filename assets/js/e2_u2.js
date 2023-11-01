function calcular() {
    const nombre = document.getElementById("nombre").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    const nota5 = parseFloat(document.getElementById("nota5").value);
    const nota6 = parseFloat(document.getElementById("nota6").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
        alert("Por favor, ingresa notas válidas.");
        return;
    }

    
    const url = `resultado.html?nombre=${nombre}&nota1=${nota1}&nota2=${nota2}&nota3=${nota3}&nota4=${nota4}&nota5=${nota5}&nota6=${nota6}&promedio=${promedioPonderado}`;
    window.location.href = url;
}
