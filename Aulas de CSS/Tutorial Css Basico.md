
# Tutorial de CSS Básico — Seletores e Combinadores

Este guia é uma introdução clara e prática sobre os principais **seletores e combinadores CSS** para iniciantes. Com explicações simples e exemplos, você poderá aplicar estilos de forma eficiente em seus projetos.

---

## 🟢 O que é um seletor CSS?
O seletor define **quais elementos HTML** receberão o estilo que você está criando.

---

## 1️⃣ Seletor de Elemento (Tag)
Aplica o estilo a **todas as ocorrências** de uma determinada tag HTML.

```css
p {
    color: blue;
}
```
➡️ Todos os parágrafos (`<p>`) terão texto azul.

---

## 2️⃣ Seletor de Classe
Usado para aplicar estilos a elementos com a **mesma classe**.

```css
.caixa {
    background-color: lightgray;
    padding: 10px;
}
```

HTML:
```html
<div class="caixa">Conteúdo 1</div>
<div class="caixa">Conteúdo 2</div>
```

---

## 3️⃣ Seletor de ID
Aplica estilo a um **único elemento** com um `id` específico.

```css
#menu {
    background-color: black;
    color: white;
}
```

HTML:
```html
<nav id="menu">Navegação</nav>
```

---

## 4️⃣ Seletor Universal (`*`)
Aplica o estilo a **todos os elementos da página**.

```css
* {
    font-family: Arial, sans-serif;
}
```

---

## 5️⃣ Seletor de Atributo
Aplica estilo aos elementos com um atributo ou valor específico.

```css
a[href^="https"] {
    color: green;
}
```

➡️ Todos os links que começam com `https` ficarão verdes.

---

# 🔵 Combinadores CSS

Combinadores permitem selecionar elementos com base na **relação entre eles**.

---

## 1️⃣ Descendente (espaço)
Seleciona **qualquer elemento dentro de outro**, em qualquer nível.

```css
div p {
    color: red;
}
```

➡️ Todos os `<p>` dentro de `<div>` serão vermelhos.

---

## 2️⃣ Combinador Filho (`>`)
Seleciona **apenas os filhos diretos** de um elemento.

```css
ul > li {
    list-style-type: square;
}
```

➡️ Apenas os `<li>` diretamente dentro de um `<ul>` serão afetados.

---

## 3️⃣ Combinador Irmão Adjacente (`+`)
Seleciona um elemento que está **logo após** outro.

```css
h2 + p {
    color: purple;
}
```

➡️ O primeiro `<p>` que vem logo após um `<h2>` ficará roxo.

---

## 4️⃣ Combinador Irmão Geral (`~`)
Seleciona **todos os irmãos seguintes** de um elemento.

```css
h2 ~ p {
    color: orange;
}
```

➡️ Todos os `<p>` depois de um `<h2>` (no mesmo nível) ficarão laranja.

---

# 🧩 Outros Tópicos Úteis

## Agrupamento de Seletores
Permite aplicar o mesmo estilo a **vários seletores**.

```css
h1, h2, h3 {
    text-align: center;
    color: navy;
}
```

---

## Pseudo-classes
Estilizam elementos em **estados específicos**.

```css
a:hover {
    color: red;
}
```

➡️ Muda a cor de links quando o mouse passa por cima.

---

## Comentários em CSS
São usados para **explicar ou desativar** partes do código.

```css
/* Este é um comentário em CSS */
```

---

# 🧠 Dica Final
Use os seletores e combinadores de forma estratégica para manter seu CSS **organizado, limpo e fácil de manter**.

---

📘 Criado para iniciantes aprenderem passo a passo a controlar o visual das páginas com CSS.
