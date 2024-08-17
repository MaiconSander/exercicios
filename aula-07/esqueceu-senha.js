window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

     var btnEmail = document.getElementById("btnEmail");

    btnEmail.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            ExibirMensagemErro("Informe o email");
        }
    };

    function ExibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");  

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }
    function recuperarSeenha (mensagem) {

        alert("A recuperaçao de senha foi realizada com sucesso");
        }
    }
