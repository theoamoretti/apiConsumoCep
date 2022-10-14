document.querySelector('#buscar').onclick = buscarCEP;

class Endereco{
    constructor(cep,end,comp,bairro,cidade,estado){
        this.cep=cep;
        this.logradouro=end;
        this.complemento=comp;
        this.bairro=bairro;
        this.localidade=cidade;
        this.uf=estado;
    }
}

function buscarCEP(){
    let cep = document.querySelector('#campoCep').value; 
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(res=>res.json())
    .then((res)=>{
        let endereco = new Endereco(
            res.cep,
            res.logradouro,
            res.complemento,
            res.bairro,
            res.localidade,
            res.uf
        )
        console.log(res)
        console.log(endereco)
        
    let resultado = document.querySelector('#resultado')
    let ul = document.createElement('ul')
    let liCep = document.createElement('li')
    let liLogradouro = document.createElement('li')
    let liComplemento = document.createElement('li')
    let liBairro = document.createElement('li')
    let lilocalidade = document.createElement('li')
    let liUf = document.createElement('li')


    liCep.append(res.cep)
    liLogradouro.append(res.logradouro)
    liComplemento.append(res.complemento)
    liBairro.append(res.bairro)
    lilocalidade.append(res.localidade)
    liUf.append(res.uf)

    ul.appendChild(liCep)
    ul.appendChild(liLogradouro)
    ul.appendChild(liComplemento)
    ul.appendChild(liBairro)
    ul.appendChild(lilocalidade)
    ul.appendChild(liUf)
    resultado.appendChild(ul)
    })
}