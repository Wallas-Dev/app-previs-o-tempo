# Documentação do Sistema

O Sistema de Gerenciamento de reservas é uma aplicação desenvolvida para facilitar o gerenciamento das reservas. Ele permite o cadastro, edição e exclusão de reservas. Além disso, oferece a funcionalidade de detalhes e mantendo a responsividade

##Deploy
Link: https://project-foco.vercel.app/dashboard

## Para executar o programa o usuário irá precisar:
Node: https://www.php.net/download](https://nodejs.org/en
Antes de iniciar deve-se rodar o comando "npm install" para instalar as dependências
Para start o projeto é através do Vite com o comando: npm run dev

Um Sistema gerenciador de reservas e pronto.
Após isso, no terminal do vsCode, dentro da pasta do projeto, execute npm install para instalar as dependências
A pagina inicial contém todos todas as reservas ,  podendo edita-las, remove-las ou ver detalhes da reserva 
Como dito anteriormente, a forma de cadastro de reserva é relizado armazenando no localStorage do navegador persistindo todos os dados
Ainda a consulta de CEP com auto-complete com os dados da região, também na tela principal, há o icon de olho, esse icon redireciona a pagina de detalhes, essa pagina contém todas as informações de determinado reserva, com os dados dos responsável, dados da reserva e endereço

O sistema foi totalmente construido com ReactJS, utilizando Sass para estilização, também lib Axios para requisão da api de CEP, e tambem a lib Yup para validação dos dados.
