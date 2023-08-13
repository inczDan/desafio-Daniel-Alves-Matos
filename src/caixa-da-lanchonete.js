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
        this.itensExtras = [
            {item: 'chantily', principal: 'cafe'},
            {item: 'queijo', principal: 'sanduiche'}
        ]
        this.formasPagamento = ['dinheiro', 'credito', 'debito'] 
        this.desconto = 0.95   
        this.taxa = 1.03
    }

    validarItens = (itens) => {
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }
    }
    

    validarProdutos = (produto) => {
        if (produto.length < 2 || !(produto in this.cardapio)){
            return "Item inválido!"
        }
    }

    validarItensExtras = (item) => {
        return this.itensExtras.some(itemAtual => itemAtual.item === item)
    }

    validarPrincipalPresente(item){
        const itemExtra = this.itensExtras.find(itemAtual => itemAtual.item === item)
        if(itemExtra){
            return itens.includes(itemExtra.principal)
        }
        return false
    }

    validarQntProduto = (quantidadeProduto) => {
        if (quantidadeProduto === 0){
            return `Quantidade inválida!`
        }
    }
    

    validarPagamento = (metodoDePagamento) => {
        if (!this.formasPagamento.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!"
        }
    }


    calcularValorDaCompra(metodoDePagamento, itens) {
       const validadorItens = this.validarItens(itens)
        if(validadorItens){
            return validadorItens
        }
        const validadorPagamento = this.validarPagamento(metodoDePagamento)
        if(validadorPagamento){
            return validadorPagamento
        }

        let valorTotalPedido = 0
        let carrinhoCompras = 0
        
        for(const item of itens){
            const produto = item.split(',')[0]

            if(this.validarItensExtras(item)){
                if(!this.validarPrincipalPresente(produto)){
                    return 'Item extra não pode ser pedido sem o principal'
                }
            }

            const validadorProduto = this.validarProdutos(produto)
            if(validadorProduto){
                return validadorProduto
            }

            const quantidadeProduto = Number(item.slice(item.length-1))
            carrinhoCompras += quantidadeProduto
            valorTotalPedido += this.cardapio[produto] * quantidadeProduto 
            const validadorQntProduto = this.validarQntProduto(quantidadeProduto)
            if(validadorQntProduto){
                return validadorQntProduto
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
}


export { CaixaDaLanchonete };