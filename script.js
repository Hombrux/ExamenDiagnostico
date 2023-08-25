var tarea = document.getElementById('InputTarea');
const lista = document.getElementById('Lista'); 
var n;

//Crear Nueva Tarea
function nuevaTarea(){
    numeroTareas();
    console.log(n);
    tarea.value;
    lista.innerHTML = `<input type="checkbox" name="tarea${n+1}" id="tarea${n+1}"><label for="tarea${n+1}">${tarea.value}</label> <br>` + lista.innerHTML;
    tarea.value = '';
    deshabilitarTarea()
};

//Deshabilita las tareas cuando las han completado
function deshabilitarTarea(){
Array.from(lista.getElementsByTagName('input')).forEach(i => {
    console.log(i);
    i.addEventListener('click',function(event){
        i.disabled = true;
        i.nextSibling.style.textDecoration = 'line-through';
    });    
});
};

//Contar el numero de tareas
function numeroTareas(){
    var inpts = lista.getElementsByTagName('input');
    n = inpts.length;
}

deshabilitarTarea()