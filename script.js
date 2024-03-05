function carregar() { 

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('Imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 21
var min = data.getMinutes()
var saudacao = window.document.getElementById('saudacao')
msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'diaeditado.png'
        document.body.style.background = '#ffebb9'
        saudacao.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tardeeditada.png'
        document.body.style.background = '#f2c06b'
        saudacao.innerHTML = 'Boa tarde!'

        
    } else {
        //boa noite 
        img.src = 'noiteeditada.png'
        document.body.style.background = '#0e335d'
        saudacao.innerHTML = 'Boa noite!'

    }
}
