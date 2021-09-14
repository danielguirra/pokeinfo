
const pokeInfo = (pokename) => {
    const rq = require("request")
    const url = `https://www.pokemon.com/br/pokedex/${pokename}`
    console.log(url)
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    rq(url, function (error, response, html) {
        const dom = new JSDOM(html);
        let pokeinfo = dom.window.document.querySelector("p").textContent;
        console.log(pokeinfo)
        return pokeinfo
    })
}

module.exports = { pokeInfo }