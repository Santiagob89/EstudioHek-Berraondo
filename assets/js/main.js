const irArriba = document.querySelector(".arriba");

irArriba.addEventListener('click',() =>{
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
if(window.scrollY <500) {
        irArriba.style.right= -100 + "px";
    } else {
        irArriba.style.right= 5 + "px";
    }
});

let linea_carga;

window.onload = () =>{
    linea_carga = document.getElementById('linea-carga')
}

window.onscroll = (e) =>{
    let d_heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percetage =(window.scrollY / d_heigth) * 100;
    linea_carga.style.width = percetage + '%';};


