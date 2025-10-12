const mostrarTablaDividir = (event) => {
  event.preventDefault(); 

  const numero = Number(document.getElementById('numero').value);

  if (numero >= 0 && numero <= 10) {
    let tabla = document.getElementById('tabla');
    let tablaDividir = `<h2>Tabla de dividir del numero ${numero}</h2>`;
    tablaDividir += '<ul>';
    
    for (let i = 1; i <= 10; i++) {
      let resultado = (numero / i).toFixed(2);
      tablaDividir += `<li>${numero} / ${i} = ${resultado}</li>`;
    }

    tablaDividir += '</ul>';
    tabla.innerHTML = tablaDividir;

  } else {
    alert('El numero tienen que estar entre 0 y 10');
    document.getElementById("numero").value = '';
  }
}