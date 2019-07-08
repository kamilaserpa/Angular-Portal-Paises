# Portal países

Aplicação web em Angular 7 para consumir api de países.

## Docs

1. Tela de login, solicitando login e senha
    1.1. Autenticação feita contra o backend
    1.2. Deve salvar o token no storage local da aplicação no navegador, assim como a
informação de se o usuário é administrador ou não (vem nas informações de
resposta da autorização)
2. Tela principal com menu superior simples, com uma opção "Países". Na parte
superior da tela o nome do usuário deve ser apresentado (vem nas informações de
resposta da autorização)
3. Tela para consulta/edição de países
    3.1. Só permite editar/excluir/incluir se for administrador
    3.2. Deve exibir lista dos países em tabela paginada, com paginação no cliente e
ordenação também no cliente
    3.3. Deve permitir editar/incluir/excluir países
    3.4. Deve ser desenvolvido um componente personalizado do Angular para editar a
sigla do país. Este componente deve permitir apenas 2 caracteres e converter
sempre para maiúsculas o valor
4. Como o token expira, deve ser renovado antes de cada requisição ou capturar os
retornos 401 do backend e reautorizar o token automaticamente, tornando o
processo transparente ao usuário

## Developer

Kamila Serpa - [Linked In](https://www.linkedin.com/in/kamila-serpa/)

