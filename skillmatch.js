const candidato = {
  nome: "Willian",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3,
};

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  mostrarResumo() {
    return `${this.empresa} - ${this.cargo}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  mostrarArea() {
    return `Vaga Front-End ${this.nivel}`;
  }
}

const vagas = [
  new VagaFrontEnd(
    1,
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "GitHub", "Lógica de Programação"],
    2800,
    "Remoto",
    "Júnior",
  ),
  new VagaFrontEnd(
    2,
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    1800,
    "Híbrido",
    "Estágio",
  ),
  new VagaFrontEnd(
    3,
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Júnior",
  ),
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
  console.log(`Empresa: ${resultado.empresa}`);
  console.log(`Cargo: ${resultado.cargo}`);
  console.log(`Modalidade: ${resultado.modalidade}`);
  console.log(`Salário: R$ ${resultado.salario}`);
  console.log(`Compatibilidade: ${resultado.compatibilidade}%`);
  console.log(`Classificação: ${resultado.classificacao}`);
  console.log(
    `Habilidades Encontradas: ${resultado.habilidadesEncontradas.join(", ")}`,
  );
  console.log(
    `Habilidades Faltantes: ${resultado.habilidadesFaltantes.join(", ")}`,
  );
  console.log(" ");
});

function encontrarMelhorVaga(resultados) {
  const melhorVaga = resultados.reduce(function (melhor, resultado) {
    return resultado.compatibilidade > melhor.compatibilidade
      ? resultado
      : melhor;
  }, resultados[0]);

  return melhorVaga;
}

const melhorVaga = encontrarMelhorVaga(resultados);

console.log("Melhor Vaga para o Candidato:");
console.log(`Empresa: ${melhorVaga.empresa}`);
console.log(`Cargo: ${melhorVaga.cargo}`);
console.log(`Compatibilidade: ${melhorVaga.compatibilidade}%`);