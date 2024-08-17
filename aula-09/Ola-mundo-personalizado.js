window.onload = function (e) {

    var btn2 = document.getElementById("btn2");

    var txtNome = document.getElementByld("txtNome");

    btn2.onclik = function (e) {

        var nome = txtNome.value;

        OlamundoPersonalizado(nome);
    }
    function OlamundoPersonalizado(nome) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/OlaMundoPersonalizado?nome=" + nome);

        xhr.send();
    }
}