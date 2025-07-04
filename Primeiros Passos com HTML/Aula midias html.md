
# 🎥 Aula de Mídias em HTML

## 📷 1. Tag `<img>` - Imagem

A tag `<img>` é usada para inserir imagens na página. Os atributos comuns são:

- `src`: caminho da imagem
- `alt`: texto alternativo (acessibilidade)
- `title`: dica de ferramenta (tooltip)
- `width` ou `height`: define tamanho da imagem

### ✅ Exemplo
```html
<img src="imagem.png" alt="Descrição da imagem" title="Texto da dica" width="200" />
```

---

## 🖼️ 2. Tag `<svg>` - Gráficos vetoriais

A tag `<svg>` é usada para incluir **gráficos vetoriais escaláveis** diretamente no HTML.

### ✅ Exemplo básico
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

> No exemplo da aula, a tag estava vazia — mas pode ser usada para formas, ícones e gráficos.

---

## 🎵 3. Tag `<audio>` - Áudio

Permite a reprodução de áudio com controles nativos.

### ✅ Exemplo
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Seu navegador não tem suporte para áudio.
</audio>
```

- Atributo `controls` exibe os botões de reprodução.
- Use múltiplos `<source>` para compatibilidade entre navegadores.

---

## 🎬 4. Tag `<video>` - Vídeo

Incorpora vídeos na página com suporte a múltiplos formatos e legendas.

### ✅ Exemplo
```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="legenda.vtt" kind="captions" srclang="pt-br" />
  Seu navegador não tem suporte.
</video>
```

- `controls`: exibe player nativo
- `track`: define arquivos de legenda (como `.vtt` ou `.srt`)
- `srclang`: linguagem da legenda

---

## 🌐 5. Tag `<iframe>` - Conteúdo incorporado

Permite incorporar conteúdo externo como vídeos do YouTube ou mapas.

### ✅ Exemplo
```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/IRlU-NRp9Tw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen></iframe>
```

---

## 📝 Conclusão

Nesta aula você aprendeu a usar as principais tags para inserir **mídias** em HTML:

- Imagens: `<img>`
- Gráficos vetoriais: `<svg>`
- Áudio: `<audio>`
- Vídeo: `<video>`
- Conteúdo externo: `<iframe>`

Esses elementos são essenciais para tornar suas páginas mais interativas e multimídia! 🎧📺📸
