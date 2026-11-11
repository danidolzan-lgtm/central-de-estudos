# Central de Estudos

Painel pessoal com 4 trilhas de estudo (Inglês do zero ao C2, Preparatório Auditor Líder ISO 9001/14001/45001, Pós em Gestão de Sistemas Integrados (SGI) e Pós em IA), com aulas semanais, trilha de progresso, financeiro, leituras e certificado de conclusão.

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

- O progresso (aulas concluídas, parcelas pagas e nome do certificado) fica salvo no Firebase (Firestore, coleção `centralEstudos`), na conta Google usada no "Entrar com Google". Aparece igual em qualquer aparelho. Sem login, fica só no navegador.
- Para editar conteúdo, procure o curso dentro do `index.html` (busque por `id:"ing"`, `id:"aud"`, `id:"sgi"` ou `id:"ia"`). Cada módulo é um `MOD(id, nome, objetivo, [aulas])` e cada aula um `L(título, conteúdo, pontos-chave, na prática, atividade, quiz)`. A pasta `js/` é de uma versão antiga e não é usada.
- O calendário começa em 16/11/2026 (`INICIO`) e pula as férias definidas em `FERIAS` no `index.html`: fim de ano (dez–jan) e recesso de julho. Dias de aula: segunda Inglês, terça Auditor Líder, quarta SGI, quinta IA.
