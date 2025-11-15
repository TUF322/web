# Portfolio Web

Portfolio pessoal criado com React para exibir seus projetos e habilidades.

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Executar em Desenvolvimento

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
```

### Deploy para GitHub Pages

1. **Instalar dependências de deploy:**
```bash
npm install
```

2. **Configurar o repositório no GitHub:**
   - Crie um repositório no GitHub (ex: `web` ou `portfolio`)
   - Se o nome do repositório for diferente de `web`, atualize o campo `homepage` no `package.json`

3. **Fazer deploy:**
```bash
npm run deploy
```

Isso irá:
- Fazer o build do projeto
- Criar/atualizar o branch `gh-pages` no GitHub
- Publicar o site em `https://TUF322.github.io/web`

**Nota:** Se o nome do repositório for diferente, atualize a URL no campo `homepage` do `package.json` antes de fazer o deploy.

## 📝 Personalização

### Adicionar Seus Projetos

Edite o arquivo `src/components/Projects.js` e modifique o array `projects` com seus próprios projetos:

```javascript
const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://seu-projeto.com',
    github: 'https://github.com/seu-usuario/projeto'
  },
  // Adicione mais projetos aqui
];
```

### Personalizar Informações Pessoais

- **Hero Section**: Edite `src/components/Hero.js`
- **Sobre Mim**: Edite `src/components/About.js`
- **Habilidades**: Modifique o array `skills` em `src/components/About.js`
- **Contacto**: Atualize o email em `src/components/Contact.js` e configure o backend para o formulário

### Cores e Estilos

Os estilos principais estão nos arquivos CSS de cada componente. A paleta de cores principal usa:
- Gradiente: `#667eea` → `#764ba2`
- Fundo: `#0a0a0a`
- Texto: `#e0e0e0`

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.js       # Navegação
│   ├── Hero.js         # Seção inicial
│   ├── About.js        # Sobre mim
│   ├── Projects.js     # Projetos
│   ├── Contact.js      # Formulário de contacto
│   └── Footer.js       # Rodapé
├── App.js
└── index.js
```

## 🎨 Características

- ✅ Design moderno e responsivo
- ✅ Animações suaves
- ✅ Navegação suave entre seções
- ✅ Formulário de contacto
- ✅ Suporte a links de projetos e GitHub
- ✅ Otimizado para mobile

## 📄 Licença

Este projeto é pessoal e livre para uso e modificação.
