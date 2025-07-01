
# 📘 Documentação HTML – Exemplos Práticos

---

## 📁 `Principal.html` – Comandos Básicos em HTML

### Introdução

Este arquivo exemplifica o uso de comandos básicos do HTML, como formatação de texto, inputs de formulário, uso de `id`, `class`, e imagens externas.

### Estrutura de Elementos

- **Negrito e itálico**:
  ```html
  <strong> Meu Primeiro <i> HTML </i></strong>
  ```

- **Formulários com `label` e `input`**:
  ```html
  <label for="box2">Digite seu nome:</label>
  <input type="text" id="box2" />
  ```

- **Uso de `id` e `class`**:
  ```html
  <p id="p1tag">Colocando uma id</p>
  <strong class="class01">Teste Classe</strong>
  ```

- **Escolha de cor**:
  ```html
  <label for="color1">Escolha uma cor</label>
  <input type="color" id="color1">
  ```

- **Imagem externa com atributo `alt`**:
  ```html
  <img src="URL" alt="Descrição da imagem" width="200">
  ```

---

## 📁 `aula_links.html` – Aula Sobre Links

### Objetivo

Demonstrar como criar links entre páginas e sites externos, com atributos adicionais como `title` e `target`.

### Exemplos de Código

- **Link externo com nova aba e título:**
  ```html
  <a href="http://dio.me" title="Va para o site da DIO" target="_blank">
    Dio.me acesso ao site
  </a>
  ```

- **Link interno para outra página HTML do projeto:**
  ```html
  <a href="listas.html" title="Aula de Listas"> Abra a Aula sobre listas </a>
  ```

- **Uso em lista com `<ul>` e `<li>`:**
  ```html
  <ul>
    <li><a href="...">Link</a></li>
  </ul>
  ```

---

## 📁 `listas.html` – Aula de Listagem

### Objetivo

Aprender a usar listas ordenadas (`<ol>`) e não ordenadas (`<ul>`), incluindo sublistas.

### Listas Ordenadas e Sublistas

```html
<ol>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <ol>
    <li>Item Sub Lista.</li>
  </ol>
</ol>
```

### Listas Não Ordenadas

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

### Link de Retorno

```html
<a href="aula_links.html" title="Voltar para aula links">
  Voltar para aula links
</a>
```

---

## 📁 `textos.html` – Aula Sobre Textos

### Objetivo

Demonstrar o uso de elementos de tipografia e formatação de texto em HTML.

### Estrutura Típica de Texto

- **Títulos (`<h1>`, `<h2>`)**:
  ```html
  <h1>Dio.Me</h1>
  <h2>Subtítulo</h2>
  ```

- **Parágrafo com itálico**:
  ```html
  <p>Parágrafo do site, <i>texto para meu site</i>, aprendendo tipografia</p>
  ```

- **Citação com `<blockquote>`**:
  ```html
  <blockquote>
    citação para um <strong>TEXTO</strong>
  </blockquote>
  ```

- **Texto sublinhado e misturado com tags semânticas**:
  ```html
  <h2><u>Aprendendo Técnologias com a <i><strong>DIO.ME</strong></i></u></h2>
  ```

### Instruções com Estilo Markdown no HTML

```html
<p>1. <strong>Crie o Repositório</strong> no GitHub:</p>
<p>- Vá para <a href="https://github.com/">github.com</a> e faça login.</p>
<p>- Clique no sinal `+` e selecione `New repository`.</p>
```

---
