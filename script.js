class Cadastro{
    constructor(empresa,funcionario,data,salario,pts,porcentagem){
        this.empresa = empresa,
        this.funcionario = funcionario,
        this.data = data,
        this.salario = salario,
        this.pts = pts,
        this.porcentagem = porcentagem
    }
}

function cadastrar(){   

   let cad = valor => document.getElementById(valor)
   let [id,empresa,funcionario,data,salario,pts,porcentagem] = [
    localStorage.length,
    cad('empresa').value,
    cad('funcionario').value,
    cad('dtAdmissao').value,
    cad('salario').value,
    cad('pts').value,
    cad('porcentagem').value
   ]

   id ==0 ? id=1 : id++

   if(empresa=='' || funcionario == '' || data == '' || salario == ''){
        alert('Algum campo está vazio!!!')
   } else {

    let cadastro = new Cadastro(empresa,funcionario,data,salario,pts,porcentagem)

    localStorage.setItem(id,JSON.stringify(cadastro))
 
    location.reload()

   }
}

function deletar(){
    let total = localStorage.length
    alert('Todos os dados serão apagados!')
    for(i=1;i<=total;i++){
        localStorage.removeItem(i)
    }
    location.reload()
}

function delThis(item){
    localStorage.removeItem(item)

    /*
        acho que o erro está aqui, ver se consigo de alguma maneira
        substituir todas todas as chaves a baixo do item deletado
        pra que continuem funcionando
    */
    location.reload()
}

function modify(item){
    console.log(`Selecionei o item ${item}`)
    let key = JSON.parse(localStorage.getItem(item))
    document.getElementById('empresa').value = key.empresa
    document.getElementById('funcionario').value = key.funcionario
    document.getElementById('dtAdmissao').value = key.data
    document.getElementById('salario').value = key.salario
    document.getElementById('pts').value = key.pts
    document.getElementById('porcentagem').value = key.porcentagem
}

function save(item){
    let cad = valor => document.getElementById(valor)
    let [id,empresa,funcionario,data,salario,pts,porcentagem] = [
     localStorage.length,
     cad('empresa').value,
     cad('funcionario').value,
     cad('dtAdmissao').value,
     cad('salario').value,
     cad('pts').value,
     cad('porcentagem').value
    ]

    let cadastro = new Cadastro(empresa,funcionario,data,salario,pts,porcentagem)

    localStorage.setItem(item,JSON.stringify(cadastro))
 
    location.reload()
}


// ---------------------- cadastro em massa teste

function cadTeste(empresa,funcionario,data,salario,pts,porcentagem){
    let id = localStorage.length
    id ==0? id=1 : id++
    localStorage.setItem(id,JSON.stringify({
        empresa:empresa,
        funcionario:funcionario,
        data:data,
        salario:salario,
        pts:pts,
        porcentagem:porcentagem
    }))
}

function criarTeste(){

cadTeste('Empresa 1','Fulano','01/01/2021','8000','5%','10%')
cadTeste('Empresa 2','Beltrano','01/01/2021','5000','10%','15%')
cadTeste('Empresa 3','Ciclano','01/01/2021','50.000','10%','15%')
location.reload()

}

function cor(){
    let cor1 = document.getElementById('cor1').value
    let cor2 = document.getElementById('cor1').value  
    
}



