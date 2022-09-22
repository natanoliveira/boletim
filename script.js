function boletim() {

  // CAPTURANDO ELEMENTOS E DENOMINANDO VARIÁVEIS
  let saida = document.querySelector('div#res')
  let nota1 = prompt('Digite a 1a nota.')
  let nota2 = prompt('Digite a 2a nota.')
  let qtdNotas = 2;
  let media
  let soma


  // SUBSTITUINDO A VÍRGULA POR SEGURANÇA CASO O OPERADOR USE-A
  nota1 = nota1.replace(',', '.')
  nota2 = nota2.replace(',', '.')

  // CONVERTENDO OS VALORES PARA FLOAT
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)

  // CONDICIONAL PARA AFIRMAÇÃO
  if (nota1 > 0 && nota2 > 0) {

    // SOMA DAS NOTAS
    soma = nota1 + nota2

    // MÉDIA ADQUIRIDA
    media = soma / qtdNotas

    // SAÍDAS PARA O OPERADOR
    saida.innerHTML = `<p>RESULTADO</p>`
    saida.innerHTML += `<p>---------------------</p>`
    saida.innerHTML += `<p>1a Nota: <strong>${nota1}</strong></p>`
    saida.innerHTML += `<p>2a Nota: <strong>${nota2}</strong></p>`
    saida.innerHTML += `<p>Média: <strong>${media}</strong></p>`

  } else {
    alert('Digite todas as notas para ter a média.')
    saida.innerHTML = ''
  }
}