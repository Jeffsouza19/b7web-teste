# b7web-teste

## Questões Teóricas

- **Quais as partes principais de uma requisição HTTP?**

        As principais partes são: Headers, Body, Request Line
        
        Headers
        O cabeçalho da requição. Neles enviamos alguns paramêtros necessarios na aplicação, como exemplo o 'Content-Type'

        Body
        O corpo da requisição. Nele enviamos todos os dados necessarios para proceder com a requisição, como exemplo em um formulario simples podemos enviar 'nome', 'idade', há requisições que não precisão de um body, geralmente elas retornam uma lista de informações

        Request Line
        A linha de requisiçao ou endereço web, ele informa onde estamos indo buscar ou mandar dados de uma requisição

- **Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?**

        A diferença é ao carregar a pagina, ao carregar um script no head pode acontecer de algum script rode antes de a pagina estar carregada, o que pode ocasionar bugs no sistema, assim colocando o script no fim do body, o scripts serão executados somente depois que a pagina estiver 100% carregada

- **Qual a diferença entre display: block e display: inline-block ?**

        Um elemento definido como inline-block é muito semelhante ao inline no sentido de que será definido de acordo com o fluxo natural do texto, ou seja; ao contrário de display: block, display: inline-block não adiciona uma quebra de linha após o elemento. Portanto, o elemento pode ficar próximo a outros elementos e também poderá ter sua altura modificada
