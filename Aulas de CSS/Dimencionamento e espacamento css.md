
# Tutorial CSS — Largura, Altura, Margem, Padding e Box Sizing

Este guia é uma introdução prática aos principais conceitos de **tamanho e espaçamento** no CSS. Aprenda a controlar o tamanho dos elementos e o espaço ao redor e dentro deles usando `width`, `height`, `margin`, `padding` e `box-sizing`.

---

## 🟩 1. Largura e Altura (`width` e `height`)

Essas propriedades controlam o **tamanho do conteúdo** de um elemento.

```css
div {
    width: 300px;
    height: 150px;
}
```

Você pode usar **valores fixos** (`px`) ou **relativos** (`%`, `vw`, `vh`):

```css
img {
    width: 100%;
    height: auto;
}
```

➡️ `width: 100%` faz o elemento ocupar toda a largura do elemento pai.

---

## 🟨 2. Largura e Altura Máxima e Mínima

### `max-width` / `max-height`
Define os **limites máximos** de tamanho.

```css
img {
    max-width: 500px;
}
```

### `min-width` / `min-height`
Define os **limites mínimos** de tamanho.

```css
div {
    min-height: 200px;
}
```

Essas propriedades são úteis para tornar o layout **responsivo**.

---

## 🟥 3. Margin (Margem Externa)

A margem é o **espaço externo** entre um elemento e os elementos ao redor.

```css
p {
    margin: 20px;
}
```

Você pode definir margens diferentes para cada lado:

```css
h1 {
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
    margin-left: 25px;
}
```

Ou usar a **shorthand**:

```css
h1 {
    margin: 10px 15px 20px 25px;
}
```

Ordem: **top right bottom left**

---

## 🟦 4. Padding (Preenchimento Interno)

O `padding` é o espaço **dentro do elemento**, entre o conteúdo e sua borda.

```css
div {
    padding: 20px;
}
```

Você também pode usar a shorthand:

```css
div {
    padding: 10px 15px 5px 0px;
}
```

Ordem igual à `margin`: **top right bottom left**.

---

## 🧱 5. Box Sizing

Controla como o navegador **calcula a largura e altura** dos elementos.

### Valor padrão: `content-box`
A largura e altura **não incluem** o `padding` e a `border`. O conteúdo cresce para acomodar.

```css
.box1 {
    width: 200px;
    padding: 20px;
    box-sizing: content-box;
}
```

➡️ Tamanho total = `width` + `padding` + `border`

### Valor recomendado: `border-box`
A largura e altura **já incluem** `padding` e `border`. É mais fácil controlar.

```css
.box2 {
    width: 200px;
    padding: 20px;
    box-sizing: border-box;
}
```

➡️ Tamanho total = exatamente 200px

---

## 💡 Dica: Reset Global

Muitos projetos usam esse reset para evitar problemas de cálculo:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

---

## 📘 Resumo Visual do Box Model

```
+---------------------------+
|        margin             |
|  +---------------------+  |
|  |     border           | |
|  |  +---------------+  |  |
|  |  |   padding     |  |  |
|  |  |  +--------+   |  |  |
|  |  |  | content |   |  |  |
|  |  |  +--------+   |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

---

Compreender essas propriedades é essencial para criar layouts organizados, responsivos e bonitos.

