class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe : 3.00,
            chantily : 1.50,
            suco : 6.20,
            sanduiche : 6.50,
            queijo : 2.00,
            combo1 : 9.50,
            combo2 : 7.50
        }
    
        const desconto = 0.95
        const taxa = 1.03
        let valorTotalPedido = 0
        let produto
        let carrinhoCompras = 0
        
        if (itens.length < 1){
            return "Não há itens no carrinho de compra!"
        }
    
        for(const item of itens){ // calcula precos e visualiza itens
            produto = item.split(',')[0]
            const quantidadeproduto = item.slice(item.length-1)
            carrinhoCompras += quantidadeproduto
            produto in cardapio ? valorTotalPedido += cardapio[produto] * quantidadeproduto : undefined
            if (quantidadeproduto < 1){
                return `Quantidade inválida!`
            }
        }
        
    
        if (metodoDePagamento === 'dinheiro'){
            valorTotalPedido = valorTotalPedido * desconto
        } else if (metodoDePagamento === 'credito'){
            valorTotalPedido = valorTotalPedido * taxa
        }
    
        // console.log(`R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`)
    
        return `R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`;
    }

}


export { CaixaDaLanchonete };


// function calcularValorDaCompra(metodoDePagamento, itens) {
//     const cardapio = {
//         cafe : 3.00,
//         chantily : 1.50,
//         suco : 6.20,
//         sanduiche : 6.50,
//         queijo : 2.00,
//         combo1 : 9.50,
//         combo2 : 7.50
//     }

//     const desconto = 0.95
//     const taxa = 1.03
//     let valorTotalPedido = 0
//     let produto
//     let carrinhoCompras 
    
//     if (itens.length < 1){
//         return "Não há itens no carrinho de compra!"
//     }

//     for(const item of itens){ // calcula precos e visualiza itens
//         produto = item.split(',')[0]
//         const quantidadeproduto = item.slice(item.length-1)
//         carrinhoCompras += quantidadeproduto
//         produto in cardapio ? valorTotalPedido += cardapio[produto] * quantidadeproduto : undefined
//         if (quantidadeproduto < 1){
//             return `Quantidade inválida!`
//         }
//     }
    

//     if (metodoDePagamento === 'dinheiro'){
//         valorTotalPedido = valorTotalPedido * desconto
//     } else if (metodoDePagamento === 'credito'){
//         valorTotalPedido = valorTotalPedido * taxa
//     }

//     console.log(`R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`)

//     return "";
// }



// const input = ['cafe,1']
// console.log(calcularValorDaCompra('debito',input))