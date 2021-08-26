

function carregar(){
    let total = localStorage.length

    for(i=1;i<=total;i++){
        
        // let item = JSON.parse(localStorage.getItem(i))
        let {empresa,funcionario,data,salario,pts,porcentagem} = JSON.parse(localStorage.getItem(i))

        /*==============   erro quando apaga um cadastro que esteja no meio,
        ele quebra a lógica dos números pares e ímpares (acredito que seja porisso
        que esteja dando erro). De qualquer forma, tentar resolver isso e fazer um
        pop up para editar, mas isso é na outra página.'

        */
        let cor = i%2==0?'#A5DCE5':'#54B6E4'

        document.getElementById('tabela').innerHTML += 
        `
        <tr>
            <td style="background:${cor}">${empresa}</td>
            <td style="background:${cor}">${funcionario}</td>
            <td style="background:${cor}">${data}</td>
            <td style="background:${cor}">R$ ${salario}</td>
            <td style="background:${cor}">${pts}</td>
            <td style="background:${cor}">${porcentagem}</td>
            <td class="td_modify" onClick="modify(${i})">E</td>
            <td class="td_save" onClick="save(${i})">S</td>
            <td class="td_btn" onClick='delThis(${i})'>${i}</td>
        </tr>
        `
    }
    
}

// //criação de tabela dinâmica de forma melhor
// function carregar(){
//     const items = Object.values(localStorage)
//     let {empresa,funcionario,data,salario,pts,porcentagem} = JSON.parse(items)

//     table = document.getElementById('tabela')

//     linha = table.insertRow()
//     linha.insertCell().innerHTML = empresa
//     linha.insertCell().innerHTML = funcionario
//     linha.insertCell().innerHTML = data
//     linha.insertCell().innerHTML = salario
//     linha.insertCell().innerHTML = pts
//     linha.insertCell().innerHTML = porcentagem
// }
