
# Guia de Introdução ao CSS com Exemplos

Este repositório contém exemplos práticos de **HTML** e **CSS** para ensinar, de forma simples, como usar estilos em páginas da web.  
O conteúdo foi pensado para que **qualquer pessoa leiga** possa aprender a personalizar textos, cores, tamanhos e outros elementos visuais.

---

## 📂 Estrutura dos Arquivos

- **exemplo1.html** → Exemplo de aplicação de CSS de três formas diferentes: inline, interno e externo.
- **exemplo1.css** → Arquivo CSS externo que define estilos para elementos como `<h2>`, `<h3>` e `<li>`.
- **seletores.html** → Exemplo para aprender sobre seletores CSS (IDs, classes, seletores universais e atributos).
- **seletores.css** → Estilos aplicados usando diferentes tipos de seletores.

---

## 📖 O que você vai aprender

### 1️⃣ Formas de aplicar CSS
No arquivo `exemplo1.html`, você verá três formas de aplicar estilos:

1. **CSS Inline** – Direto no elemento HTML usando o atributo `style`  
   ```html
   <h1 style="background-color: brown; color: white;">Título com CSS inline</h1>
   ```

2. **CSS Interno** – Dentro da tag `<style>` no `<head>` do HTML  
   ```html
   <style>
       #T1 {
           background-color: black;
           color: yellow;
       }
   </style>
   ```

3. **CSS Externo** – Usando um arquivo `.css` separado e importando com `<link>`  
   ```html
   <link rel="stylesheet" href="assets/CSS/exemplo1.css">
   ```

---

### 2️⃣ Estilização de Elementos (`exemplo1.css`)
Exemplos:
```css
h2 {
    font-style: italic;
    background-color: rgb(165, 17, 98);
    color: rgb(224, 224, 240);
}

li {
    background-color: rgb(22, 105, 43);
    color: cyan;
    font-size: 30px;
}
body {
    background-color: rgb(141, 178, 199);
}
```

📌 **O que faz?**
- Modifica cores de fundo (`background-color`)
- Muda cor do texto (`color`)
- Aplica estilos de fonte (`font-style`, `font-size`)
- Altera sombra (`text-shadow`, `box-shadow`)

---

### 3️⃣ Seletores CSS (`seletores.css`)

#### Seletor por ID
Seleciona um elemento específico com `id`:
```css
#div1 {
    background-color: lightblue;
}
```

#### Seletor por Classe
Aplica estilo a todos os elementos com a mesma classe:
```css
.divclass {
    background-color: lightgreen;
    color: red;
}
```

#### Seletor Universal
Afeta **todos** os elementos da página:
```css
* {
    font-weight: bold;
}
```

#### Seletor por Atributo
Aplica estilo aos elementos que possuem um atributo específico:
```css
[title] {
    background-color: brown;
    color: white;
}
```

Ou para um atributo com valor específico:
```css
[title="aula05"] {
    border-style: outset;
    border-radius: 10px;
}
```

---

## 🚀 Como usar
1. Baixe ou clone este repositório.
2. Abra os arquivos `.html` no navegador para visualizar os exemplos.
3. Edite os arquivos `.css` para testar novas cores, fontes e estilos.

---

## 🎯 Objetivo
Este material é ideal para iniciantes que querem entender **o básico do CSS** e como ele interage com o HTML.

---

✍️ **Autor:** Conteúdo criado para fins educacionais, fácil entendimento e prática.
