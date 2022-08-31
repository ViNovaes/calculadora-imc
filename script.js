

let calcular = document.getElementById('calcular')
    function imc(){
        let nome = document.getElementById('nome').value
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value
        let resultado = document.getElementById('resultado')

        if(nome !== '' && altura !== '' && peso !== ''){
            let valorimc = peso / (altura * altura).toFixed(2)

            if (valorimc < 18.5) {
            resposta = "você esta abaixo do seu peso ideal!"
        }else if (valorimc <=18.6 && valorimc >= 24.9) {
            resposta = "você esta no seu peso ideal!"
        }else if (valorimc <=25.0 && valorimc >= 29.9) {
            resposta = "você esta levemente acima do seu peso!"
        }else if (valorimc <=30.0 && valorimc >= 34.9) {
            resposta = "você esta com obesidade tipo 1!"
        }else if (valorimc <=35.0 && valorimc >= 39.9) {
            resposta = "você esta com obesidade tipo 2(severa)!"
        }else {
            resposta = "você esta com obesidade tipo 3(mórbida)!"
        }
        resultado.textContent = `${nome} seu IMC é de ${valorimc} e ${resposta}`
    }else {
        resultado.textContent = `Preencha todos os campos`
    }
    }