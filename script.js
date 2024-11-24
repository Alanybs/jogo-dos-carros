let corCarro = document.querySelector('#result')
let corFundo = document.querySelector('body')
let carroBranco = document.querySelector('#white')
let carroVermelho= document.querySelector('#red')
let btnBranco = document.querySelector('#branco')
let btnVermelho = document.querySelector('#vermelho')
let audio = new Audio('assets/audio/cars.mp3');
audio.autoplay = true;
audio.loop = true;

document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        corCarro.style.color = ''
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
        corFundo.style.backgroundColor = 'black'
        corCarro.textContent = '?'
        audio.pause();
        audio.currentTime = 0;
    }
})

carroBranco.addEventListener('click', () => {
    corCarro.textContent = 'Branco'
    if(corFundo.style.backgroundColor === 'black', 'red') {
        corFundo.style.backgroundColor = 'white'
        corCarro.style.color = 'red'
        carroBranco.style.height = '15px'
        carroBranco.style.top = '1rem'
        carroBranco.style.marginLeft = '2.5rem'
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
        audio.play();
    }
})

carroVermelho.addEventListener('click', () => {
    corCarro.textContent = 'Vermelho'
    if(corFundo.style.backgroundColor === 'black', 'white') {
        corFundo.style.backgroundColor = 'red'
        corCarro.style.color = 'white'
        carroVermelho.style.height = '15px'
        carroVermelho.style.top = '1rem'
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
        audio.play();
    }
})

btnBranco.addEventListener('click', () => {
    corCarro.textContent = 'Branco'
    if(corFundo.style.background === 'black', 'white') {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowUp') {
                corFundo.style.backgroundColor = 'white'
                corCarro.style.color = 'red'
                carroBranco.style.height = '15px'
                carroBranco.style.top = '1rem'
                carroBranco.style.marginLeft = '2.5rem'
                carroVermelho.style.height = ''
                carroVermelho.style.top = ''
                audio.play();
            } else if (e.key === 'ArrowDown') {
                corFundo.style.backgroundColor = 'black'
                corCarro.style.color = 'white'
                carroBranco.style.height = ''
                carroBranco.style.top = ''
                carroBranco.style.marginLeft = ''
                audio.pause();
            }
        })
    }
})

btnVermelho.addEventListener('click', () => {
    corCarro.textContent = 'Vermelho'
    if(corFundo.style.backgroundColor === 'black', 'white') {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowUp') {
                corFundo.style.backgroundColor = 'red'
                corCarro.style.color = 'white'
                carroVermelho.style.height = '15px'
                carroVermelho.style.top = '1rem'
                carroBranco.style.height = ''
                carroBranco.style.top = ''
                carroBranco.style.marginLeft = ''
                audio.play();
            } else if(e.key === 'ArrowDown') {
                corFundo.style.backgroundColor = 'black'
                carroVermelho.style.height = ''
                carroVermelho.style.top = ''
                audio.pause();
            }
        })
    }
})