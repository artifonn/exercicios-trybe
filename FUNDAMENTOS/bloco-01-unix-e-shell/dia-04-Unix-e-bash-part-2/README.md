Parte II - Manipulação & Busca

Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

    No diretório Unix_teste:
    cd Unix_teste
    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

Mostre todo o conteúdo do arquivo countries.txt na tela.

    cat countries.txt 

Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .

    less countries.txt (pressione barra de espaço para navegar entre páginas ou enter para navegar linha por linha)

Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
    
    less countries.txt (exibir conteúdo de forma paginada)
    /Zambia (para pesquisar)

Busque por Brazil no countries.txt .

    grep Brazil countries.txt 

Busque novamente por brazil , mas agora utilizando o lower case .

    grep -i brazil countries.txt (-i para pesquisar de modo lower case)


Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.


Busque pelas frases que não contenham a palavra fox .

    grep -iv "fox"phrases.txt

Conte o número de palavras do arquivo phrases.txt .

    wc -w phrases.txt

Conte o número de linhas do arquivo phrases.txt .

    wc -l phrases.txt

Crie os arquivos empty.tbt e empty.pdf .

    touch empty.tbt empty.pdf

Liste todos os arquivos do diretório unix_tests .

    dentro do diretório Unix_teste:
    ls (ls -a para exibir também os arquivos ocultos)

Liste todos os arquivos que terminem com txt .

    ls *.txt

Liste todos os arquivos que terminem com tbt ou txt .

    ls *.tbt *.txt
    ou utilizando  wild card(?)
    ls *.t?t
Acesse o manual do comando ls 

    man ls