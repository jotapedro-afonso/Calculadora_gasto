# 🚗 Calculadora de Autonomia de Veículo Elétrico ⚡

Uma aplicação web desenvolvida com **Node.js**, **Express.js** e **EJS** que calcula a distância máxima que um carro elétrico pode percorrer com base no consumo do veículo e na energia disponível na bateria.

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte da atividade:

> **ATIVIDADE 01 - Introdução ao Express.js - Calculadora**

O objetivo é criar uma aplicação utilizando **Express.js** capaz de receber dados através de um formulário, realizar um cálculo matemático e exibir o resultado para o usuário.

---

## 🖥️ Interface

![Tela da Calculadora]("C:\Users\JoãoPedroOliveiraAfo\Pictures\Screenshots\Captura de tela 2026-06-26 082712.png")

---

## 🚀 Funcionalidades

✅ Formulário para entrada dos dados do veículo  
✅ Cálculo automático da autonomia máxima  
✅ Exibição do resultado na mesma página  
✅ Estrutura utilizando rotas GET e POST  
✅ Renderização com EJS  

---

## 🧮 Fórmula utilizada

A autonomia é calculada através da fórmula:

Distância máxima (km) = Consumo (km/kWh) × Energia disponível (kWh)


### Exemplo:

Entrada:

Consumo: 6 km/kWh
Energia disponível: 50 kWh


Resultado:

Distância máxima: 300 km

---

## 📋 Exemplos de cálculo

| Consumo (km/kWh) | Bateria (kWh) | Autonomia (km) |
|---|---|---|
| 5 | 40 | 200 |
| 6 | 50 | 300 |
| 7 | 60 | 420 |

---

## 🛠️ Tecnologias utilizadas

- 🟢 Node.js
- 🟢 Express.js
- 🟢 EJS
- 🟢 HTML5
- 🟢 CSS3
- 🟢 JavaScript

---

## 📂 Estrutura do projeto


calculadora-autonomia/
│
├── views/
│ └── index.ejs
│
├── public/
│ └── style.css
│
├── app.js
│
├── package.json
│
└── README.md


---

## 🔄 Rotas da aplicação

### GET `/`

Exibe o formulário da calculadora.

Campos:

- Consumo do veículo (km/kWh)
- Energia disponível da bateria (kWh)

---

### POST `/`

Responsável por:

- Receber os dados enviados pelo usuário
- Realizar o cálculo da autonomia
- Exibir o resultado na página

---

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone <https://github.com/jotapedro-afonso/Calculadora_gasto.git>

Entre na pasta:

cd calculadora-autonomia

Instale as dependências:

npm install

Execute a aplicação:

node app.js

Acesse no navegador:

http://localhost:3000

👨‍💻 Desenvolvido por

Seu João Pedro afonso

Projeto acadêmico — Introdução ao Express.js 🚗⚡
