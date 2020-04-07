//EXERCÍCIO 01

let endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function imprimeEndereco() {
    console.log("O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + "\"" + endereco.rua + "\" " + "com nº " + endereco.numero + ".");
}

//imprimeEndereco();


//ECERCÍCIO 02

function pares(x, y) {
    par = 0;

    console.log("NÚMEROS PARES NO INTERVALO ENTRE " + x + " e " + y + ":");

    if (x < y) {
        for (i = x; i < y; i++) {
            if (i % 2 == 0) {
                par = i;
                console.log(par);
            }
        }
    } else {
        for (i = y; i < x; i++) {
            if (i % 2 == 0) {
                par = i;
                console.log(par);
            }
        }
    }
}

//pares(2, 16);


//EXERCICIO 03 (TÁ ERRADO)


let skills = ["Javascript", "ReactJS", "Reactive Native"];

function temHabilidade(skills) {
    let indexOfSkills = skills.indexOf("Javascript");

    if (indexOfSkills == -1) {
        return false;
    } else {
        return true;
    }
}
temHabilidade(skills);



//EXERCÍCIO 04

function experiencia(anosEstudo) {

    if (anosEstudo < 0) {
        console.log("ERRO! a idade precisa ser superior a zero");
    } else if (anosEstudo >= 0 && anosEstudo <= 1) {
        console.log("Iniciante");
    } else if (anosEstudo > 1 && anosEstudo <= 3) {
        console.log("Intermediário");
    } else if (anosEstudo > 3 && anosEstudo <= 6) {
        console.log("Avançado");
    } else {
        console.log("Jedi Master");
    }
}

//experiencia(10);



//EXERCÍCIO 05:

let usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function organizaArraydeObjetos() {
    for (let value of usuarios) {
        console.log("O " + value.nome + " possui as habilidades: " + value.habilidades.join(", "));
    }
}

organizaArraydeObjetos();