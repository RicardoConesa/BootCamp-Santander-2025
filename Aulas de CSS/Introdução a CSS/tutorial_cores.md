
# 🎨 CSS - Cores

O CSS oferece várias formas de definir cores para textos, fundos, bordas e outros elementos.

---

## 1️⃣ Cores Pré-definidas
O CSS possui nomes de cores já prontos, como `red`, `blue`, `green` etc.

```css
p {
    color: red;
    background-color: yellow;
}
```

---

## 2️⃣ RGB e RGBA
O formato RGB define cores pela combinação de vermelho, verde e azul (0 a 255).  
O RGBA inclui um quarto valor: **alpha**, que define a transparência (0.0 a 1.0).

```css
div {
    background-color: rgb(255, 0, 0);    /* vermelho */
    color: rgba(255, 255, 255, 0.7);     /* branco com transparência */
}
```

---

## 3️⃣ Hexadecimal
Usa 6 dígitos (ou 3 dígitos curtos) para representar cores.  
O formato é `#RRGGBB`.

```css
h1 {
    color: #00ff00;  /* verde */
}
```

---

## 4️⃣ HSL e HSLA
HSL significa Hue (matiz), Saturation (saturação) e Lightness (luminosidade).  
HSLA inclui o canal de transparência.

```css
p {
    color: hsl(200, 50%, 50%);
    background-color: hsla(0, 100%, 50%, 0.5);
}
```

📌 HSL é útil para criar paletas de cores harmoniosas.
