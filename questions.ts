export interface Question {
  question: string;
  answers: { text: string; correct: boolean }[];
}

export const questions: Question[] = [
  {
    question: "Qual ferramenta utiliza Inteligência Artificial para ajudar no agro moderno?",
    answers: [
      { text: "ChatGPT e IA generativa", correct: true },
      { text: "Desmatamento intensivo", correct: false },
      { text: "Queimadas controladas", correct: false },
      { text: "Uso excessivo de agrotóxicos", correct: false },
    ],
  },
  {
    question: "O que é agricultura de precisão?",
    answers: [
      { text: "Plantar em fileiras retas sem tecnologia", correct: false },
      { text: "Uso de GPS, sensores e dados para otimizar a produção", correct: true },
      { text: "Técnica de irrigação manual com mangueira", correct: false },
      { text: "Colheita realizada exclusivamente à mão", correct: false },
    ],
  },
  {
    question: "Qual tecnologia permite monitorar lavouras por imagens aéreas?",
    answers: [
      { text: "Telescópios astronômicos", correct: false },
      { text: "Rádio AM rural", correct: false },
      { text: "Drones com câmeras multiespectrais", correct: true },
      { text: "Binoculares de campo", correct: false },
    ],
  },
  {
    question: "O que significa 'plantio direto' no agronegócio sustentável?",
    answers: [
      { text: "Plantar sementes sem arar o solo, preservando sua estrutura", correct: true },
      { text: "Contratar mão de obra direta sem intermediários", correct: false },
      { text: "Irrigar diretamente com água do rio", correct: false },
      { text: "Vender a produção diretamente ao consumidor", correct: false },
    ],
  },
  {
    question: "Qual é o principal benefício do uso de bioinsumos na agricultura?",
    answers: [
      { text: "Aumentar o uso de agrotóxicos sintéticos", correct: false },
      { text: "Reduzir custos de transporte", correct: false },
      { text: "Substituir insumos químicos por organismos naturais, reduzindo impacto ambiental", correct: true },
      { text: "Diminuir a produtividade para exportação", correct: false },
    ],
  },
  {
    question: "O que é o conceito de 'Farm to Table' na cadeia alimentar?",
    answers: [
      { text: "Exportar alimentos para outros países", correct: false },
      { text: "Encurtar a cadeia produtiva da fazenda até o consumidor final", correct: true },
      { text: "Cultivar plantas dentro de restaurantes", correct: false },
      { text: "Técnica de conservação de alimentos em câmara fria", correct: false },
    ],
  },
  {
    question: "Qual sistema de irrigação é considerado o mais eficiente no uso de água?",
    answers: [
      { text: "Inundação de toda a lavoura", correct: false },
      { text: "Aspersão com canhões de água", correct: false },
      { text: "Irrigação por gotejamento", correct: true },
      { text: "Regagem manual com baldes", correct: false },
    ],
  },
  {
    question: "O que são carbono créditos no agronegócio?",
    answers: [
      { text: "Moeda usada para comprar fertilizantes", correct: false },
      { text: "Certificados que representam redução de emissões de CO₂", correct: true },
      { text: "Desconto na conta de energia rural", correct: false },
      { text: "Tipo de financiamento para compra de tratores", correct: false },
    ],
  },
  {
    question: "Qual dessas é uma prática de economia circular no agro?",
    answers: [
      { text: "Queimar resíduos de colheita a céu aberto", correct: false },
      { text: "Jogar sobras de alimentos no lixo comum", correct: false },
      { text: "Transformar resíduos orgânicos em adubo (compostagem)", correct: true },
      { text: "Importar insumos de países distantes", correct: false },
    ],
  },
  {
    question: "O que faz um 'algoritmo de previsão climática' para o agricultor?",
    answers: [
      { text: "Controla automaticamente os tratores no campo", correct: false },
      { text: "Analisa dados e prevê riscos de geadas, secas e chuvas", correct: true },
      { text: "Calcula o preço dos grãos na bolsa de valores", correct: false },
      { text: "Gera relatórios de folha de pagamento dos trabalhadores", correct: false },
    ],
  },
];
