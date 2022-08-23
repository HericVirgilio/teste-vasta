function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");
    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos " ;
    }
}
function abrirOpcoesMenu(){
    var menu = document.getElementById("menu__footer-escondido");
    var botao = document.getElementById("button-menu-footer");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }
}