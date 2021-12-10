# Exemplo de como criar bundles de arquivos js de sites estáticos

Foi usado o **webpack** com os plugins **webpack-glob** e **webpack-merge-and-include-globally** para gerar o bundle dos arquivos javascript.

# Executando

Execute o comando ```npm run build``` na pasta do projeto para gerar os arquivos na pasta **src/dist**.

# Como funciona?

Veja o arquivo **webpack.config.json** para saber.

# Pegadinhas

## Funçãoes desaparecem
O webpack não irá adicionar ao bundle qualquer função que *"não esteja sendo utilizada"*.
Por exemplo:

```javascript
// utils.js
function isEven(nValue) {
    return nValue % 2 === 0;
}

window.isOdd = function() {
    return nValue % 2 !== 0;
}
```
No exemplo acima a função **isOdd** irá fazer parte do bundle (Porque está vinculada a janela) já a função **isEven** não irá fazer parte do bundle.

## Arquivos já minificados dão problemas
Tentei adicionar um arquivo minificado (*jquery-3.6.0.min.js*) ao bundle mas não deu certo. Tive que usar a versão não minificada.

## Nem tudo funciona como está
Ao adicionar o arquivo jquery-3.6.0.js o jquery não ficou acessivel do contexto global (window). Para resolver o problema tive que mudar o código fonte do jquery da seguinte forma:

```javascript
// jquery-3.6.0.js
( function( global, factory ) {

	"use strict";
	module = undefined; // this line has been added

	if ( typeof module === "object" && typeof module.exports === "object" ) {

	// rest of the code...
```

Isso acontece porque o webpack cria uma função de fechamento com um parâmetro **module**. Portanto o codigo jQuery não exporta o jQuery para o contexto global.
