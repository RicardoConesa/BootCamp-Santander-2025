# Guia Completo sobre Formulários em HTML

Este é um guia consolidado sobre a criação de formulários em HTML, baseado em uma série de aulas práticas. Abordamos desde a estrutura fundamental da tag `<form>` até os mais diversos tipos de campos (`input`), botões e outros elementos interativos.

## 1. A Tag `<form>`: A Base de Tudo

Todo formulário começa com a tag `<form>`. Ela funciona como um contêiner para todos os elementos de entrada de dados.

### Atributos Essenciais

* `name`: Define um nome para o formulário.
* `action`: Especifica a URL para onde os dados serão enviados quando o formulário for submetido.
* `method`: Define o método HTTP para o envio dos dados.
    * `get`: Anexa os dados do formulário à URL. Não é seguro para dados sensíveis como senhas.
    * `post`: Envia os dados no corpo da requisição HTTP, sendo mais seguro.
* `autocomplete`: Pode ser "on" ou "off" para controlar se o navegador deve preencher previamente os campos com base em dados salvos.
* `onsubmit`: Atributo que executa um script (geralmente JavaScript) no momento do envio do formulário.

### Exemplo de Estrutura Básica (`index.html`)

```html
<form name="cadastro" autocomplete="off" onsubmit="alert('Formulario enviado com avisos');" method="post" action="#">
    
    <label for="name">Digite seu nome: </label>
    <input type="text" name="name" id="name" /><br>
    
    <label for="age">Idade: </label>
    <input type="number" name="age" id="age"/><br>
    
    <label for="password">Senha: </label>
    <input type="password" name="password" id="password"/><br>
    <br>
    
    <button type="submit">Enviar </button>
</form>
```

---

## 2. A Versatilidade da Tag `<input>`

A tag `<input>` é o elemento mais utilizado em formulários. Seu comportamento muda drasticamente de acordo com o atributo `type`.

### Tipos de `input` Mais Comuns (`aulainputs.html`)

* `text`: Campo de texto de uma única linha.
* `number`: Campo para inserção de valores numéricos.
* `password`: Campo que oculta os caracteres digitados.
* `email`: Campo que valida se o formato do texto inserido corresponde a um e-mail.
* `url`: Campo para a inserção de um endereço URL.
* `search`: Campo de texto estilizado para buscas.
* `date`: Fornece um seletor de data.
* `time`: Fornece um seletor de hora.
* `color`: Apresenta um seletor de cores.
* `range`: Controle deslizante para selecionar um número dentro de um intervalo.
* `file`: Permite ao usuário selecionar um ou mais arquivos de seu dispositivo. Use o atributo `multiple` para permitir a seleção de vários arquivos.
* `hidden`: Campo de dados oculto para o usuário, mas que é enviado com o formulário.
* `submit`: Um botão que, quando clicado, envia o formulário.

---

## 3. Seleção de Opções: `checkbox` e `radio`

Esses tipos de `input` são essenciais para dar opções ao usuário.

### Checkbox

Use caixas de seleção (`checkbox`) quando o usuário puder escolher **zero ou mais opções** de uma lista.

**Exemplo (`aulacheckboxeradio.html`):** Opcionais de uma pizza.

```html
<p>Quais opcionais você deseja</p>

<input type="checkbox" name="opcional[]" value="queijo"> + Queijo<br>
<input type="checkbox" name="opcional[]" value="calabresa"> + Calabresa <br>
<input type="checkbox" name="opcional[]" value="cebola"> + Cebola <br>
<input type="checkbox" name="opcional[]" value="azeitona"> + Azeitona <br>
```

### Radio Button

Use botões de rádio (`radio`) quando o usuário deve escolher **apenas uma opção** de um grupo. Para que funcionem corretamente, todos os inputs de rádio de um mesmo grupo devem compartilhar o mesmo atributo `name`.

**Exemplo (`aulacheckboxeradio.html`):** Escolha da borda e da bebida.

```html
<p>Borda Recheada</p>
<input type="radio" name="borda" value="sim"> Sim <br>
<input type="radio" name="borda" value="não"> Não <br>

<p>Bebidas</p>
<input type="radio" name="bebida" value="suco">Suco<br>
<input type="radio" name="bebida" value="refrigerante">Refrigerante<br>
<input type="radio" name="bebida" value="agua">Agua<br>
<input type="radio" name="bebida" value="nenhum">Nenhum<br>
```

---

## 4. Listas Suspensas e Áreas de Texto

### `<select>` - Lista de Opções

A tag `<select>` cria um menu suspenso (dropdown). Cada item da lista é definido pela tag `<option>`.

**Exemplo (`aulaselect.html`):**

```html
<label for="cargo">Cargo: </label>
<select name="cargo">
    <option value="">Selecione o Cargo</option>
    <option value="administrativo">Administrativo</option>
    <option value="eletricista">Eletricista</option>
    <option value="gerente">Gerente</option>
</select><br>
```

### `<textarea>` - Campo de Texto Multilinha

Para textos longos, como mensagens ou comentários, use a tag `<textarea>`. Você pode sugerir um tamanho inicial com os atributos `rows` (linhas) e `cols` (colunas).

**Exemplo (`aulaselect.html`):**

```html
<label>Mensagem</label><br>
<textarea name="mensagem" rows="10" cols="60"></textarea>
```

---

## 5. A Tag `<button>` e Seus Tipos

A tag `<button>` é mais flexível que `input type="button"` e é a forma recomendada de criar botões. Suas ações são definidas pelo atributo `type`.

### Tipos de Botão (`aulabuton.html`)

* `type="submit"`: O comportamento padrão. Envia os dados do formulário para o destino definido no atributo `action`.
* `type="reset"`: Limpa todos os campos do formulário, restaurando seus valores iniciais.
* `type="button"`: Um botão genérico sem ação predefinida. É ideal para executar scripts JavaScript através do evento `onclick`.

### Exemplo de Botões (`aulabuton.html`)

```html
<button type="submit">Enviar</button><br>

<button type="reset">reset</button><br>

<button type="button" onclick="alert('Você clicou no botão')">clickavel com alerta</button><br>
```