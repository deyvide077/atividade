class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    getAlunos () {
        return this.alunos;
    }
    getAlunosPorId (id) {
        
    }
    addAluno (aluno) {
        this.alunos.push(aluno);
    }

    getProfessores () {
        return this.professores;
    }
    geProfessoresPorId (id) {
    }

    addProfessores (professor) {
        this.professores.push(professor);
    }
}

module.exports = new BancoDeDados();
