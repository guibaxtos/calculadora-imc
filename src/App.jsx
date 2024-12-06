// Importando as dependências
import React, { useState } from "react";
import "./App.css";

function App() {
  // Definindo os estados para altura, peso, IMC e classificação
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaEmMetros ** 2)).toFixed(2);
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    } else {
      alert("Por favor, preencha os campos de altura e peso corretamente.");
    }
  };

  // Função para classificar o IMC
  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao("Obesidade grau I");
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao("Obesidade grau II");
    } else {
      setClassificacao("Obesidade grau III ou Mórbida");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularIMC();
        }}
      >
        <div>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

