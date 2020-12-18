function validaUsuario() {
    console.log("validausuario");
    let userTxt = localStorage.getItem("userLogged");

    /*    if (!userTxt) {
          window.location = "index.html"
      } 
   */
    let user = JSON.parse(userTxt);


    document.getElementById("fotoUser").innerHTML = `<img src="${user.foto}" class="mr-3" alt="${user.name}">`;
    document.getElementById("dadosUser").innerHTML = `${user.name} :  ${user.racf}`;
    //buscarUsuarios();
    buscarParceiros();
    buscaTop10();


}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html"
}

function buscarParceiros() {

    let msg = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("http://localhost:8080/agente/lista", msg)
        .then(res => res.json())
        .then(res => exibirParceiros(res))
}


function exibirParceiros(lista) {
    /*     let opcoes='';
        for(let i =0; i <lista.length; i++){
            opcoes = opcoes + `<option value = ${lista[i].idAgente}>${lista[i].nome}</option>`
        }
    
    document.getElementById("selUser").innerHTML = opcoes; */

    let opcoes = '';
    for (let i = 0; i < lista.length; i++) {
        opcoes = opcoes + ` <option value=${lista[i].idAgente}>${lista[i].volumeTransacional} - ${lista[i].nome}</option>`;
    }

    document.getElementById("selUser").innerHTML = opcoes;

}


function buscaTop10() {

    let msg = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("http://localhost:8080/agente/top10", msg)
        .then(res => res.json())
        .then(res => exibeTop10(res))
}


function exibeTop10(lista) {
    /*     let opcoes='';
        for(let i =0; i <lista.length; i++){
            opcoes = opcoes + `<option value = ${lista[i].idAgente}>${lista[i].nome}</option>`
        }
    
    document.getElementById("selUser").innerHTML = opcoes; */

    let opcoes = '<ul class="list-group">';
    
    for (let i = 0; i < lista.length; i++) {
        opcoes = opcoes + ` <li class="list-group-item">${lista[i].nome} - ${lista[i].volumeTransacional}</li>`;
    }
opcoes=opcoes+'</ul>';

    document.getElementById("list-top10").innerHTML = opcoes;

}



function mostraConsolidado() {

    let msg = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("http://localhost:8080/agente/lista", msg)
        .then(res => res.json())
        .then(res => exibeConsolidado(res))
}


function exibeConsolidado(lista) {
    /*     let opcoes='';
        for(let i =0; i <lista.length; i++){
            opcoes = opcoes + `<option value = ${lista[i].idAgente}>${lista[i].nome}</option>`
        }
    
    document.getElementById("selUser").innerHTML = opcoes; */

    let opcoes = '<ul class="list-group">';
    
    for (let i = 0; i < lista.length; i++) {
        opcoes = opcoes + ` <li class="list-group-item">${lista[i].nome} - ${lista[i].volumeTransacional}</li>`;
    }
opcoes=opcoes+'</ul>';

    document.getElementById("list-top10").innerHTML = opcoes;

}
