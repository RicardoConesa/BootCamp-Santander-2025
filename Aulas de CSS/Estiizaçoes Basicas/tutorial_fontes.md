
# ✍️ CSS - Fontes

---

## 1️⃣ Fontes Personalizadas
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
```

---

## 2️⃣ @font-face
```css
@font-face {
    font-family: 'MinhaFonte';
    src: url('minhaFonte.woff2') format('woff2');
}

p {
    font-family: 'MinhaFonte', sans-serif;
}
```

---

## 3️⃣ Tamanho e Estilo
```css
p {
    font-size: 18px;
    font-style: italic; /* normal, italic, oblique */
    font-weight: bold; /* valores numéricos ou palavras */
}
```

---

## 4️⃣ Altura da Linha
```css
p {
    line-height: 1.5;
}
```

---

## 5️⃣ Propriedade Resumida
```css
p {
    font: italic bold 16px/1.5 Arial, sans-serif;
}
```
