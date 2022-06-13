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

- **É possível criar um site responsivo SEM media queries? Por que?**

        Sim, porém tornaria o projeto mais demorado e custoso, visto que teria que vigiar a alteração de tela com Javascript. Sendo o metodo mais facil de fazer um site resposivo é o uso de media querys.

- **No Javascript, é obrigatório usar VAR para criar uma variável?**

        Não, ao criar uma variável sem utilizar a palavra reservada var, o javascript cria por debaixo do panos uma variavel global que pode ser usada em qualquer parte do código.

- **Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?**

        Sim. em alguns casos

        Constructor
        Arrows functions ( "() => {}" ) não podem ser constructors, o que indica que não poderá utilizar o operador new

        Arguments
        Arrows functions não possui objeto array-like arguments

        Nome da funçao
        Arrows functions não podem ser nomeadas explicitamente, elas herdam o nome da variavel onde foram criadas

        Retorno
        Arrows functions permitem escrever um modelo encurtado onde a última expressão analisada sera o retorno, quando se omite o uso de { }

        Contexto
        Arrows functions possuem o This léxico, o que significa que herdam o contexto onde foi declarado

- **Explique a lógica pra fazer uma paginação.**

        Consiste basicamente em saber quantos itens irá aparecer por pagina e em qual pagina está para exibir os itens subsequentes.
        Assim devemos ter duas variáveis para auxiliar nessa questão, ex.:
            var page = int; -> a pagina na qual estará sendo exibida. 
            var items = int; -> a quantidade de itens que irá ser exibida            
        ao usar essas variáveis fica mais fácil especificar e deixar dinâmico a busca.
        Sendo assim umas das formas para paginar seria (
            page * items -> quantidade de itens que irá pular para começar a exibir a consulta
            items -> quantidade de itens a exibir
        ) 
        

- **Qual a melhor forma de armazenar uma imagem no banco de dados?**

        A melhor forma é salvando um 'ponteiro' no banco de dados indicando o caminho para localização da imagem salva no disco

- **No React, quantos useEffect eu posso usar?**

        Pode se usar a quantidade que for necessaria para sua aplicação

- **Quais métodos de requisição preciso para criar um CRUD via API?**

        Post - Para enviar      (Create) informações
        Get - Para ler          (Read) informações
        Put - Para atualizar    (Update) informações
        Delete - Para excluir   (Delete) infomações