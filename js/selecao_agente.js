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


}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html"
}

function buscarParceiros() {
    console.log("bucaparceiros");

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
    console.log("exibeparceiros");
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


