const {chromium} = require('playwright');

exports.extrairDados = async (url) =>{
    const navegador = chromium.launch();
    const page = await navegador.newPage();

    await page.goto(url);

    const produtos = await page.getByRole('table').allTextContents();
    console.log(produtos);
    
}   