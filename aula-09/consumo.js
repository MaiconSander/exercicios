window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var txtDistancia = document.getElementById("txtDistancia");

    var txtlitros = document.getElementById("txtLitros")

    btn1.onclick = function (e) {

        var totaldistancia = Distancia + Valorcombustivel;

        var Valorcombustivel = Combustivel + totaldistancia;

    }
    function litros(Distancia) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/consumo? totaldistancia + Valorcombustivel");

        xhr.send();
    }
}