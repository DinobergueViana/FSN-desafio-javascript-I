// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação

// adiciona um novo aluno;
function adicionarAluno(nome){
    let aluno = {
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    }
    console.log("Aluno adcionado com sucesso!")
    alunosDaEscola.push(aluno);
}

// exibe o nome da escola;
function exibirNomeEscola(){
    console.log("=".repeat(24));
    console.log(" São Joaquim Tec School");
    console.log("    Lista de alunos")
    console.log("=".repeat(24));
}

// lista todos os alunos;
function listarAlunos(){
    exibirNomeEscola();
    alunosDaEscola.forEach(function(aluno){
        for(var dados in aluno){
            console.log(dados.toUpperCase() + ": ", aluno[dados]);
        }
        console.log();
        console.log("-".repeat(24));
    })
}

// busca um aluno específico na lista de alunos e retorna esse aluno, alem de exibir uma mensagem de sucesso ou não;
function buscarAluno(nome){
    let alunoEncontrado = alunosDaEscola.find(function(aluno){
        if(aluno.nome == nome){
            return aluno;
        }
    });

    // exibe mensagem caso o aluno tenha sido encontrado ou não;
    if(alunoEncontrado != undefined){
        console.log("ALUNO ENCONTRADO")
        return alunoEncontrado;
    }else{
        console.log("ALUNO NÃO ENCONTRADO");
        return alunoEncontrado;
    }
} 

// matricula um aluno em um curso caso esteja cadastrado
function matricularAluno(aluno, curso){
    if(aluno != undefined){
        let cursos = {
            nomeDoCurso: curso,
            dataMatricula: new Date
        }
        aluno.cursos.push(cursos);
        console.log("ALUNO MATRICULADO COM SUCESSO!");
    }
}

// aplica falta em um aluno ja existente e que esteja matriculado em curso;
function aplicarFalta(aluno){
    if(aluno != undefined){
        if(aluno.cursos.length > 0){
            aluno.faltas += 1;
            console.log("Falta aplicada com sucesso!")
        }else{
            console.log("Não foi possivel aplicar falta. O aluno não está matriculado em um curso.")
        }
    }
}
