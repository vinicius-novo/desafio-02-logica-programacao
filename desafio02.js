// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Ao final deve se exibir uma mensagem:
// "O Herói tem saldo de **{saldoVitorias}** está no nível de **{nivel}**"

//Definição das variáveis. Foram criadas variáveis para armaazenar o nome, as vitórias, derrotas, balanço(vitorias - derrotas) e seu nível
let HeroName = hero("Vinicius")
let StatusWin = winner(55)
let StatusLost = loser(2)
let Balance = progress(StatusWin, StatusLost)
let HerosLevel = level(Balance)
console.log(`O Herói tem saldo de ${StatusWin} vitórias e está no nível ${HerosLevel}\n`)
console.log(`Estatísticas do Herói:\nName: ${HeroName}\nVictories: ${StatusWin}\nDefeats: ${StatusLost}\nBalance: ${Balance}\nLevel: ${HerosLevel} `)

//Por se tratar de um código construído em um processo de aprendizado, optou-se por construir as funções separadamente, para se obter maior clareza e controle de cada elemento
function hero(name){
    let Name = name
    return Name
}

function winner(wins){
    let Win = wins
    return Win
}

function loser(defeats){
    let Defeat = defeats
    return Defeat
}

function progress(wins, defeats){
    let work = wins - defeats
    return work
}

function level(Balance){
  if(Balance<=10){
    nivel = "Ferro"
    return nivel
  }else if(Balance<=20){
    nivel = "Bronze"
    return nivel
  }else if(Balance<=50){
    nivel = "Prata"
    return nivel
  }else if(Balance<=80){
    nivel = "Ouro"
    return nivel
  }else if(Balance<=90){
    nivel = "Diamante"
    return nivel
  }else if(Balance <=100){
    nivel = "Lendário"
    return nivel
  }else{
    nivel = "Imortal"
    return nivel
  }

}