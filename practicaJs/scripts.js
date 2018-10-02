function main () {
    var boton = document.getElementById("btn");
    var n = document.getElementById("fin");
    var serie = document.getElementById("result");
    var lista = document.getElementsByClassName("lista");
    let seleccion = -1;

    for(let i = 0; i<lista.length; i++) {
        lista[i].addEventListener("click",function(){
            seleccion = i;
            for (let j = 0;j<=lista.length; j++){

                    lista[i].classList.add("activado");


                    lista[j].classList.remove("activado");


            }
        });
    }

        boton.addEventListener("click", function () {
            if (seleccion === 0) uno();
            if (seleccion === 1) dos();
            if (seleccion === 2) tres();
            if (seleccion === 3) cuatro();
            if (seleccion === 4) cinco();
            if (seleccion === 5) seis();
            if (seleccion === 6) siete();
            if (seleccion === 7) ocho();

        });

     function uno() {
        var serieFinal = [];
        //  / , & , % , $ , / , & , % , $ , / , & , % , $
        for (var j = 1; j <= n.value; j++) {
            if (j % 4 === 0) {
                serieFinal.push("$");
            }
            if (j % 4 === 1) {
                serieFinal.push("/");
            }
            if (j % 4 === 2) {
                serieFinal.push("&");
            }
            if (j % 4 === 3) {
                serieFinal.push("%");
            }

        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    };

    function dos() {
        var serieFinal = [];
        //1 , 2 , 3 , 5 , 8 , 13 , 21 ,
        var suma, a = 0, b = 1, i;

        for (i = 0; i < n.value; i++) {
            suma = a + b;
            serieFinal.push(suma);
            a = b;
            b = suma;

        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    }

    function tres() {
        var serieFinal=[];
        var y;
        y = 1;
        //1 , 0 , 2 , 5 , 3 , 0 , 4 , 5 , 5 , 0 , 6 , 5 , 7 ,
        for (var i = 1; i <= n.value; i++) {
            if (i % 2 === 1) {
               serieFinal.push(y);
                y++;
            }
            if (i % 4 === 0) {
                serieFinal.push("5");
            }
            if (i % 4 === 2) {
               serieFinal.push("0");
            }
        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    }

    function cuatro() {
        //+1/25 , -4/24 , +9/23 , -16/22 , +25/21 , -36/20 ,
        var serieFinal=[];
        var i, y = 25;
        for (i = 1; i <= n.value; i++) {
            if (i % 2 === 1) {
                serieFinal.push("+" + i * i + "/" + y);
                y--;
            }
            else {
                serieFinal.push("-" + i * i + "/" + y);
                y--;
            }

        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    };

    function cinco() {
        //2 , 0 , 1 , 4 , 0 , 2 , 6 , 0 , 3 , 8 , 0 , 4 , 10 ,
        var serieFinal=[];
        var i, y = 2;
        for (i = 1; i <= n.value; i++) {
            if (i % 3 === 1) {
                serieFinal.push(y );
                y += 2;
            }
            if (i % 3 === 2) {
                serieFinal.push("0");
            }
            if (i % 3 === 0) {
                serieFinal.push(i / 3);
            }
        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";

    };

    function seis() {
        //+1/100 , -4/95 , +7/90 , -10/85 , +13/80
        var serieFinal=[];
        var i, y = 100, j = 1;
        for (i = 1; i <= n.value; i++) {
            if (i % 2 === 1) {
                serieFinal.push("+" + j + "/" + y);
                y -= 5;
                j += 3;
            }
            else {
                serieFinal.push("-" + j + "/" + y);
                y -= 5;
                j += 3;
            }
        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    };

    function siete() {
        var serieFinal=[];
        for (var i = 1; i<=n.value; i++){
            if(i%4!==1){
                serieFinal.push("-"+i);
            }
            else{
                serieFinal.push("+"+i);
            }
        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    };

    function ocho() {
        var serieFinal=[];
        var j=1;
        for (var i = 1; i <= n.value; i++){
            if(i%3===1){
                serieFinal.push(j);
                j++;
            }
            if(i%3===2){
                serieFinal.push("10");
            }
            if(i%3===0){
                serieFinal.push("15");
            }
        }
        console.log(serieFinal.join(', '));
        serie.innerHTML=serieFinal.join(', ');
        serie.style.display="block";
    };
}
window.onload = function () {
    main();
     //uno();
    // dos();
    // tres();
    // cuatro();
    // cinco();
    // seis();
    // siete();
    // ocho();
};