const {chromium} = require('playwright');

exports.extrairDados = async (url) =>{
    const navegador = chromium.launch();
    const page = await navegador.newPage();

    await page.goto(url);

    await page.waitForSelector('.classe') // Iserir a classe do site nfe aqui

    // codigo para extracao dos dados


}   