// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação

// adiciona um novo aluno após verificar o tipo da variável enviada como parâmetro;
function adicionarAluno(nome){
    if((typeof nome === 'string' && Number(nome).toString() == 'NaN') && !nome == ""){
        let aluno = {
            nome: nome,
            notas: [],
            cursos: [],
            faltas: 0
        }
        alunosDaEscola.push(aluno);
        console.log("Aluno adcionado com sucesso!");
    }else{
        console.log("Desculpe, não foi possível adicionar o aluno.")
    }
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
    }else{
        console.log("ALUNO NÃO ENCONTRADO");
    }
    return alunoEncontrado;
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
            console.log("Não foi possivel aplicar a falta. O aluno não está matriculado em um curso.")
        }
    }
}

// aplica uma nota a um aluno específico
function aplicarNota(aluno, nota){
    if(aluno != undefined){
        if(aluno.cursos.length > 0){
            aluno.notas.push(nota);
            console.log("Nota aplicada com sucesso!")
        }else{
            console.log("Não foi possivel aplicar a nota. O aluno não está matriculado em um curso.")
        }
    }
}

// verifica se um aluno pode ou não ser aprovado;
function aprovarAluno(aluno){

    // soma todas as notas e retorna a média do aluno;
    function calcularMedia(notas){
        let somaDasNotas = 0;
        somaDasNotas = notas.reduce(function(acumulador, nota){
            return acumulador + nota;
        })
        return somaDasNotas / notas.length;
    }

    if(aluno != undefined){
        let media = 0;
        if(aluno.cursos.length > 0){
            media = calcularMedia(aluno.notas);

            if(aluno.faltas < 4 && media >= 7){
                console.log("ALUNO APROVADO!");
            }else{
                console.log("ALUNO REPROVADO");
            }
        }else{
            console.log("Não foi possível concluir esta ação. O aluno não está matriculado em um curso.")
        } 
    }
}

