class CaixaDaLanchonete {

    constructor () {
        this.cardapio = {
            cafe : 3.00,
            chantily : 1.50,
            suco : 6.20,
            sanduiche : 6.50,
            queijo : 2.00,
            combo1 : 9.50,
            combo2 : 7.50
        }
        this.desconto = 0.95   
        this.taxa = 1.03
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }
        

        let valorTotalPedido = 0
        let carrinhoCompras = 0
        
        for(const item of itens){ // calcula precos e visualiza itens
            const produto = item.split(',')[0]
            if (produto.length < 2 || !(produto in this.cardapio)){
                return "Item inválido!"
            }
            const quantidadeProduto = Number(item.slice(item.length-1))
            carrinhoCompras += quantidadeProduto
            valorTotalPedido += this.cardapio[produto] * quantidadeProduto 
            if (quantidadeProduto === 0){
                return `Quantidade inválida!`
            }
        }
        valorTotalPedido = this.testaItensEPagamento(metodoDePagamento, valorTotalPedido, carrinhoCompras)
        return `R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`;
    }

    
    testaItensEPagamento = (metodoDePagamento, valorTotalPedido) =>{
        if (metodoDePagamento === 'dinheiro'){
            return valorTotalPedido * this.desconto
        } else if (metodoDePagamento === 'credito'){
            return valorTotalPedido * this.taxa
        }
        return valorTotalPedido
    }
    
    // console.log(`R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`)

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




// class CaixaDaLanchonete {

//     constructor () {
//         this.cardapio = {
//             cafe : 3.00,
//             chantily : 1.50,
//             suco : 6.20,
//             sanduiche : 6.50,
//             queijo : 2.00,
//             combo1 : 9.50,
//             combo2 : 7.50
//         }
//         this.desconto = 0.95   
//         this.taxa = 1.03
//     }

//     calcularValorDaCompra(metodoDePagamento, itens) {
//         let valorTotalPedido = 0
//         let produto
//         let carrinhoCompras = 0
        
//         for(const item of itens){ // calcula precos e visualiza itens
//             produto = item.split(',')[0]
//             const quantidadeproduto = item.slice(item.length-1)
//             carrinhoCompras += quantidadeproduto
//             produto in this.cardapio ? valorTotalPedido += this.cardapio[produto] * quantidadeproduto : undefined
//             if (quantidadeproduto < 1){
//                 return `Quantidade inválida!`
//             }
//         }
//         valorTotalPedido = this.testaItensEPagamento(metodoDePagamento, valorTotalPedido)
//         return `R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`;
//     }

    
//     testaItensEPagamento = (metodoDePagamento, valorTotalPedido) =>{
//         if (itens.length < 1){
//             return "Não há itens no carrinho de compra!"
//         }
    
//         if (metodoDePagamento === 'dinheiro'){
//             valorTotalPedido = valorTotalPedido * desconto
//         } else if (metodoDePagamento === 'credito'){
//             valorTotalPedido = valorTotalPedido * taxa
//         }

//     }
    
//     // console.log(`R$ ${valorTotalPedido.toFixed(2).replace('.',',')}`)

// }