const candidato = {
  nome: "Willian",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3,
};

const vagas = [
  {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto",
  },
  {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido",
  },
  {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3000,
    modalidade: "Presencial",
  },
];

function classificarCompatibilidade(compatibilidade) {
  if (compatibilidade >= 80) {
    return "Alta compatibilidade";
  } else if (compatibilidade >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}
function analisarVagas(candidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter(function (requisito) {
    return candidato.habilidades.includes(requisito);
  });
  const habilidadesFaltantes = vaga.requisitos.filter(function (requisito) {
    return !candidato.habilidades.includes(requisito);
  });

  const compatibilidade =
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

return {
  empresa: vaga.empresa,
  cargo: vaga.cargo,
  modalidade: vaga.modalidade,
  salario: vaga.salario,
  compatibilidade: Math.round(compatibilidade),
  classificacao: classificarCompatibilidade(compatibilidade),
  habilidadesEncontradas: habilidadesEncontradas,
  habilidadesFaltantes: habilidadesFaltantes,
};
}

const resultados = vagas.map(function (vaga) {
  return analisarVagas(candidato, vaga);
});

console.log("Resultados da Análise de Vagas para o Candidato:");
resultados.forEach(function (resultado) {
console.log(`Modalidade: ${resultado.modalidade}`);
console.log(`Salário: R$ ${resultado.salario}`);
console.log(`Compatibilidade: ${resultado.compatibilidade}%`);
console.log(`Classificação: ${resultado.classificacao}`);
});

function encontrarMelhorVaga(resultados) {
  const melhorVaga = resultados.reduce(function (melhor, resultado) {
    return parseFloat(resultado.compatibilidade) > parseFloat(melhor.compatibilidade)
      ? resultado
      : melhor;
  }, resultados[0]);

  return melhorVaga;
}

const melhorVaga = encontrarMelhorVaga(resultados);
console.log(`Compatibilidade: ${melhorVaga.compatibilidade}%`);