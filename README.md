# Next Level Week - Booster

- Projeto da Next Level Week - Rocketseat

## Comites "padronizados" conforme convenção de comites

```
feat: Nova rota adicionada
^--^  ^------------^
|     |
|     +-> Resumo do commit.
|
+-------> Tipos: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (Nova funcionalidade)
- `fix`: (Resoluç]ao de um bug)
- `docs`: (Alteração na documentação)
- `style`: (Estilização dos componentes/páginas)
- `refactor`: (Refatoração de código)
- `test`: (Testes criados para os códigos)
- `chore`: (Atualização de tarefas e bibliotecas)

Mais Referências:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

# Como começar

- Faça um clone do repositório
- Acesse cada pasta individual - cd backend | cd frontend
- Execute: npm install OU yarn - uma vez em cada pasta
- Execute: npm dev OU yarn dev - uma vez para cada aplicação

# Rotas(Metodo - url - o que faz)

- GET - /items - Listagem de itens coletáveis

- GET - /points - query params (uf, city, items) - filtra os pontos de coleta por estado cidade e items_id
- GET - /points/:id - busca um ponto de coleta e os items desse ponto
- POST - /points - Cria um ponto de coleta

# Tecnologias utilizadas - backend

- Typescript - Tipagem de dados javascript
- Express - Criação do servidos
- CORS - Permite acesso de diferentes dominios ao backend
- Knex - Como "orm" para banco de dados
- SQLite - Como banco de dados

# Tecnologias utilizadas - frontend

- React - Biblioteca para contrução de componentes jsx
- Axios - Requests ajax facilitadas
- Leaflet - Colocar Mapa na página
- React-dropzone - Utilizado para criar "area de upload de fotos"
- React-icons - Utilizado para colocar ícones na página
- React-leaflet - Conexão do mapa com React
- React-router-dom - Roteamento de páginas
- Typescript - Tipagem de dados javascript

# Tecnologias utilizadas - mobile

- axios - Requests ajax facilitadas
- expo - Biblioteca Expo para facilitar desenvolvimento mobile
- expo-constants - Trabalhar com constantes dentro do Expo
- expo-font - Alterar de forma mais fácil as fontes padronizadas do aplicativo
- expo-location - Utilizar a localização do dispositivo
- expo-mail-composer - Acesso ao aplicativo de email padrão do dispositivo
- react-native - Biblioteca para desenvolvimento mobile
- react-native-gesture-handler - Gestos para acesso de páginas/rotas diferentes do aplicativo
- react-native-maps - Utilização de mapas no aplicativo
- react-native-svg - Utilização de SVG nas páginas
