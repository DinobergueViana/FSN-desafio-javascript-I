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

// lista todos os alunos;
function listarAlunos(){
    exibirNomeEscola();
    for(let i=0; i < alunosDaEscola.length; i++){
        for(var dado in alunosDaEscola[i]){
            console.log(dado.toUpperCase() + ": ", alunosDaEscola[i][dado]);
        }
        console.log();
        console.log("-".repeat(24));
    }
}