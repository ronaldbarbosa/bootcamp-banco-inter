function verificaPalindromoSimples(expressao){
    if(!expressao) return;
    return expressao.split("").reverse().join("") === expressao;
}
function verificaPalindromoComposto(expressao){
    if(!expressao) return;
    let novaExpressao = expressao.replace(/\s+/g, '');
    return novaExpressao === novaExpressao.split("").reverse().join("");
}
console.log("ana: " + verificaPalindromoSimples("ana"));
console.log("fogo: " + verificaPalindromoSimples("fogo"));
console.log("a base do teto desaba: " + verificaPalindromoComposto("a base do teto desaba"));
console.log("testado em produção: " + verificaPalindromoComposto("testado em produção"));