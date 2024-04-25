const opcoes = {
  pedra: {
    nome: "Pedra",
    derrotaContra: "tesoura",
  },
  papel: {
    nome: "Papel",
    derrotaContra: "pedra",
  },
  tesoura: {
    nome: "Tesoura",
    derrotaContra: "papel",
  },
};

const botoes = document.querySelectorAll("button");
const resultado = document.getElementById("resultado");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const jogadaComputador =
      Object.keys(opcoes)[
        Math.floor(Math.random() * Object.keys(opcoes).length)
      ];
    const jogadaUtilizador = botao.id;

    if (jogadaComputador === jogadaUtilizador) {
      resultado.textContent = "Empate!";
      resultado.style.color = "#E2EA85"; // Cor Amarelo Seco
      resultado.innerHTML =
        "<img src='https://flamingtext.com/net-fu/proxy_form.cgi?script=comics-logo&fontsize=80&text=No+Winner!%0D%0AIt%27s+a+Draw!&script=comics-logo&text=No+Winner!%0D%0AIt%27s+a+Draw!&fontsize=80&backgroundRadio=0&ext=gif&imageoutput=true' width='700'><br>Empataste!";
    } else if (opcoes[jogadaComputador].derrotaContra === jogadaUtilizador) {
      resultado.innerHTML = "Ganhaste!";
      resultado.style.color = "green"; // Cor Verde, de vencedor!
      resultado.classList.add("ganhou-animation");
      resultado.innerHTML =
        "<img src='https://media.istockphoto.com/id/1434200223/pt/vetorial/you-win-pixel-message-design-glitch-effect-stock-vector-illustration.jpg?s=170667a&w=0&k=20&c=g2mXTyzZFS4ApsGhQLfCahmQejVSPkTuYZoCqM1slMQ=' width='700'><br>Ganhaste!";

      setTimeout(() => {
        resultado.classList.remove("ganhou-animation");
      }, 1000); // Remover a classe da animação depois de 1 seg
    } else {
      resultado.style.color = "red"; // Cor Vermelha, de perdedor!
      resultado.classList.add("perdeu-animation");
      resultado.innerHTML =
        "<img src='https://t3.ftcdn.net/jpg/05/29/76/16/360_F_529761687_w6ZgCR7oJ8iyoPofo8hPikOw6EM9cp4m.jpg' width='700'><br>Perdeste!";
      setTimeout(() => {
        resultado.classList.remove("perdeu-animation");
      }, 500); // Remover a classe da animação depois de meio seg
    }

    resultado.innerHTML += ` O Computador jogou ${opcoes[jogadaComputador].nome}.`;
  });
});
