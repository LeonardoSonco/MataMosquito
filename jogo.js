var altura = 0;
var largura = 0;
var vidas = 1;
var timer = 10;
var timerSpanwmosquito = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel ==='arnold'){
    timerSpanwmosquito = 750
} else if (nivel ==='dificil'){
    timerSpanwmosquito = 750
}

function sizeWindow(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    
}

function randomSpawn(){
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas >3){
            window.location.href = 'end_game.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
        
    }
    
    var posicaoX = Math.floor(Math.random() * (largura-140))
    var posicaoY= Math.floor(Math.random() * (altura-140)) 
    
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = sizemosquitoRandom()+ " " + sidemosquitoRandom()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
    
}

function sizemosquitoRandom(){
    var size = Math.floor(Math.random()*3)
    switch (size) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function sidemosquitoRandom(){
    var side = Math.floor(Math.random()*2)
    switch (side) {
        case 0:
            return 'mosquito-right'
        case 1:
            return 'mosquito-left'
        
    }
}

sizeWindow()

var cronometro = setInterval(function(){
    if(timer < 0){
        clearInterval(cronometro)
        clearInterval(spanwmosquito)
        window.location.href = 'win_game.html'
    }else{
        document.getElementById('timer').innerHTML = timer
    }
    timer -=1
    
},1000)

var spanwmosquito = setInterval(function(){randomSpawn()}, timerSpanwmosquito)

