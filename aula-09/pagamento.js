window.onload = function (e) {

    var bnt1 = document.getElementById("btn1");

    var horas = document.getElementById("txtValorHoras");

    var trabalho = document.getElementById("txtHorasTrabalhadas");

    btn1.onclik = function (e) {

        var valor (valorHora, quantidadeHora, valortotal);

        var valortotal = valorHora + quantidadeHora;

        var valorHora = quantidadeHora + valortotal;

        hora(valor);
    }
    function hora(valor) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/pagamento?valorhora=25&Quantidadehora= valorHora + quantidadeHora + valortotal");

        xhr.send();
    }
}