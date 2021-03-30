## React e suas dependencias.

<strong>React-dom</strong> É a forma que nós temos para trabalhar com react na web. É uma dependencia que permite o react se comunicar com a arvore de elementos do html. 

Para instalar basta usar o comando: ```yarn add react-dom```

<strong> Por que o React e o React-dom são instalados separadamente?</strong>

Porque o React pode ser utilizado tambem para mobile usando outras bibliotecas como o react-native.

<strong>React é muito genérico, por quê?</strong> 

Pois com essa poderosa ferramenta, é possivel a criação de qualquer tipo de interface seja ela mobile, web, tv, realidade virtual entre outras.

## Babel

<strong>Babel</strong> Babel basicamente converte o nosso código de uma maneira que todos os browsers e todo o ambiente de nossa aplicação consiga entender os nossos códigos.

Para instalar é simples ```yarn add @babel/biblioteca -D``` 
> Por que -D? Indicaremos que é uma dependencia de desenvolvimento, portanto não serão necessárias quando em produção.

<li>@babel/core - bibioteca do babel.</li>
<li>@babel/cli - conseguir habilidar babel atraves da linha de comando.</li>
<li>@babel/preset-env - extensão do babel que identifica o ambiente que sua aplicação está sendo executada para converter o código da melhor maneira possível.</li>
<li>babel-loader - Integração entre babel e webpack.</li>

<br>

>Para configurar o babel é necessario criar um arquivo, ```babel.config.js```.

<br>

<strong> E como converter um código usando babel?</strong> 

através da cli (interface linha comando) podemos executar.
```yarn babel ENDEREÇO-ARQUIVO-A-CONVERTER --out-file NOME-ARQUIVO-GERADO ```

Exemplo:
```yarn babel src/index.js --out-file dist/bundle.js```

<br>

<strong>Mas nós temos um problema!!</strong> 

Quando tentar usar o babel para converter um código react, e nesse código tiver elementos HTML, vai dar erro.
Para eliminar esse erro nós precisamos instalar o ```@babel/preset-react``` utilizando o código ```yarn add @babel/preset-react``` para que se
torne possível a interpretação do babel nesses arquivos react. OBS: Não esqueça de importar a nova extensão no arquivo ```babel.config.js```.

<br>
> Arquivos .JSX são arquivos que carregam a nomeclatura correta quando utilizamos html em arquivos javascript.
<br>

## WebPack

<strong>Webpack</strong> é responsavel por converter arquivos e torna-los entendiveis para o browser. Por exemplo:
<br>
- Arquivos .sass e serão convertidos para css.
- Arquivos png e jpg importados pelo JavaScript convertidos em arquivos elegiveis para o browser e etc.

<br>

Para instalar é simples: ```yarn add webpack -D```

<li>webpack-cli - interface linha código.</li> 
<li>webpack-dev-server - server com refresh automatico.</li> 
<li>babel-loader - Integração entre babel e webpack.</li> 
<li>html-webpack-plugin - Plugin que injeta script no html.</li> 

<br>

> Para configurar o babel é necessario criar um arquivo, ```webpack.config.js```.

<br>

Formas para agilizar o processo quando em desenvolvimento ou em produção:

><li>Ambiente de desenvolvimento (dev) !== Ambiente de produção (build)</li>
><li><b>source maps</b> - Funcionalidade que ajuda a identificar erros no console. </li>
><li><b>cross-env</b> - Defini variaveis ambiente independente de SO. </li>

<br>

```bash
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment? 'eval-source-map' : 'source-map',
```
<br>

## E os styles??

Para importar css, precisamos primeiro apontar para o webpack as regras. Para isso é necessário instalar dois loaders que funcionam em conjunto:

``` yarn add style-loader css-loader -D ```
``` yarn add node-sass sass-loader -D ``` 

<strong>SASS:</strong> Pre-processador de css.

Obs: Não esqueça de configurar as rules dentro do webpack.config.js...

```bash
{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ['style-loader','css-loader','sass-loader']
},
```
<br>

## Conceito sobre Componente.

<b>O que é?</b>

<li>São formas de encapsular uma determinada quantidade de código dentro de um único elemento. Elemento este que possui sua propria funcionalidade, estrutura, estilização.</li>
<li>Components é uma forma de organizar uma aplicação, dividir ela em diversos pedaços.</li>

<b>Exemplo:</b>

```bash 
export function Componente() {
    return <h1>Hello World<h1>
}

```

<b>Exemplo 2:</b>

```bash 
export function Componente() {
    return (
        <h1>Hello World</h1>
        <h2>Olá Mundo</h2>
    );
}

```

Por convenção, um component é um function que sempre leva a primeira letra maiuscula e nunca mais de um component por arquivo.

<br>

## Conceito sobre Propriedades.

<b>O que é?</b>

As propriedades no react são semelhantes aos atributos nas tags HTML, ou seja, são informações variáveis para que um componente possa funcionar de forma diferente.

<b>Usar por quê?</b>

Enviar uma informação de components para outros. 

<b>Como utilizar?</b> 

Dado dois componentes: <b>ComponenteUm</b> e <b>ComponenteDois</b>. Observe:

<br>
<b> ComponenteUm: </b>

```bash

export function ComponenteUm () {
    return (
        <ul> 
            <ComponenteDois /> 
        </ul>
    );
};

```
<br>
<b> ComponenteDois: </b>

```bash

export function ComponenteDois() {
    return (
        <li>
            <a>Link</a>
        </li>
    );
}

```

<br>

Sua tarefa seria acessar informações do <b>ComponenteUm</b> no <b>ComponenteDois</b>.

