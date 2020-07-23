// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação

// adiciona um novo aluno;
function adicionarAluno(nome){
    let aluno = {
        nome: nome,
        notas: [],
        curso: [],
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

// busca um aluno específico na lista de alunos e o exibe, alem de uma mensagem de sucesso ou não;
function buscarAluno(nome){
    let alunoEncontrado = false;
    alunosDaEscola.find(function(aluno){
        // exibe os dados do aluno encontrado
        if(aluno.nome == nome){
            alunoEncontrado = true;
            console.log("ALUNO ENCONTRADO")
            console.log()
            for(let dados in aluno){
                console.log(dados.toUpperCase() + ": ", aluno[dados]);
            }
        }
    });

    // exibe mensagem caso o aluno tenha sido encontrado
    if(!alunoEncontrado){
        console.log("ALUNO NÃO ENCONTRADO!")
    }
} 
