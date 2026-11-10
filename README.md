# Central de Estudos

Painel pessoal com 4 trilhas de estudo (Pós em Gestão da Qualidade, Pós em IA, Preparatório Auditor ISO 9001/14001/45001 e Inglês), com aulas semanais, trilha de progresso, financeiro, leituras e certificado de conclusão.

## Estrutura

Tudo fica em um único arquivo: `index.html` (painel, aulas e cursos).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `central-de-estudos`).
2. Envie estes arquivos para a raiz do repositório:
   ```
   git init
   git add .
   git commit -m "Central de Estudos"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/central-de-estudos.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Em 1 a 2 minutos o site fica em `https://SEU-USUARIO.github.io/central-de-estudos/`.

## Observações

- O progresso (aulas concluídas, parcelas pagas e nome do certificado) fica salvo no navegador (localStorage). Usar outro navegador ou limpar os dados do site zera o progresso.
- Para editar conteúdo, procure o curso dentro do `index.html` (busque por `id:"qual"`, `id:"ia"`, `id:"aud"` ou `id:"ing"`). Cada semana é uma linha `[título, texto, atividade, aula-completa-opcional]`.
- O calendário começa em 16/11/2026, definido em `INICIO` no `index.html`.
