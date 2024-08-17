window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var largura = document.getElementById("txtLargura");

    var comprimento = document.getElementById("txtComprimento");

    var valor = document.getElementById("txtValorM2");

    btn1.onclick = function (e) {

        var areaterreno (largura, comprimento, ValorM2);

        var valorComprimento = largura + comprimento;

        var valorTerreno = ValorM2 + valorComprimento;

        largura(comprimento);

    }
    function largura(comprimento) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/terreno?areaTerreno= terreno + comprimento + valorm2");

        xhr.send();
    }
}