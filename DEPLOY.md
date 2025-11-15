# Guia de Deploy para GitHub Pages

## Pré-requisitos

1. Conta no GitHub
2. Repositório criado no GitHub
3. Git configurado localmente

## Passo a Passo

### 1. Instalar dependências

```bash
cd web
npm install
```

### 2. Configurar o repositório Git (se ainda não estiver configurado)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TUF322/web.git
git push -u origin main
```

**Nota:** Substitua `TUF322/web` pelo seu username e nome do repositório.

### 3. Atualizar o homepage no package.json (se necessário)

Se o nome do seu repositório for diferente de `web`, edite o `package.json`:

```json
{
  "homepage": "https://TUF322.github.io/NOME_DO_REPOSITORIO"
}
```

### 4. Fazer o deploy

```bash
npm run deploy
```

Este comando irá:
- Fazer o build do projeto (`npm run build`)
- Criar/atualizar o branch `gh-pages` automaticamente
- Publicar o site no GitHub Pages

### 5. Ativar GitHub Pages no repositório

1. Vá para o repositório no GitHub
2. Clique em **Settings**
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione o branch `gh-pages` e a pasta `/ (root)`
5. Clique em **Save**

### 6. Acessar o site

O site estará disponível em:
- `https://TUF322.github.io/web` (ou o nome do seu repositório)

**Tempo de propagação:** Pode levar alguns minutos para o site ficar disponível.

## Atualizações Futuras

Sempre que fizer alterações e quiser atualizar o site:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## Troubleshooting

### Erro: "gh-pages command not found"
```bash
npm install --save-dev gh-pages
```

### Erro: "Repository not found"
Verifique se:
- O repositório existe no GitHub
- O nome do repositório no `package.json` está correto
- Você tem permissões no repositório

### Site não aparece
- Verifique se o branch `gh-pages` foi criado no GitHub
- Verifique as configurações de Pages no GitHub (Settings > Pages)
- Aguarde alguns minutos para a propagação

