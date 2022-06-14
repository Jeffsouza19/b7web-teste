# API Bloco de Notas

-   Api construida em laravel 9, para fornecer dados para uma simples aplicaçao de bloco de notas, no modelo post it
#
## Iniciando o Projeto

    Para iniciar o projeto, clone o repositorio para sua maquina, após feito rode o comando composer install para instalar as dependencias necessarias.
    Renomeie o arquivo .env.example para .env e configure o seu banco de dados para iniciar a aplicação

    Após realizar as configurações rodar o comando php artisan migrate para a criaçao do banco de dados
    Com tudo confgurado basta rodar o comando php artisan serve para iniciar o servidor, 
    Pronto, Api em funcionamento.

## Sobre as Rotas

-   São 4 rotas basicas que possuem na Api, sendo GET, POST, PUT, DELETE. 
    para acessar as rotas deve se usar a URL base que foi indicada ao iniciar o servidor seguido de /api/(rota)

### Rota GET
    notes
    Rota que lista as notas cadastradas no banco de dados, ela nao recebe nenhum paramêtro. 
    Traz como resposta dados da nota como Titulo(title), Anotação(Body), Cor da nota(bgcolor), Cor da letra(fontecolor)

### Rota POST
    note
    Rota para a adição de uma nova nota, ele precisa de alguns parametros para fazer a inserção.
    Parametros
    Title(titulo da anotação) -> parametro obrigatorio
    Body(texto da anotação) -> parametro opcional
    Bgcolor(Cor da anotação) -> parametro opcional, quando não é informado tem valor padrao Gray(cinza)
    Fontcolor(Cor da letra) -> parametro opcional, quando não e informado tem o valor padrao Black(preto)

### Rota PUT
    note/{id}
    Rota para a edição de uma nota, ela recebe basicamente os mesmos paramentros da rota POST. Pela diferença que aqui necessita de mais um parametro, o id, para indentificar qual nota esta sendo editada.

### Rota DELETE
    note/{id}
    Rota para exclusão de uma nota, o unico parametro recebido é o id, para a identificação de qual nota será excluida
