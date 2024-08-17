window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var caixanumero1 = document.getElementById("caixanumero1");

    var caixanumero2 = document.getElementById("caixanumero2");

    btn1.onclick = function (e) {

        var soma = caixanumero1 + caixanumero2;

        somar(soma)
    }
    function somar(soma) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/somar?caixanumero1+caixanumero2");

        xhr.send();
    }
  
} 


