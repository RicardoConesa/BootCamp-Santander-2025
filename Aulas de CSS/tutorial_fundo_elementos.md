
# 🖌️ CSS - Fundo dos Elementos

---

## 1️⃣ Alterando o Fundo
```css
div {
    background-color: lightblue;
    background-image: url('imagem.jpg');
}
```

---

## 2️⃣ Redimensionando a Imagem de Fundo
```css
div {
    background-size: cover; /* cover, contain, auto */
}
```

---

## 3️⃣ Repetição de Fundo
```css
div {
    background-repeat: no-repeat; /* repeat, repeat-x, repeat-y, no-repeat */
}
```

---

## 4️⃣ Posicionamento do Fundo
```css
div {
    background-position: center top; /* left, right, center, valores em px ou % */
}
```

---

## 5️⃣ Fundo Fixo ou Rolável
```css
div {
    background-attachment: fixed; /* fixed, scroll */
}
```

---

## 6️⃣ Origem do Fundo
```css
div {
    background-origin: content-box; /* border-box, padding-box, content-box */
}
```

---

## 7️⃣ Recorte do Fundo
```css
div {
    background-clip: padding-box; /* border-box, padding-box, content-box, text */
}
```

---

## 8️⃣ Mesclagem de Fundos
```css
div {
    background-blend-mode: multiply; /* multiply, screen, overlay, etc */
}
```

---

## 9️⃣ Propriedade Resumida
```css
div {
    background: lightblue url('imagem.jpg') no-repeat center/cover fixed;
}
```
