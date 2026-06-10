const {chromium} = require('playwright');

exports.extrairDados = async (url) =>{
    const navegador = await chromium.launch();
    const page = await navegador.newPage();

    await page.goto(url);

    const locator = await page.locator('tr').filter({has: page.getByRole('cell')}).allInnerTexts();
    const nome = await page.getByRole('heading').filter({has: page.locator('b')}).innerText();

    const notaFiscal = {
        local: nome,
        cnpj : locator[0].slice(6,15),
        endereco : locator[1],
        produtos: []
    };

    for(let i=2; i < locator.length; i++){
        let produto = locator[i].split('\t');
        let produtoFinal = {
            nome: produto[0].slice(0,-18),
            qtd: parseFloat(produto[1].slice(21,).replace(',', '.')),
            un: produto[2].slice(4,),
            valorTotal: parseFloat(produto[3].slice(19,).replace(',', '.'))
        }

        notaFiscal.produtos.push(produtoFinal);
    }
    console.log(notaFiscal);
    await navegador.close();
    return notaFiscal;
}   