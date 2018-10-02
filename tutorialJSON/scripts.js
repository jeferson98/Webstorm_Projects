let btn = document.getElementById("btn");
let txt = document.getElementById("text");
let img = document.getElementsByClassName("image");
let imagen=[];
let drr = "https://myanimelist.net/anime/";
let url = [], titulo = [], des=[];
let div=[];
btn.addEventListener("click", api);
    function api() {
        let code = txt.value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.jikan.moe/search/anime/'+code+'/1', true);
        xhr.onload = () => {

            if (xhr.status === 200) {
                for (let a = 0; a <= 3 ; a++) {
                    nuevoObjeto = JSON.parse(xhr.responseText);
                    let resultado = nuevoObjeto.result;
                    titulo[a] = resultado[a].title;
                    url[a] = resultado[a].image_url;
                    des[a] = resultado[a].description;
                    //console.log(resultado[a]);
                    //console.log(url[a]);
                    //div[a].createElement('img');
                    //div[a].appendChild(img);
                    img[a].innerHTML = `
                    <img class="img" src="${url[a]}" alt="" width="150px">
                    <h2 class="title">${titulo[a]}</h2>
                    <p class="description" >${des[a]}</p>
                    `

                }

            }

            else {
                console.log("error");
            }
            //txt.value = '';
        };
        xhr.send()
    }