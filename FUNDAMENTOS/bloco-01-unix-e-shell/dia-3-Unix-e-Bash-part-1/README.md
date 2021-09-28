

    Parte I - Criação de arquivos e diretórios

    Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .

    Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

    mkdir Unix_testes

        cd Unix_testes

    Crie um arquivo de texto com o nome trybe.txt .

        touch trybe.txt

    Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .

        cp trybe.txt trybe_backup.txt

    Renomeie o arquivo trybe.txt .

        mv trybe-copia.txt

    Dentro de unix_tests , crie um novo diretório chamado backup .

        cd Unix_testes
        mkdir backup

    Mova o arquivo trybe_backup.txt para o diretório backup.

        Naveguei até o diretório backup, utilizando o comando cd para acessar o diretório,
        na sequência usei o comando pwd para verificar o caminho completo, utilizei o comando cd ..
        para voltar um diretório e executei o comando:

        mv trybe_backup.txt TRYBE/FUNDAMENTOS/bloco-01-unix-e-shell/dia-3-Unix-e-Bash-part-1/backup

    Dentro de unix_tests, crie um novo diretório chamado backup2 .

        mkdir backup2

    Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

        no diretorio backup utilizei o comando:
        mv trybe_backup.txt TRYBE/FUNDAMENTOS/bloco-01-unix-e-shell/dia-3-Unix-e-Bash-part-1/backup2

    Apague a pasta backup .
        
        rmdir backup

    Renomeie a pasta backup2 para backup .

        mv backup2 backup

    Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

        pwd (para ver o path completo)
        ls (para listar todos os arquivos)

    Apague o diretório backup.

        rm -rf backup

    Limpe o terminal.

        clear

    Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :

        Copiar
        Internet
        Unix
        Bash
        HTML
        CSS
        JavaScript
        React
        SQL

    Mostre na tela as 5 primeiras skills do arquivo skills.txt.
        
        head -5 skills.txt 

    Mostre na tela as 4 últimas skills do arquivo skills.txt .

        tail -4 skills.txt

    Apague todos os arquivos que terminem em .txt .

        rm *.txt



