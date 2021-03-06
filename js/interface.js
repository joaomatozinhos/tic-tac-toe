// esse código cuida da parte visual do jogo e portanto faz a comunicação HTML com JS

function play() {
  let square = event.target
  let position = square.id

  if (move(position)) {
    // atrasa um pouco para aparecer o alert, pois senão o último emoji não aparece
    setTimeout(() => {
      alert(`O jogo acabou! O vencedor foi o jogador ${playerTime}`)
    }, 10)
  }
  updateSquare(position)
}

// função para preencher o tabuleiro
function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

// resetar o jogo
let btnReset = document.getElementById('btn-reset')
btnReset.addEventListener('click', reset)
