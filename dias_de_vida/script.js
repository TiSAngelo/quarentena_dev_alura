function calculaIdade() {
    let nome = document.getElementById('nome').value;
    let diaDeNascimento = document.getElementById('diaNascimento').value;
    let mesDeNascimento = document.getElementById('mesNascimento').value;
    let anoDeNascimento = document.getElementById('anoNascimento').value;

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();

    function anoResultadoEmDias() {
        diaAnosDeVida = ((ano - 1) - anoDeNascimento) * 365;
        return diaAnosDeVida;
    }

    function mesResultadoEmDias() {
        if (mesDeNascimento > mes) {
            totMes = mes - 1;
            diaMesesDeVida = totMes * 30.45;
        } else {
            totMes = (mes - 1) - mesDeNascimento;
            diaMesesDeVida = totMes * 30.45;
        }
        return diaMesesDeVida;

    }

    function diasResultado() {
        if (diaDeNascimento < dia) {
            diaDiasDeVida = dia - diaDeNascimento;
        } else {
            diaDiasDeVida = (30.45 - diaDeNascimento) + dia;
        }
        return diaDiasDeVida;
    }

    function resultadoFinal() {
        totalDeDiasVividos = anoResultadoEmDias() + mesResultadoEmDias() + diasResultado();
        return totalDeDiasVividos;
    }

    alert(nome + "\n \n" + "Desde o dia de seu nascimento até hoje, você viveu " + resultadoFinal() + " dias!");
}