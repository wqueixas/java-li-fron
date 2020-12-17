function validaUsuario() {
    let userTxt = localStorage.getItem("userLogged");

  /*    if (!userTxt) {
        window.location = "index.html"
    } 
 */
    let user = JSON.parse(userTxt);

    
    document.getElementById("fotoUser").innerHTML = `<img src="${user.linkfoto}" class="mr-3" alt="...">` ;
    document.getElementById("dadosUser").innerHTML = `${user.nome} :  ${user.racf}`;
    //buscarUsuarios();


}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html"
}

function buscarParceiros(){
    
    fetch("http://localhost:8080/user/all")
        .then(res => res.json())
        .then(res => exibirParceiros(res))
    }


function exibirParceiros(lista){
    let opcoes='';
    for(let i =0; i <lista.length; i++){
        opcoes = opcoes + `<option value = ${lista[i].id}> ${lista[i].name}</option>`
    }

document.getElementById("selUser").innerHTML = opcoes;

}


