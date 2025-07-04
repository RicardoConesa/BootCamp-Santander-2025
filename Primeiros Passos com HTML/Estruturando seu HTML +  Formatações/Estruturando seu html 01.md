
# 📘 Apostila de HTML - Ensinamentos e Exercícios Práticos

## 1. Estruturação com `<div>` e `<span>`

**Arquivo:** `divespan.html`

### ✅ Explicação
- **`<div>`**: Usada para agrupar blocos de conteúdo. Ocupa toda a largura disponível (elemento de bloco).
- **`<span>`**: Usada para estilizar partes específicas de um texto sem quebrar a linha (elemento inline).

### 💡 Exemplo Prático
```html
<div id="menu-lateral">
  <div id="links">
    <ul>
      <li><a href="#"> LINK01</a></li>
      <li><a href="#"> LINK02</a></li>
      <li><a href="#"> LINK03</a></li>
      <li><a href="#"> LINK04</a></li>
    </ul>
  </div>
  Texto para explicar que a Tag <span id="span1">Span</span> não pega a coluna inteira
</div>
```

---

## 2. Criação de Formulários com `<fieldset>` e `<legend>`

**Arquivo:** `fieldset.html`

### ✅ Explicação
- **`<fieldset>`**: Agrupa elementos de um formulário, facilitando a organização visual.
- **`<legend>`**: Fornece uma legenda ou título ao grupo de campos.
- **Estilo CSS**: Uso de `display: inline-block`, `border-radius` e `padding`.

### 💡 Exemplo Prático
```html
<fieldset>
  <legend>Formulario</legend>
  <div class="row">
    <label>Nome Completo</label><input type="text">
    <label>Idade</label><input type="number">
    <p><label>Endereço</label><input type="text"></p>
  </div>
</fieldset>
```

### 🎯 Exercício
Crie um formulário com os seguintes campos:
- Nome Completo
- E-mail
- Idade
- Endereço

Utilize `<fieldset>` para agrupar os campos e estilize com CSS.

---

## 3. Formatação de Textos com HTML

**Arquivo:** `formatandotextos.html`

### ✅ Explicação
- **`<mark>`**: Destaca texto com marca-texto.
- **`<i>` e `<b>`**: Deixa o texto em itálico ou negrito.
- **`<u>`**: Sublinha o texto.
- **`<blockquote>`**: Indica uma citação ou bloco destacado.
- **`<sup>` e `<sub>`**: Coloca texto como sobrescrito ou subscrito.
- **`<font>`** (obsoleto): Define cor e fonte do texto (substituído por CSS moderno).

### 💡 Exemplo Prático
```html
<mark><i>Programe</i></mark> o seu <u><b>Futuro</b> Global agora!</u> <br>

<blockquote> Texto<sup>**</sup> utilizado<sub>2</sub> para mais formatações </blockquote>

<p><font color="red" face="Arial">Novo parágrafo com texto</font></p>
```

### 🎯 Exercício
Crie uma frase que contenha:
- Texto sublinhado
- Parte em destaque com `<mark>`
- Algum uso de `<sup>` ou `<sub>`
- Um trecho dentro de `<blockquote>`

---

## 📝 Conclusão

Esses exercícios e exemplos mostraram:
- Como estruturar uma página com blocos (`<div>`, `<span>`)
- Como organizar formulários de forma clara e visual (`<fieldset>`, `<legend>`)
- Como aplicar formatação em texto com HTML puro

💡 Para melhores práticas, prefira usar CSS moderno em vez de tags como `<font>`.
