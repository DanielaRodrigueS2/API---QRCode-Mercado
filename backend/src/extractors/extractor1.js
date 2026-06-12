const {chromium} = require('playwright');

exports.extrairDados = async (url) =>{
    const navegador = await chromium.launch();
    console.log('1')
    const page = await navegador.newPage();
    console.log('2')

    try{
        await page.goto(url,{
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });
    }
    catch(erro){
        await navegador.close();
        console.log('erro no goto', erro);
    }
    

    console.log('2.1')
    console.log(await page.title());
    console.log('2.2')
    console.log(page.url());
    console.log('2.3');

    const locator = await page.locator('tr').filter({has: page.getByRole('cell')}).allInnerTexts();
    console.log('3')

    const informacoes = await page.locator('#collapse4').locator('td').allInnerTexts();

    console.log('4')

    const notaFiscal = {
        linkAcesso: url,
        local: informacoes[0],
        dataEmissao: informacoes[10],
        cnpj : locator[0].slice(6,15),
        endereco : locator[1],
        valorTotal: parseFloat(informacoes[11].replace(',', '.').replace('R$ ', '')),
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