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
    compatibilidade: compatibilidade.toFixed(2) + "%",
    habilidadesEncontradas: habilidadesEncontradas,
    habilidadesFaltantes: habilidadesFaltantes,
  };
}

const resultados = vagas.map(function (vaga) {
  return analisarVagas(candidato, vaga);
});

console.log("Resultados da Análise de Vagas para o Candidato:");
resultados.forEach(function (resultado) {
  console.log(`Empresa: ${resultado.empresa}`);
  console.log(`Cargo: ${resultado.cargo}`);
  console.log(`Compatibilidade: ${resultado.compatibilidade}`);
  console.log(`Habilidades Encontradas: ${resultado.habilidadesEncontradas.join(", ")}`);
  console.log(`Habilidades Faltantes: ${resultado.habilidadesFaltantes.join(", ")}`);
  console.log(" ");
});