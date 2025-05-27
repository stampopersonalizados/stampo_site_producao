# Guia de Edição e Publicação do Site Stampô

Este guia explica como editar e publicar o novo site da Stampô, criado com um design moderno e profissional inspirado no site da Nerd Universe.

## Índice

1. [Estrutura do Site](#estrutura-do-site)
2. [Como Editar Produtos](#como-editar-produtos)
3. [Como Editar Textos e Conteúdos](#como-editar-textos-e-conteúdos)
4. [Como Adicionar Imagens](#como-adicionar-imagens)
5. [Como Publicar no GitHub Pages](#como-publicar-no-github-pages)
6. [Personalização do Carrinho para Instagram](#personalização-do-carrinho-para-instagram)

## Estrutura do Site

O site da Stampô foi construído com HTML, CSS e JavaScript modernos, organizados da seguinte forma:

```
stampo-redesign/
├── css/             # Arquivos de estilo
│   └── styles.css   # Estilos do site
├── js/              # Scripts JavaScript
│   └── script.js    # Funcionalidades do site e carrinho
├── images/          # Imagens do site
│   └── stampo-logo.png  # Logo da Stampô
└── index.html       # Página inicial
```

## Como Editar Produtos

Para adicionar, remover ou modificar produtos no site:

### Editar produtos existentes

1. Abra o arquivo `js/script.js` em qualquer editor de texto
2. Localize a seção "Produtos (simulação de banco de dados)"
3. Modifique os produtos existentes conforme necessário

```javascript
// Produtos (simulação de banco de dados)
const products = [
    {
        id: 1,
        name: "Camiseta Básica Preta",
        price: 49.90,
        image: "images/product-1.jpg"
    },
    // Outros produtos...
];
```

### Adicionar novos produtos

1. Adicione uma nova entrada no array `products`
2. Certifique-se de usar um ID único
3. Adicione a imagem correspondente na pasta `images/`

```javascript
{
    id: 5, // Use um número que não esteja em uso
    name: "Nova Camiseta",
    price: 59.90,
    image: "images/nova-camiseta.jpg"
}
```

### Adicionar o produto ao HTML

Após adicionar o produto no JavaScript, você também precisa adicioná-lo ao HTML:

1. Abra o arquivo `index.html`
2. Localize a seção "Produtos em destaque"
3. Adicione um novo card de produto seguindo o modelo existente:

```html
<div class="product-card">
    <div class="product-image">
        <img src="images/nova-camiseta.jpg" alt="Nova Camiseta">
        <span class="product-tag">Novo</span>
    </div>
    <div class="product-info">
        <h3>Nova Camiseta</h3>
        <div class="product-price">
            <span class="current-price">R$ 59,90</span>
        </div>
        <div class="product-actions">
            <button class="add-to-cart" data-id="5">
                <i class="fas fa-shopping-cart"></i> Adicionar
            </button>
        </div>
    </div>
</div>
```

## Como Editar Textos e Conteúdos

### Editar a Página Inicial

1. Abra o arquivo `index.html` em um editor de texto
2. Localize o texto que deseja alterar
3. Modifique o texto entre as tags HTML
4. Salve o arquivo

Exemplo:
```html
<h1>Sua <span>Criatividade</span>, Nossa Estampa</h1>
<p>Camisetas personalizadas com seu estilo único. Qualidade premium e designs exclusivos para você se destacar.</p>
```

### Editar Categorias

Para modificar as categorias exibidas:

1. Localize a seção "Categorias em destaque" no arquivo `index.html`
2. Modifique os textos e links conforme necessário:

```html
<a href="categorias.html#basicas" class="category-card">
    <img src="images/category-basic.jpg" alt="Camisetas Básicas">
    <div class="category-content">
        <h3>Camisetas Básicas</h3>
        <p>Conforto e estilo para o dia a dia</p>
    </div>
</a>
```

### Editar Informações de Contato

Para atualizar informações de contato:

1. Localize a seção "Footer" no arquivo `index.html`
2. Modifique os dados de contato e redes sociais:

```html
<div class="footer-column">
    <h3>Contato</h3>
    <ul class="footer-links">
        <li><i class="fas fa-map-marker-alt"></i> Rua das Estampas, 123</li>
        <li><i class="fas fa-phone"></i> (11) 98765-4321</li>
        <li><i class="fas fa-envelope"></i> contato@stampo.com.br</li>
    </ul>
</div>
```

## Como Adicionar Imagens

### Preparar as imagens

- Use imagens com tamanho adequado (recomendado: 800x600 pixels para produtos)
- Salve em formato JPG ou PNG
- Use nomes sem espaços ou caracteres especiais (ex: `camiseta-vermelha.jpg`)

### Adicionar imagens ao projeto

1. Coloque suas imagens na pasta `images/`
2. Referencie-as no HTML ou JavaScript conforme necessário

### Substituir imagens existentes

Para manter a mesma estrutura, você pode simplesmente substituir os arquivos de imagem existentes mantendo os mesmos nomes:

- `images/product-1.jpg`
- `images/product-2.jpg`
- etc.

## Como Publicar no GitHub Pages

### Passo 1: Criar uma conta no GitHub

1. Acesse [github.com](https://github.com) e clique em "Sign up"
2. Siga as instruções para criar sua conta gratuita

### Passo 2: Criar um novo repositório

1. Após fazer login, clique no botão "+" no canto superior direito
2. Selecione "New repository"
3. Nomeie o repositório como `stampo-site`
4. Deixe como "Public"
5. Clique em "Create repository"

### Passo 3: Fazer upload dos arquivos

1. No seu repositório, clique no botão "Add file" e selecione "Upload files"
2. Extraia o arquivo ZIP que você recebeu
3. Arraste todos os arquivos e pastas extraídos para o GitHub
4. Clique em "Commit changes"

### Passo 4: Configurar o GitHub Pages

1. No seu repositório, clique na aba "Settings"
2. No menu lateral esquerdo, clique em "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" e "/root"
5. Clique em "Save"

### Passo 5: Acessar seu site

1. Após alguns minutos, seu site estará disponível em:
   `https://seuusuario.github.io/stampo-site/`
2. Você pode compartilhar este link com seus clientes

## Personalização do Carrinho para Instagram

O site inclui um carrinho de compras que redireciona para o Instagram quando o cliente finaliza a compra. Para personalizar este comportamento:

### Alterar o nome de usuário do Instagram

1. Abra o arquivo `js/script.js`
2. Localize a função `checkout()`
3. Modifique a linha que contém o link do Instagram:

```javascript
// Redirecionar para o Instagram Direct
window.open(`https://instagram.com/direct/t/stampo?text=${encodedMessage}`, '_blank');
```

Substitua `stampo` pelo seu nome de usuário do Instagram.

### Personalizar a mensagem do pedido

Para modificar o formato da mensagem enviada:

1. Localize a função `checkout()` no arquivo `js/script.js`
2. Modifique o formato da mensagem conforme necessário:

```javascript
// Preparar a mensagem para o Instagram
let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";

cart.forEach(item => {
    message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
});

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
message += `\nTotal: R$ ${total.toFixed(2)}`;
```

## Dicas Adicionais

- **Cores**: As cores do site foram cuidadosamente selecionadas para combinar com o logo da Stampô. Se precisar modificá-las, edite as variáveis CSS no início do arquivo `css/styles.css`.
- **Responsividade**: O site já está otimizado para dispositivos móveis. Teste em diferentes tamanhos de tela após fazer alterações.
- **Fontes**: O site usa a fonte "Poppins" do Google Fonts. Se quiser mudar, edite o link no cabeçalho do HTML e atualize as referências no CSS.
- **Ícones**: Os ícones são do Font Awesome. Você pode adicionar mais ícones consultando o site [fontawesome.com](https://fontawesome.com/icons).

Para qualquer dúvida adicional ou personalização mais avançada, entre em contato para obter suporte.
