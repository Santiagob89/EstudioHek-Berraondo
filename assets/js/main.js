let linea_carga;

window.onload = () =>{
    linea_carga = document.getElementById('linea-carga')
}

window.onscroll = (e) =>{
    let d_heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percetage =(window.scrollY / d_heigth) * 100;
    linea_carga.style.width = percetage + '%';};


