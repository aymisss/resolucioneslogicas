document.addEventListener('DOMContentLoaded', ()=> {
    //selecciona el form por su ID->comentario
    const formulario=document.getElementById('formularioDescuento');
    const resultado=document.getElementById('resultado');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        resultado.textContent='';
        resultado.style.color='black';

        const edad= parseInt(document.getElementById('edad').value);
        const esEstudiante=document.getElementById('esEstudiante').checked;
        if(edad < 18  && esEstudiante){
            resultado.textContent="felicitaciones, obtiene un descuento de 10%";
            resultado.style.color='green';
        }else if(edad >=65){
            resultado.textContent="felicitaciones, obtiene un descuento de 10%";
            resultado.style.color='green';
        }else{
            resultado.textContent="lo siento no aplica descuento";
            resultado.style.color='red';
        }
    });
});
