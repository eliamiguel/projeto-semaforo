

const img = document.querySelector('#img')
const cores = document.querySelector(".cores")
let indece= 0;
let timer= null;


const proximo= ()=>{
  if(indece < 2){
    indece++
  }else {
    indece= 0;
  }
}

const limpar=()=>{
  clearInterval(timer)
}
const botaoAutomatico= ()=>{
  const cores=['vermelho', 'amarelo', 'verde']
  const cor= cores[indece]
  funcoesButoes[cor]()
  proximo()
 
}

const  funcoesButoes = {
  "vermelho": ()=>img.src='./img/vermelho.png',
  "amarelo": ()=>img.src='./img/amarelo.png',
  "verde": ()=> img.src='./img/verde.png',
  "automatico":()=> timer=setInterval( botaoAutomatico, 1000)
}


const butoesCores = (e)=>{
limpar()
  funcoesButoes[e.target.id]()
}
cores.addEventListener('click', butoesCores)



/*let indeceCor= 0;
let timer = null;
function butoes(event) {
  limparInterval()
  funcoesButoes[event.target.id]()
  
}
const proximo= ()=>{
  if(indeceCor < 2){
    indeceCor++
  }else {
    indeceCor= 0
  }
}
const limparInterval= ()=>{
  clearInterval(timer)
}
const trocarCor = ()=>{
  const cores=['vermelho', 'amarelo', 'verde']
  const cor = cores[indeceCor]
  funcoesButoes[cor]()
  proximo()
}


const funcoesButoes ={
  "vermelho" : ()=>{img.src='./img/vermelho.png'},
  "amarelo" : ()=>{img.src='./img/amarelo.png'},
  "verde" : ()=>{img.src='./img/verde.png'},
  "automatico" : ()=>timer = setInterval(trocarCor, 1000)
}


cores.addEventListener("click", butoes)


*/