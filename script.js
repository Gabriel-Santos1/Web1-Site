var imagem = ''
var numImg = 0
var baralho = []

const deckDisponivel = [
    [
        "./assets/card-chaves.jpeg",
        "./assets/card-chapolim.jpeg",
        "./assets/card-kiko.jpeg",
    ],

    [
        "./assets/card-bombasaur.jpeg",
        "./assets/card-squirtle.jpeg",
        "./assets/card-charmander.jpeg",
    ],

    [
        "./assets/card-goku.jpeg",
        "./assets/card-trunks.jpeg",
        "./assets/card-piccolo.jpeg",
    ]

]
function pegarImage(img, event) {

    numImg = img

    document.querySelectorAll('.card-principal').forEach(carta => {
        carta.classList.remove('selecionado');
    });

    event.target.classList.add('selecionado');

}

function alterarImagem(event) {
    if (numImg === 0) {
        return
    }

    let src = event.target.src
    let card_principal = document.getElementById(`card-${numImg}`);
    card_principal.src = src
}

function deckPreset() {
    let select_deck = Math.floor(Math.random() * 3)
    for (let i = 1; i < 4; i++) {
        let card_principal = document.getElementById(`card-${i}`);
        card_principal.src = deckDisponivel[select_deck][i - 1]
    }

}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function retornar_cartas() {
    baralho = embaralhar(deckDisponivel.flat())
    for (i = 1; i <= 6; i++) {
        carta_baixo = document.getElementById(`card-baixo-${i}`)
        console.log(baralho[i])
        carta_baixo.src = baralho[i]
    }

}
