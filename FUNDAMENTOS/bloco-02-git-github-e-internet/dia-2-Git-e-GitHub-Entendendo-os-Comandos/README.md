Navegue até a raiz do projeto com o arquivo .txt;


Verifique se não existe nada sem "commitar" utilizando git status :
        git status; 

    Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.

Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;

    git checkout -b trybe-skills-changes

No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
    cat >> trybe-skills.txt
        HTML
        CSS

Faça um git add nome-do-arquivo.extensao;
    git add trybe-skills.txt

Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;

Agora um git commit -m "Mensagem que você gostaria";
    git commit -m "adiciona duas habilidades em trybe-skills.txt"

<!-- Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill"; -->

<!-- Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu; -->


E por último um git push -u origin trybe-skills-changes;
    git push -u origin trybe-skills-changes

Abra um Pull Request com uma descrição detalhada:
    No repositório vá até Pull Request;
    New Pull Request;
    Mudo para branch trybe-skills-changes;
    Create pull request;

    Descrição: Executando primeiro pull request do curso de Programação Web.

<!-- Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."; -->

<!-- O merge deve ser feito apenas quando chegar no exercício 10. -->

Retorne para a branch principal, master , com o comando: git checkout master;
    git checkout main

Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
    git branch 

Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
    git checkout trybe-skills-updates

No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
    cat >> trybe-skills.txt
        javaScript
        React

<!-- Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉; -->

Faça um git add nome-do-arquivo.extensao;
    git add trybe-skills.txt

Agora um git commit -m "Mensagem que você gostaria" ;
    git commit -m "adiciona JS e React"

e por último um git push -u origin trybe-skills-updates;
    git push -u origin trybe-skills-updates

<!-- Após o primeiro "push" da sua branch, você pode usar apenas o comando git push; -->

Abra um Pull Request com uma descrição amigável:
    No diretório no gitHub eu vou em Pull Request;
    New pull request;
    mudo para a branch trybe-skills-updates;
    create pull request;
    
    Descrição: Pull Request após inserir JS e React em trybe-skills.txt;
        create pull request;

<!-- O merge deve ser feito apenas quando chegar no exercício 10; -->

Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request:

Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;
Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
