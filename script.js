document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 


    const aumentaFonteBotao=document.getElementById('aumenta-fonte');
    const diminuirFonteBotao=document.getElementById('diminuir-fonte');

    let  tamanhoAtualFonte=1;
    aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtual += 0,1;
    document.body.style.fontSize=`${tamanhoAtualFonte}rem`
    })
    diminuirFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize=`$(tamanhoAtualFonte)rem`

    })
})