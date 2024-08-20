const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'tá passando fome é? O desnutrido memo.';
        }else if (valorIMC < 25) {
            classificacao = 'não fez mais que sua obrigação, ou quer morrer cedo?';
        }else if (valorIMC < 30){
            classificacao = 'meio pesadinho em, cuidado ae.';
        }else if (valorIMC < 35){
            classificacao = 'tá gordin meu fi, vigia.';
        }else if (valorIMC < 40){
            classificacao = 'eita projeto de Thais Carla, emagrece ae';
        }else {
            classificacao = 'não tem jeito, é a Thais em pessoa, faz uma dieta ai besta vai ter uminfarto ainda.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);10