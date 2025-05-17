let textTwo = ' <span style="color: red;">e agora que você clicou no meu Sobre , eu tenho total controle do seu PC ! até logo...</span>';

function mudarTextoP() {
  let paragrafoSobre = document.getElementById("pSobre");
  if (paragrafoSobre) {
    let textoOne = paragrafoSobre.textContent;
    paragrafoSobre.innerHTML = textoOne + textTwo;
    console.log('to zoando') 
  }
}