Então primeiro nós devemos fazer o import no <b>ComponenteUm</b>.
E passar como props as informações para o <b>ComponenteDois</b>.

<br>
<b> ComponenteUm: </b>

```bash

import { ComponenteDois } from "./ComponenteDois";

export function ComponenteUm () {
    return (
        <ul> 
            <ComponenteDois link="https://www.github.com/caiolemec"/> 
        </ul>
    );
};

```

Agora no ComponenteDois é possivel acessar tais informações através do argumentos (props) da função.

<br>
<b> ComponenteDois: </b>

```bash

export function ComponenteDois(props) {
    return (
        <li>
            <a href={props.link}>Link</a>
        </li>
    );
}

```

Agora, vamos supor que em uma única propriedade tenha mais informações e você quer acessar todas essas informações no seu <b>ComponenteDois</b>.

<br>
<b> ComponenteUm: </b>

```bash
import { ComponenteDois } from "./ComponenteDois";

const link = {
    nome: 'Exemplo1',
    url: 'https://www.github.com.br/caiolemec',
    info: 'informação sobre o link'
}

export function ComponenteUm () {
    return (
        <ul> 
            <ComponenteDois link={link}/>   Passando o objeto LINK.
        </ul>
    );
};

```
Agora o próximo passo é acessar esse objeto no <b>ComponenteDois</b>:

<br>
<b> ComponenteDois: </b>

```bash

export function ComponenteDois(props) {
    return (
        <li>
        <h1>{props.link.nome}<h1>
        <h3>{props.link.info}<h3>
        <a href={props.link.url}>Link</a>
        </li>
    );
}

```

OBS: Eu poderia ainda, botar uma verificação para caso esse retorno seja vazio, por exemplo:

```<h1>{props.link.nome ?? 'Sem nome'}<h1>```

<br>

## Conceito Sobre Estado 
<br>

></h1>useState (hook)</h2>

<b>O que é?</b>

O estado no react é uma forma de alterar um valor de uma variavel e ela refletir em sua interface. 

<b>Usar por quê?</b>

Ao tentar mudar uma variavel da maneira tradicional, ou seja, mudar o valor de uma variavel sem usar um hook, não vamos conseguir 
justamente pelo fato de não ser nada performatico o react ficar "olhando" para todas as variaveis e verificando se seus valores mudaram.

<b>Como utilizar?</b> 

Para que possamos mudar um valor de uma variável é necessário usar um hook chamado `useState`.

Vamos supor ser necessário a realização de um contador. Para isso nós teriamos que criar uma function para ser acionada quando o usuário clicasse em um determinado button, então:

Primeiro devemos importar esse hook usando:

```import { useState } from 'react';```

Agora nós precisamos criar a função que quando acionada, adicionará um valor a uma const denominada Contador usando o `useState(0)` Ou seja, valor inicial será 0.

```bash
export function Contador () {
    ```const contador = useState(0);
```
<br>
Por padrão useState vai em retornar um array com 2 functions.
Para alterar o valor de uma variável eu vou precisar usar esses dois retornos desfragmentando o array:

<br>

> OBS: Sempre iniciar o estado com uma variavel do mesmo tipo do que aquela que você deseja armazenar. 
> Ex: Array: useState([]);

```const [contador, setContador] =useState(0);```
    
Por convenção o nome do segundo elemento sempre será set+NomeDoPrimeiroElemento.
Contador será o estado atual do contador (no caso 0) e o setContador o valor a ser adicionado.
Então vamos criar uma função para adicionar valor ao contador.


```bash
export function Contador () {
    const [contador, setContador] = useState(0);
function adicionarValorAoContador () {
    setContador(contador+1);}
```

> <b>Imutabilidade</b>: <br>
>Uma variável, sempre receberá um novo valor. Quando dizemos que uma variável é imutavel, quer dizer que não podemos alterar diretamente o valor da mesma, mas sim nós precisaremos dar um novo valor para ela. Como podemos ver o que ocorre no setContador quando usamos o useState.
>OBS: No react sempre que for consumir uma API, usaremos um hook para mudar esse valor da variável após a api retornar os valores requisitados.

></h1>useEffect (hook)</h2>

<b>O que é?</b> 

```useEffect``` serve basicamente para disparar uma function quando alguma coisa acontecer em sua aplicação.

> Exemplo: Uma variável mudou, dispare tal function.

```useEffect``` recebe dois parâmetros: (Qual parâmetro quer executar?, Quando você quer executar?) 

<br>

> <h2 style="color: green"><b>useEffect( ()   =>   {}  ,  []  );</b><h2>

<br>

<p style="color: orange">WARNING 1:</p>

>Nunca utilize o useEffect sem um segundo parâmetro, pois caso contrário, o mesmo entrará em looping.


<p style="color: orange">WARNING 2:</p> 

>Quando o segundo parâmetro é um array vazio, a função do primeiro parâmetro só será executada uma única vez.

- Exemplo de uso:

```bash
    export function ImprimirNaTelaRepos {
        useEffect(()=> {
        fetch('https://api.github.com/users/CaioLemec/repos')
        .then(response => response.json())
        .then(dados => console.log(dados)) 
        }, [])
    }    
```
> <b>O que está acontecendo no exemplo?</b> 
Quando a function é executada, ele vai buscar através do fetch os repositórios do usuário, quando obtiver essa reposta vai converter para json, quando a resposta para json for convertida, vai imprimir através do console.log o valor de dados uma única vez, pois 
o segundo parâmetro é um array vazio.







 






