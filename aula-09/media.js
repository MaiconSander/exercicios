window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var media = document.getElementById("NumeroMedia1");

    var media = document.getElementById("NumeroMedia2");

    btn1.onclik = function (e) {

        var Media (NumeroMedia1,NumeroMedia2);

        var media = NumeroMedia1 + NumeroMedia2;

        var soma = Media / 2;

        soma(media);
    }

    function soma(Media) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/media? NumeroMedia1 + Numeromedia2");


        xhr.send();
    }
}