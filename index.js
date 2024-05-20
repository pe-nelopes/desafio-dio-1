let heroName = 'Pingu';
let heroXp = 5420;

console.log(`O Herói de nome ${heroName} está no nível de ${experienceLevel(heroXp)}`);

function experienceLevel(xp) {
    if (xp <= 1000) return 'Ferro';
    if (xp <= 2000) return 'Bronze';
    if (xp <= 5000) return 'Prata';
    if (xp <= 7000) return 'Ouro';
    if (xp <= 8000) return 'Platina';
    if (xp <= 9000) return 'Ascendente';
    if (xp <= 10000) return 'Imortal';

    return 'Radiante'
}

/* 
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/