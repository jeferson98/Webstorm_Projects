
function  main() {
    let buscar = document.getElementById("search");
    let newItem = document.getElementById("name-item");
    let items = document.getElementById("list-items");
    let boton = document.getElementById("boton");
    let li=[], span=[],see, sp=[];
    let eliminar = document.getElementsByClassName("delete");
    let valor = document.getElementsByClassName("contenido");
    let lista = document.getElementsByClassName("item");

    for (let i = 0; i < eliminar.length; i++) {
        eliminar[i].addEventListener('click', function () {
           lista[i].style.display = "none";

        });
    }

    for(let y = 0 ; y < lista.length ; y++ ){

            console.log(valor[y].value);

    }
    newItem.addEventListener('input', function () {

        see = document.createElement('li');
        see.className = "item";
    });
    buscar.addEventListener('input',function () {
       // console.log(buscar.value);
        if(buscar.value !== ''){
            for(let i = 0 ; i < lista.length ; i++ ){
            lista[i].style.display = "none";
           // console.log(lista[i].value)
        }}

        for(let j = 0 ; j < lista.length ; j++ ){
            if(buscar.value===valor[j].innerText){
                lista[j].style.display = "block";
               // console.log(buscar.value);
            }
        }
    });
    boton.addEventListener('click', addItem);

        function addItem() {
        let a=lista.length;
            li[a] = document.createElement('li');
            li[a].className = "item";
            sp[a] = document.createElement('span');
            sp[a].className = "contenido";
            if (newItem.value !== '') {
                li[a].appendChild(document.createTextNode(newItem.value));
                span[a] = document.createElement('span');
                span[a].className = "delete";
                span[a].appendChild(document.createTextNode("x"));
                span[a].addEventListener('click', function () {
                    li[a-1].style.display = "none";
                });

                items.appendChild(li[a]);
                li[a].appendChild(sp[a]);
                li[a].appendChild(span[a]);
                newItem.value = '';
                a++;
            }
        }

}

window.onload = function () {
    main();
};