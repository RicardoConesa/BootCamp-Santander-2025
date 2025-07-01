
# Introdução ao HTML na Prática

## O que é um site?

Um site é, em sua essência, um conjunto de páginas interligadas, acessíveis através de um navegador de internet. Cada uma dessas páginas é construída usando linguagens como **HTML**, **CSS** e **JavaScript**.

---

## Ferramentas Essenciais

### Visual Studio Code

O **Visual Studio Code (VS Code)** é um editor de código-fonte gratuito, leve e extremamente poderoso. Ele oferece diversas funcionalidades que otimizam o fluxo de trabalho do desenvolvedor.

- **Download e Instalação:** Baixe e instale o VS Code diretamente do [site oficial](https://code.visualstudio.com/).
- **Extensão Live Server:** Cria um servidor local que recarrega automaticamente sua página no navegador a cada alteração no código.

**Para instalar a extensão:**

1. Abra o VS Code  
2. Vá em Extensões (`Ctrl + Shift + X`)  
3. Procure por **Live Server**  
4. Clique em **Instalar**

---

## Criando seu Primeiro Arquivo HTML

1. Crie um novo arquivo e salve com a extensão `.html`, por exemplo: `index.html`
2. Digite `html:5` e pressione `Tab` ou `Enter`

Isso criará o seguinte template básico:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento HTML</title>
</head>
<body>

</body>
</html>
```

---

## Navegador e Inspetor de Elementos

Um navegador web como Chrome, Firefox ou Edge é onde você visualiza seu site em funcionamento.

### O que é o Inspetor de Elementos?

Ferramenta dos navegadores que permite:

- **Analisar/modificar** HTML e CSS em tempo real  
- **Executar JavaScript**  
- **Monitorar performance**  
- **Emular dispositivos móveis**

**Como acessar:**  
Pressione `F12` ou clique com o botão direito na página e escolha **"Inspecionar"**

**Principais funcionalidades:**

- **DOM Viewer:** visualização da estrutura HTML  
- **Live Editing:** edite HTML e CSS diretamente  
- **Console:** execução de scripts e exibição de erros  
- **Network:** análise de carregamento de arquivos  
- **Device Emulation:** simulação de tela de celular  
- **Breakpoints:** depuração de código JavaScript

---

## Estrutura Básica do HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é o meu primeiro parágrafo HTML.</p>
</body>
</html>
```

---

## Principais Tags HTML e Suas Funções

### Tags de Estrutura

| Tag               | Função                                          |
|-------------------|-------------------------------------------------|
| `<!DOCTYPE html>` | Define o tipo de documento como HTML5           |
| `<html>`          | Elemento raiz do HTML                           |
| `<head>`          | Contém metadados, scripts e links               |
| `<body>`          | Conteúdo visível da página                      |
| `<title>`         | Define o título da aba do navegador             |

---

### Tags de Texto

- `<h1>` a `<h6>`: Cabeçalhos de diferentes níveis
- `<p>`: Parágrafo
- `<br>`: Quebra de linha
- `<hr>`: Linha horizontal
- `<strong>`: Texto em negrito
- `<em>`: Texto em itálico
- `<blockquote>`: Citação em bloco
- `<q>`: Citação curta inline
- `<abbr>`: Abreviação
- `<code>`: Código de programação

---

### Tags de Lista

- `<ul>`: Lista não ordenada (com marcadores)
- `<ol>`: Lista ordenada (numerada)
- `<li>`: Item de lista
- `<dl>`: Lista de definições
- `<dt>`: Termo
- `<dd>`: Descrição

---

### Tags de Link e Mídia

- `<a>`: Link (hiperlink)
- `<img>`: Imagem
- `<audio>`: Áudio
- `<video>`: Vídeo
- `<source>`: Fonte de mídia
- `<iframe>`: Quadro embutido (ex: vídeos do YouTube)

---

### Tags de Tabela

- `<table>`: Tabela
- `<tr>`: Linha
- `<th>`: Cabeçalho
- `<td>`: Célula de dados
- `<caption>`: Legenda
- `<thead>` / `<tbody>` / `<tfoot>`: Agrupamento de conteúdo

---

### Tags de Formulário

- `<form>`: Formulário
- `<input>`: Campo de entrada
- `<textarea>`: Área de texto
- `<button>`: Botão
- `<select>` / `<option>`: Menu suspenso
- `<label>`: Rótulo de campo
- `<fieldset>` / `<legend>`: Agrupamento de campos

---

### Tags Semânticas (HTML5)

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- `<figure>` / `<figcaption>`: Imagens com legenda

---

## Atributos HTML

### Atributos Globais

| Atributo    | Função                                           |
|-------------|--------------------------------------------------|
| `id`        | Identificador único                              |
| `class`     | Classe(s) CSS                                    |
| `style`     | Estilo inline                                    |
| `title`     | Dica ao passar o mouse                           |
| `data-*`    | Dados personalizados (usado em JS)               |
| `lang`      | Idioma do conteúdo                               |

---

### Links (`<a>`)

- `href`: URL de destino  
- `target`: Comportamento do link (`_blank`, `_self`)  
- `download`: Força o download do arquivo  
- `rel`: Relação com o link (ex: `noopener`, `noreferrer`)

---

### Imagens (`<img>`)

- `src`: Caminho da imagem  
- `alt`: Texto alternativo  
- `width` / `height`: Tamanho da imagem  
- `loading`: `lazy` para carregamento sob demanda

---

### Formulários

- `type`: Tipo de entrada (`text`, `email`, etc.)  
- `name`: Nome do campo  
- `value`: Valor padrão  
- `placeholder`: Texto de dica  
- `required`: Campo obrigatório  
- `disabled`: Campo desativado  
- `readonly`: Somente leitura  
- `maxlength`: Limite de caracteres  
- `min` / `max`: Valores mínimo e máximo  
- `pattern`: Expressão regular para validação  
- `autocomplete`: Preenchimento automático

---

### Tabelas

- `colspan`: Abrange colunas  
- `rowspan`: Abrange linhas  
- `headers`: Células relacionadas (acessibilidade)

---

### Multimídia

- `controls`: Mostra controles de mídia  
- `autoplay`: Toca automaticamente  
- `loop`: Repetição automática  
- `muted`: Inicia sem som  
- `preload`: Estratégia de carregamento (`auto`, `metadata`, `none`)

---

## Exemplos de Atributos

```html
<!-- Link com múltiplos atributos -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer" title="Ir para o Google">
  Pesquisar no Google
</a>

<!-- Imagem com acessibilidade -->
<img src="https://via.placeholder.com/400x200" alt="Exemplo de imagem de placeholder" width="400" height="200" loading="lazy">

<!-- Campo de e-mail com validação -->
<input type="email" name="email_usuario" placeholder="seuemail@exemplo.com" required maxlength="100">

<!-- Div com estilos e dados personalizados -->
<div id="secao-principal" class="container destaque" style="padding: 20px; border: 1px solid #ccc;" data-projeto-id="123">
  Conteúdo principal da página.
</div>
```

---

## 🚀 Conclusão

Este guia serve como um **resumo prático dos fundamentos de HTML**. Que tal colocar em prática agora mesmo? Crie um arquivo `.html` e experimente usar as tags e atributos que aprendeu!
