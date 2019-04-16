document.getElementById("imgLogo").addEventListener("click", function () { console.log("Logo Clicado!"); });

var lDeso = document.querySelectorAll("div ul li");
lDeso.forEach(function (ul) {
    ul.addEventListener("click", function () {
        let v = this.getAttribute("data-value");
        alert("Item Desordenado: " + v + ".");
    });
});

var lOrd = document.querySelectorAll("div ol li");
lOrd.forEach(function (ol) {
    ol.addEventListener("click", function () {
        let v = this.getAttribute("data-value");
        alert("Item Ordenado: " + v + ".");
    });
});

var formulario = document.getElementById("form1");
var nome = document.getElementById("nome");
var corfavorita = document.getElementById("corFavorita");
var nascimento = document.getElementById("dNascimento");
var salario = document.getElementById("salario");


function focusInput(a) {
    var attNome = a.getAttribute("name")
    switch (attNome) {
        case "nome":
            if (nome.value == "") {
                alert("N�o eque�a de preencher o campo com seu nome.");
                break;
            }
            else {
                corfavorita.focus();
            }
        case "corFavorita":
            if (corfavorita.value == "") {
                alert("N�o eque�a de escolher uma cor.");
                break;
            }
            else {
                break;
            }
        case "dNascimento":
            if (nascimento.value == "") {
                alert("N�o eque�a de informar seu nascimento.");
                break;
            }
            else {
                salario.focus;
            }
        case "salario":
            if (salario.value == "") {
                alert("N�o eque�a de nos dizer seu sal�rio.");
                break;
            }
            else {
                let s = document.getElementsByName("Submit")
                s.focus()
            }
    }

}


function validaform() {
    if (nome.value == "") {
        alert("Informe o seu nome.");
        return false;
    }
    if (corFavorita.value == "") {
        alert("Informe uma cor valida.");
        return false;
    }
    if (dNascimento.value == "") {
        alert("Informe seu nascimento.");
        return false;
    }
    if (salario.value == "") {
        alert("Informe seu Sal�rio.");
        return false;
    }

    let tabela = document.getElementById("tabelaForm");
    let tr1 = document.createElement("tr");
    let conteudoNovoNome = document.createTextNode(nome.value);
    let conteudoNovoCor = document.createTextNode(corfavorita.value);
    let conteudoNovoNasc = document.createTextNode(nascimento.value.split('-').reverse().join('/'));
    let conteudoNovoSalar = document.createTextNode(salario.value);

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let l = document.getElementById("tabelaForm").getElementsByTagName("tr").length;

    if (l <= 5) {
        td1.appendChild(conteudoNovoNome);
        tr1.appendChild(td1);
        td2.appendChild(conteudoNovoCor);
        tr1.appendChild(td2);
        td3.appendChild(conteudoNovoNasc);
        tr1.appendChild(td3);
        td4.appendChild(conteudoNovoSalar);
        tr1.appendChild(td4);
        tabela.appendChild(tr1);
    }
    else {
        alert("Voc� n�o pode adicionar mais dados");
    }

    let lexcl = document.querySelectorAll("table tr")
    lexcl.forEach(function (l) {
        l.addEventListener("click", exclRow)
        function exclRow() {
            if (this != lexcl[0]) {
                this.parentNode.removeChild(this);
            }
        }
    });
    
    document.getElementById("form1").reset();
    return false;
}

let lexcl = document.querySelectorAll("table tr")
for (let i = 0; i < lexcl.length; i++) {
    lexcl[i].addEventListener("click", exclRow)
    function exclRow() {
        if (this != lexcl[0]) {
            this.parentNode.removeChild(this);
        }
    }
}

function blockEnterTabForm() {
    return !(window.event && window.event.keyCode == 13 || window.event && window.event.keyCode == 9)
}


