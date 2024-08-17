window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var Preco = document.getElementById("txtPrecoUnitario");

    var Quantidade = document.getElementById("txtQuantidade");

    var cliente = document.getElementById("txtValorDadoCliente");

    btn1.onclick = function (e) {

        var precoUnitario (preco, quantidade, valorPago);

        var precoTotal = preçoUnitario * quantidade;

        var troco = valorPago - precoTotal;

        valor(troco);
    }

    function valor(troco) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7259/api/aula8/troco?pre%C3%A7oUnitario= precoUnitario * quantidade - valorPago - precoTotal");

        xhr.send();
    }
}