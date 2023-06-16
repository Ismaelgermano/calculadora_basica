function calcular(tipo, valor){
    if (tipo === 'acao'){
        if (valor === 'C'){
            document.getElementById('visor').value = ''
        }
        if(valor === '/' || valor === '-' || valor === '+' || valor === '*' || valor === '.'){
            var resultado = document.getElementById('visor').value += valor
        }
        if(valor === '='){
         var dadosDoVisor = document.getElementById('visor').value
         console.log(eval(dadosDoVisor))
         document.getElementById('visor').value = eval(dadosDoVisor)
        }
    }else if (tipo === 'valor'){
        var numero = document.getElementById('visor').value += valor
    }
}