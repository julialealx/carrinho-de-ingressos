document.addEventListener('DOMContentLoaded', () => {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtdPista = document.getElementById('qtd-pista');
    let qtdSuperior = document.getElementById('qtd-superior');
    let qtdInferior = document.getElementById('qtd-inferior');
  
    // Função para realizar a compra
    function comprar() {
      let tipo = tipoIngresso.value;
      let quantidade = parseInt(qtdInput.value);
      
      if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
      }
      
      // Verificar se há quantidade suficiente disponível
      if (tipo === 'pista' && quantidade > parseInt(qtdPista.textContent)) {
        alert('Quantidade insuficiente de ingressos para Pista.');
        return;
      }
      if (tipo === 'superior' && quantidade > parseInt(qtdSuperior.textContent)) {
        alert('Quantidade insuficiente de ingressos para Cadeira Superior.');
        return;
      }
      if (tipo === 'inferior' && quantidade > parseInt(qtdInferior.textContent)) {
        alert('Quantidade insuficiente de ingressos para Cadeira Inferior.');
        return;
      }
      
      // Atualiza a quantidade disponível
      if (tipo === 'pista') {
        qtdPista.textContent = parseInt(qtdPista.textContent) - quantidade;
      } else if (tipo === 'superior') {
        qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - quantidade;
      } else if (tipo === 'inferior') {
        qtdInferior.textContent = parseInt(qtdInferior.textContent) - quantidade;
      }
  
      // Limpa o campo de quantidade
      qtdInput.value = '';
    }
  
    // Adiciona evento ao botão de compra
    document.querySelector('button').addEventListener('click', comprar);
  });