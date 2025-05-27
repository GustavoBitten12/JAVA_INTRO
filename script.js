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

