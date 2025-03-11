document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao=document.getElementsById('aumentar-fonte');

    let  tamanhoAtualFonte=1;
    aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtual +=;
    document.body.style.fontSize=`${tamanhoAtualFonte}rem`
    })
})