# Análise do Arquivo `tabelas.html`

Este documento detalha a estrutura e a estilização do arquivo `tabelas.html`. O objetivo do código é criar uma tabela HTML básica e aplicar estilos visuais usando CSS para melhorar sua aparência e interatividade.

## Estrutura do Código HTML

O corpo do documento é composto por uma tabela (`<table>`) que exibe nomes de usuários e suas idades.

### Principais Tags e Atributos Utilizados:

* `<table>`: É o elemento principal que define a tabela.
    * `summary="Tabela de aprendizado"`: Um atributo antigo usado para fornecer uma descrição da tabela para tecnologias assistivas. Hoje, práticas mais modernas de acessibilidade são recomendadas.
    * `width="200"`: Define a largura da tabela em 200 pixels.
    * `cellspacing="0"`: Remove o espaço entre as células da tabela.
    * `align="center"`: Centraliza a tabela horizontalmente na página.
    * `cellpadding="3"`: Adiciona um preenchimento (espaço interno) de 3 pixels em todas as células.
* `<caption>`: Define uma legenda ou título para a tabela, que é exibido visualmente.
* `<thead>`: Agrupa o conteúdo do cabeçalho da tabela. É útil para semântica e para aplicar estilos específicos.
* `<tbody>`: Agrupa o conteúdo do corpo principal da tabela.
* `<tfoot>`: Agrupa o conteúdo do rodapé da tabela.
* `<tr>`: Define uma linha (`table row`) dentro da tabela.
* `<th>`: Define uma célula de cabeçalho (`table header`). O texto dentro dela geralmente é exibido em negrito e centralizado por padrão.
    * `title="Nome Completo"`: Adiciona um texto de ajuda (tooltip) que aparece quando o usuário passa o mouse sobre o elemento.
* `<td>`: Define uma célula de dados (`table data`) padrão na tabela.

## Estilização com CSS

A aparência da tabela é controlada por regras CSS declaradas dentro da tag `<style>` no cabeçalho do documento.

### Seletores e Propriedades CSS:

1.  **Estilo geral da tabela:**
    ```css
    table {
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        border: solid 1px gray;
    }
    ```
    * `box-shadow`: Adiciona um efeito de sombra projetada ao redor da tabela, dando uma sensação de profundidade.
    * `border`: Cria uma borda sólida de 1 pixel na cor cinza ao redor da tabela.

2.  **Estilo do cabeçalho:**
    ```css
    table thead th {
        background-color: black;
        color: white;
    }
    ```
    * Este seletor aplica o estilo a todas as células de cabeçalho (`<th>`) que estão dentro do cabeçalho da tabela (`<thead>`).
    * `background-color`: Define a cor de fundo como preta.
    * `color`: Define a cor do texto como branca.

3.  **Estilo do rodapé:**
    ```css
    table tfoot tr {
        background-color: antiquewhite;
    }
    ```
    * Aplica uma cor de fundo (`antiquewhite`) a toda a linha (`<tr>`) dentro do rodapé da tabela (`<tfoot>`).

4.  **Efeito "zebrado" nas linhas:**
    ```css
    table tbody tr:nth-child(even) {
        background-color: khaki;
    }
    ```
    * O seletor `tr:nth-child(even)` seleciona todas as linhas pares (a 2ª, 4ª, 6ª, etc.) dentro do corpo da tabela (`<tbody>`).
    * `background-color`: Define a cor de fundo como `khaki`, criando um efeito de listras que facilita a leitura dos dados.

5.  **Efeito de hover (mouse-over):**
    ```css
    table tbody tr:hover td {
        background-color: lightpink;
    }
    ```
    * Este seletor é ativado quando o cursor do mouse passa por cima (`:hover`) de qualquer linha (`<tr>`) no corpo da tabela.
    * Ele altera a cor de fundo de todas as células (`<td>`) daquela linha para `lightpink`, fornecendo um feedback visual interativo para o usuário.