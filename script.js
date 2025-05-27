// esse é o 1 exercício

function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('par');
    }else{
    
    console.log('impar');
    }

}


    verificarPar(4);
    verificarPar(7);






let numeroUsuario = parseInt(prompt("digite um número:"));
verificarPar(numeroUsuario);


// esse é o 2


function calcular(n1,n2){

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2 : 'Não pode dividir pro zero';
    const multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}

let n1 = parseFloat(prompt("digite seu primeiro número:"));
let n2 = parseFloat(prompt("digite seu primeiro número:"));

calcular(n1,n2)


//esse é o 3






let numero = 10;
let deplay = 0;

while (numero >=1){

    console.log(numero);
    numero--;
}

//esse é o 4 


function inverterTexto(str) {
    return str.split("").reverse().join("");
  }
  
  const textoInvertido = inverterTexto("JavaScript");
  console.log(textoInvertido); 

  // esse é o 5
  

  function contarCaracteres(str) {
    return str.length;
  }
  
  const numeroCaracteres = contarCaracteres("Hello World");
  console.log(numeroCaracteres); 

  // esse é o 6

  const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
  };
  
  console.log(carro.modelo);


  // esse é o 7

  function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}!`);
  }
  
  mensagemPersonalizada("João"); // Saída: Olá! João!
  mensagemPersonalizada("Maria", "Bom dia");

  //esse e´o 8

  function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  const mediaCalculada = media(10, 20, 30);
  console.log("A média é:", mediaCalculada); // Saída: A média é: 20
  
  // ---
  
  // 9
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log(`${i} - Múltiplo de 3`);
    } else {
      console.log(`${i} - Não múltiplo de 3`);
    }
  }
  
  
  // 10
  function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split("").reverse().join("");
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
  }
  
  console.log(verificarPalindromo("arara")); // Saída: true
  console.log(verificarPalindromo("reviver")); // Saída: true
  console.log(verificarPalindromo("javascript")); // Saída: false

// 11
function verificarSinal(numero) {
    if (numero > 0) {
      console.log("Positivo");
    } else if (numero < 0) {
      console.log("Negativo");
    } else {
      console.log("Zero");
    }
  }
  
  verificarSinal(5);    // Saída: Positivo
  verificarSinal(-3);   // Saída: Negativo
  verificarSinal(0);    // Saída: Zero
  
  // ---
  
  // 12
  function converterTemperatura(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  const fahrenheit = converterTemperatura(25);
  console.log(`${25}°C é igual a ${fahrenheit}°F`); 
  
  // ---
  
  // 13
  let soma = 0;
  let contadorSomatorio = 1;
  while (contadorSomatorio <= 100) {
    soma += contadorSomatorio;
    contadorSomatorio++;
  }
  console.log("A soma dos números de 1 a 100 é:", soma); 
  
  // ---
  
  // 14
  function substituirPalavra(str) {
    // O 'g' na expressão regular é para substituir todas as ocorrências
    return str.replace(/azul/g, "vermelho");
  }
  
  const textoOriginal = "O céu é azul e o mar é azul profundo.";
  const textoModificado = substituirPalavra(textoOriginal);
  console.log(textoModificado); // Saída: O céu é vermelho e o mar é vermelho profundo.
  
  // ---
  
  // 15
  function verificarTamanho(str) {
    if (str.length > 10) {
      console.log("A string tem mais de 10 caracteres.");
    } else {
      console.log("A string tem 10 caracteres ou menos.");
    }
  }
  
  verificarTamanho("Programação"); // Saída: A string tem mais de 10 caracteres.
  verificarTamanho("Olá");         // Saída: A string tem 10 caracteres ou menos.
  
  // ---
  
  // 16
  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
  console.log("A terceira fruta da lista é:", frutas[2]); // Saída: A terceira fruta da lista é: Laranja
  
  // ---
  
  // 17
  function saudacao(nome, saudacaoMensagem = "Bem-vindo(a)") {
    return `${saudacaoMensagem}, ${nome}!`;
  }
  
  console.log(saudacao("Carlos"));           // Saída: Bem-vindo(a), Carlos!
  console.log(saudacao("Ana", "Olá"));       // Saída: Olá, Ana!
  
  // ---
  
  // 18
  function verificarAprovacao(nota) {
    if (nota >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  console.log(verificarAprovacao(7.5)); // Saída: Aprovado
  console.log(verificarAprovacao(4.9)); // Saída: Reprovado
  
  // ---
  
  // 19
  console.log("Números pares de 0 a 30:");
  for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  /* Saída:
  0
  2
  4
  ...
  28
  30
  */
  
  // ---
  
  // 20
  function contarVogais(palavra) {
    const vogais = "aeiouAEIOU";
    let contadorVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
        contadorVogais++;
      }
    }
    return contadorVogais;
  }
  
  console.log("Número de vogais em 'programacao':", contarVogais("programacao")); // Saída: Número de vogais em 'programacao': 5
  console.log("Número de vogais em 'HELLO':", contarVogais("HELLO")); // Saída: Número de vogais em 'HELLO': 2
  
  // ---
  
  // 21
  function somarArray(arr) {
    let somaElementos = 0;
    for (let i = 0; i < arr.length; i++) {
      somaElementos += arr[i];
    }
    return somaElementos;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  console.log("Soma dos elementos do array:", somarArray(numeros)); // Saída: Soma dos elementos do array: 15
  
  // ---
  
  // 22
  function dobrarNumero(numero) {
    return numero * 2;
  }
  
  console.log("O dobro de 7 é:", dobrarNumero(7)); // Saída: O dobro de 7 é: 14
  
  // ---
  
  // 23
  console.log("Números pares de 2 até 20 (while):");
  let numPar = 2;
  while (numPar <= 20) {
    console.log(numPar);
    numPar += 2;
  }
  /* Saída:
  2
  4
  ...
  18
  20
  */
  
  // ---
  
  // 24.
  function capitalizar(str) {
    if (str.length === 0) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  console.log(capitalizar("javascript")); // Saída: Javascript
  console.log(capitalizar("hello world")); // Saída: Hello world
  
  // ---
  
  // 25
  function anoBissexto(ano) {
    // Um ano é bissexto se for divisível por 4,
    // exceto se for divisível por 100 mas não por 400.
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }
  
  console.log("2024 é bissexto?", anoBissexto(2024)); // Saída: 2024 é bissexto? true
  console.log("2023 é bissexto?", anoBissexto(2023)); // Saída: 2023 é bissexto? false
  console.log("2000 é bissexto?", anoBissexto(2000)); // Saída: 2000 é bissexto? true
  console.log("1900 é bissexto?", anoBissexto(1900)); // Saída: 1900 é bissexto? false