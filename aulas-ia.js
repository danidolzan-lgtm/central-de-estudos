window.AULAS=window.AULAS||{};
Object.assign(window.AULAS,{
"ia-0-0":{r:`Inteligência Artificial é o campo que cria sistemas capazes de realizar tarefas que exigiriam inteligência humana: reconhecer padrões, prever, decidir, entender linguagem. Machine Learning (ML) é a parte da IA em que o sistema aprende com dados em vez de seguir regras escritas à mão. Deep Learning é o ML com redes neurais de muitas camadas.

Marcos históricos: o teste de Turing (1950), o termo IA em Dartmouth (1956), os 'invernos da IA' por falta de dados e computação, a virada do deep learning em 2012 (ImageNet), a arquitetura Transformer em 2017 e a explosão dos modelos de linguagem (LLMs) a partir de 2022.`,
p:["IA ⊃ Machine Learning ⊃ Deep Learning","ML aprende padrões a partir de exemplos","Dados de qualidade valem mais que algoritmo sofisticado","Transformer (2017) é a base dos LLMs atuais","IA estreita resolve tarefas específicas; IA geral ainda é debate"],
ex:`Regra fixa: 'se peso > 500 kg, cobrar tabela X'. ML: o modelo olha milhares de CT-es passados e aprende a prever o prazo real de entrega por rota, dia da semana e tipo de carga.`,
q:{p:"Qual afirmação descreve melhor o Machine Learning?",o:["Regras escritas manualmente por especialistas","Sistemas que aprendem padrões a partir de dados","Robôs físicos","Apenas redes neurais"],c:1,e:"ML aprende com exemplos. Deep Learning é só um tipo de ML."}},

"ia-0-1":{r:`Python é a linguagem padrão da IA pela simplicidade e pelas bibliotecas. O numpy faz cálculo com vetores e matrizes. O pandas trabalha com tabelas (DataFrames), parecido com uma planilha programável: ler CSV e Excel, filtrar, agrupar, juntar tabelas e calcular.

Comandos essenciais: <code>pd.read_csv()</code> e <code>pd.read_excel()</code> para ler, <code>df.head()</code> para ver o início, <code>df[df['col']&gt;x]</code> para filtrar, <code>df.groupby('col').agg()</code> para agrupar, <code>df.merge()</code> para juntar e <code>df.to_excel()</code> para salvar. Use o Google Colab ou o Jupyter para praticar sem instalar nada.`,
p:["DataFrame = tabela com linhas e colunas","groupby equivale à tabela dinâmica","merge equivale ao PROCV","Trate valores vazios com fillna ou dropna","Colab é gratuito e roda no navegador"],
ex:`<pre>import pandas as pd
df = pd.read_excel('ctes.xlsx')
atraso = df[df['dias_atraso'] &gt; 0]
print(atraso.groupby('unidade')['cte'].count())</pre>Conta CT-es atrasados por unidade em 4 linhas.`,
q:{p:"Qual comando do pandas equivale a uma tabela dinâmica do Excel?",o:["merge","groupby","head","read_csv"],c:1,e:"groupby agrupa por uma coluna e permite somar, contar e calcular médias."}},

"ia-0-2":{r:`Todo modelo de ML é estatística aplicada. Você precisa dominar: média, mediana e desvio padrão; distribuições (a normal é a mais comum); correlação (como duas variáveis andam juntas, de -1 a +1); e probabilidade condicional, base do teorema de Bayes.

Cuidado com dois erros clássicos. Correlação não é causalidade: duas variáveis podem subir juntas por causa de uma terceira. E amostras pequenas ou enviesadas geram conclusões falsas. Antes de treinar qualquer modelo, faça a análise exploratória: histogramas, boxplots e gráficos de dispersão.`,
p:["Correlação vai de -1 a +1","Correlação ≠ causalidade","Distribuição normal: 68% dos dados em ±1σ","Probabilidade condicional: P(A|B)","Análise exploratória antes de modelar"],
ex:`Correlação de 0,8 entre distância e prazo de entrega é esperada. Correlação entre vendas de sorvete e atrasos pode ser só o verão (mais volume), não causa direta.`,
q:{p:"Uma correlação de -0,9 indica:",o:["Nenhuma relação","Relação forte e inversa","Relação fraca","Causalidade comprovada"],c:1,e:"Valor próximo de -1 indica relação forte em que uma variável sobe quando a outra desce."}},

"ia-0-3":{r:`SQL é a linguagem para consultar bancos de dados, de onde vêm quase todos os dados de um projeto de IA. A estrutura básica é: <code>SELECT</code> colunas <code>FROM</code> tabela <code>WHERE</code> condição <code>GROUP BY</code> agrupamento <code>ORDER BY</code> ordenação. O <code>JOIN</code> junta tabelas por uma chave em comum.

Preparar dados toma de 60% a 80% do tempo de um projeto. As tarefas típicas são remover duplicados, tratar valores faltantes, padronizar formatos (datas, siglas de unidades), criar variáveis novas (dia da semana, distância) e separar dados de treino e de teste.`,
p:["SELECT … FROM … WHERE … GROUP BY … ORDER BY","INNER JOIN traz só o que existe nas duas tabelas","LEFT JOIN mantém tudo da tabela da esquerda","Padronize siglas e datas antes de analisar","Engenharia de variáveis melhora muito o modelo"],
ex:`<pre>SELECT unidade, COUNT(*) AS atrasados
FROM ctes
WHERE data_entrega &gt; data_prevista
GROUP BY unidade
ORDER BY atrasados DESC;</pre>`,
q:{p:"Qual cláusula SQL filtra linhas antes do agrupamento?",o:["ORDER BY","WHERE","GROUP BY","SELECT"],c:1,e:"WHERE filtra as linhas. Para filtrar depois de agrupar usa-se HAVING."}},

"ia-1-0":{r:`No aprendizado supervisionado o modelo aprende com exemplos que já têm a resposta (rótulo). Existem dois tipos de problema. Regressão prevê um número (prazo em dias, valor do frete). Classificação prevê uma categoria (vai atrasar ou não, tipo de ocorrência).

Algoritmos clássicos: regressão linear, regressão logística, árvore de decisão, random forest e gradient boosting (XGBoost, LightGBM). Para dados em tabela, florestas e boosting costumam ganhar. O fluxo no scikit-learn é sempre o mesmo: separar treino e teste, <code>modelo.fit(X_treino, y_treino)</code>, <code>modelo.predict(X_teste)</code> e avaliar.`,
p:["Supervisionado = dados com resposta conhecida","Regressão prevê número; classificação prevê classe","Árvores são fáceis de explicar","Random forest e boosting são fortes em tabelas","Separe sempre treino (70-80%) e teste (20-30%)"],
ex:`Classificação: prever se um CT-e vai atrasar usando rota, peso, dia da semana e unidade de origem. O SAC avisa o cliente antes do atraso acontecer.`,
q:{p:"Prever o valor do frete em reais é um problema de:",o:["Classificação","Regressão","Clusterização","Redução de dimensão"],c:1,e:"A saída é um número contínuo, então é regressão."}},

"ia-1-1":{r:`No aprendizado não supervisionado os dados não têm resposta. O modelo procura estrutura sozinho. A tarefa mais comum é a clusterização: agrupar itens parecidos. O K-means é o algoritmo mais usado; você escolhe o número de grupos (k) e ele separa os dados. O método do cotovelo ajuda a escolher o k.

Outras tarefas: redução de dimensão (PCA), que resume muitas variáveis em poucas, e detecção de anomalias, que encontra registros fora do padrão, como fraudes ou erros de digitação.`,
p:["Sem rótulo, o modelo descobre padrões","K-means agrupa por proximidade","Normalize as variáveis antes do K-means","PCA reduz variáveis mantendo informação","Anomalias: Isolation Forest é uma boa opção"],
ex:`Clusterizar clientes por volume, frequência e ticket médio gera grupos como 'grandes recorrentes', 'pequenos frequentes' e 'esporádicos', e cada grupo recebe uma política comercial.`,
q:{p:"Qual algoritmo é o mais conhecido para clusterização?",o:["Regressão linear","K-means","Árvore de decisão","Regressão logística"],c:1,e:"K-means agrupa dados em k grupos sem precisar de rótulos."}},

"ia-1-2":{r:`Um modelo bom no treino e ruim em dados novos sofre de overfitting: decorou em vez de aprender. O oposto é underfitting: simples demais para capturar o padrão. Validação cruzada (k-fold) testa o modelo em várias divisões dos dados e dá uma nota mais confiável.

Métricas de regressão: MAE (erro médio absoluto) e RMSE. Métricas de classificação: acurácia, precisão (dos que previ como atraso, quantos atrasaram), recall (dos atrasos reais, quantos eu peguei) e F1. Com classes desbalanceadas a acurácia engana: se 95% chega no prazo, um modelo que sempre diz 'no prazo' acerta 95% e é inútil.`,
p:["Overfitting: ótimo no treino, ruim no teste","Validação cruzada dá avaliação mais robusta","Precisão: qualidade dos alertas","Recall: quantos casos reais foram detectados","Matriz de confusão mostra acertos e erros por classe"],
ex:`Modelo de atraso: recall de 40% significa que ele só avisa 4 de cada 10 atrasos reais. Para o SAC, aumentar o recall é mais útil, mesmo com alguns alarmes falsos.`,
q:{p:"Um modelo com 99% no treino e 60% no teste provavelmente tem:",o:["Underfitting","Overfitting","Dados perfeitos","Recall alto"],c:1,e:"A queda grande entre treino e teste indica que o modelo decorou o treino."}},

"ia-1-3":{r:`Redes neurais são camadas de 'neurônios' que multiplicam entradas por pesos, somam e passam por uma função de ativação (ReLU é a mais comum). O treino ajusta os pesos para reduzir o erro, usando backpropagation e gradiente descendente, em várias passagens pelos dados (épocas).

Tipos principais: redes densas (dados em tabela), CNNs (imagens), RNNs e LSTMs (sequências, hoje menos usadas) e Transformers (texto, e cada vez mais imagens e áudio). As bibliotecas mais usadas são PyTorch e TensorFlow/Keras. Para dados em tabela, uma rede neural nem sempre vence o gradient boosting.`,
p:["Neurônio: soma ponderada + ativação","Backpropagation ajusta os pesos","Época = uma passada completa pelos dados","CNN para imagem; Transformer para texto","Precisa de muitos dados e de GPU"],
ex:`Uma CNN treinada com fotos de cargas pode classificar se a amarração está correta, apoiando o checklist da expedição.`,
q:{p:"Qual arquitetura é a base dos grandes modelos de linguagem atuais?",o:["CNN","Transformer","K-means","Árvore de decisão"],c:1,e:"Os LLMs são construídos sobre a arquitetura Transformer."}},

"ia-2-0":{r:`LLMs (Large Language Models) são Transformers treinados com enormes volumes de texto para prever a próxima palavra (token). Daí surgem a capacidade de resumir, traduzir, escrever e raciocinar. Eles têm uma janela de contexto (quanto texto cabem por vez) e podem 'alucinar', inventando fatos com confiança.

Engenharia de prompt é escrever instruções claras: papel, contexto, tarefa, formato de saída e exemplos. O RAG (Retrieval-Augmented Generation) reduz alucinação: antes de responder, o sistema busca trechos relevantes em seus documentos (ITs, PGs, contratos) e entrega ao modelo como contexto.`,
p:["LLM prevê o próximo token","Prompt bom: contexto, tarefa, formato, exemplos","Alucinação: sempre confira fatos críticos","RAG = busca nos seus documentos + geração","Embeddings transformam texto em vetores para busca"],
ex:`Um assistente RAG com todas as ITs e PGs da MIR responde 'qual o procedimento para avaria na descarga?' citando o documento e a revisão.`,
q:{p:"Qual é o principal objetivo do RAG?",o:["Treinar um modelo do zero","Fundamentar respostas em documentos recuperados","Gerar imagens","Reduzir o custo da GPU"],c:1,e:"O RAG busca informação relevante e a usa como base da resposta, reduzindo alucinações."}},

"ia-2-1":{r:`Um agente de IA é um LLM que pode usar ferramentas: consultar APIs, ler arquivos, buscar na web, executar código. Ele recebe um objetivo, decide os passos, chama as ferramentas, observa os resultados e continua até concluir. Protocolos como o MCP padronizam a conexão de agentes a sistemas.

APIs (geralmente REST com JSON) são a porta de entrada dos sistemas. Você envia uma requisição (GET para ler, POST para criar), com autenticação (token), e recebe uma resposta estruturada. Automação com IA combina regras fixas para o que é previsível e o LLM para o que exige interpretação, como ler um e-mail de cliente e abrir uma ocorrência.`,
p:["Agente = LLM + ferramentas + loop de decisão","API REST: GET, POST, PUT, DELETE","Guarde tokens em local seguro, nunca no código","Use regras fixas onde der; IA onde precisar interpretar","Registre logs de tudo que o agente faz"],
ex:`Agente de coletas: lê os e-mails de pedido, extrai remetente, peso e volumes, consulta a disponibilidade na API e prepara o lançamento para conferência humana.`,
q:{p:"O que diferencia um agente de um chatbot simples?",o:["Usa cores diferentes","Executa ações com ferramentas em várias etapas","Responde mais rápido","Não usa LLM"],c:1,e:"O agente planeja e executa ações usando ferramentas até cumprir o objetivo."}},

"ia-2-2":{r:`Visão computacional permite que o sistema 'enxergue'. As tarefas principais são: classificação (o que tem na imagem), detecção de objetos (onde está cada objeto, como o YOLO faz), segmentação (contorno exato) e OCR (ler texto em imagens).

Hoje muitos LLMs são multimodais e entendem imagens diretamente, o que facilita ler notas fiscais, canhotos e etiquetas sem treinar um modelo próprio. Em câmeras, a detecção pode contar veículos na doca, identificar uso de EPI ou ler placas. Atenção à LGPD quando houver pessoas nas imagens.`,
p:["Classificação, detecção, segmentação e OCR","YOLO: detecção rápida em vídeo","LLMs multimodais leem documentos","Qualidade e ângulo da imagem importam","Imagens de pessoas: cuidado com LGPD"],
ex:`OCR em fotos de canhotos assinados confirma automaticamente a baixa da entrega e marca para revisão os que estiverem ilegíveis.`,
q:{p:"Qual tarefa de visão computacional extrai texto de uma imagem?",o:["Segmentação","OCR","Detecção","Clusterização"],c:1,e:"OCR (reconhecimento óptico de caracteres) converte texto em imagem para texto digital."}},

"ia-2-3":{r:`A logística é um dos campos onde a IA dá retorno mais rápido. Previsão de demanda (séries temporais com Prophet, ARIMA ou boosting) ajuda a dimensionar frota e equipe. Roteirização resolve o problema do caixeiro viajante com restrições (janelas de entrega, capacidade), com ferramentas como OR-Tools.

Outras aplicações: previsão de atraso, precificação de frete, detecção de anomalias em custos de combustível, manutenção preditiva de frota e torres de controle que juntam tudo num painel com alertas.`,
p:["Previsão de demanda dimensiona recursos","Roteirização com restrições: OR-Tools","Previsão de atraso: classificação supervisionada","Manutenção preditiva usa dados de telemetria","Torre de controle integra dados e alertas"],
ex:`Prever volume de coletas por unidade para a próxima semana com 3 anos de histórico do SSW permite escalar ajudantes antes do pico.`,
q:{p:"Qual técnica é usada para prever volume futuro com base no histórico?",o:["Séries temporais","OCR","Clusterização","Segmentação"],c:0,e:"Modelos de séries temporais preveem valores futuros a partir da sequência histórica."}},

"ia-3-0":{r:`IA responsável considera viés (o modelo reproduz discriminações dos dados), transparência (explicar decisões), privacidade, segurança e supervisão humana. A LGPD exige base legal para tratar dados pessoais, finalidade definida, minimização e direitos do titular, inclusive revisão de decisões automatizadas.

A ISO/IEC 42001 é a norma de sistema de gestão de IA, com a mesma Estrutura Harmonizada da ISO 9001. Ela pede política de IA, avaliação de riscos e impactos, controles sobre o ciclo de vida dos sistemas e melhoria contínua. Quem já conhece ISO 9001 aprende a 42001 rápido.`,
p:["Viés nos dados vira viés no modelo","LGPD: base legal, finalidade, minimização","Decisão automatizada pode ser revisada pelo titular","ISO/IEC 42001: sistema de gestão de IA","Mantenha humano no circuito em decisões críticas"],
ex:`Um modelo de avaliação de motoristas deve ter critérios explicáveis, dados mínimos necessários e revisão humana antes de qualquer decisão sobre a pessoa.`,
q:{p:"Qual norma trata de sistema de gestão de inteligência artificial?",o:["ISO 27001","ISO/IEC 42001","ISO 9004","ISO 14001"],c:1,e:"A ISO/IEC 42001 define requisitos para um sistema de gestão de IA."}},

"ia-3-1":{r:`O projeto final deve resolver um problema real de ponta a ponta: definir o problema e a métrica de sucesso, coletar e preparar os dados, construir o modelo ou o agente, avaliar, colocar para uso (painel, API ou automação) e medir o resultado.

Documente como um case: contexto, dados, abordagem, resultados em números e próximos passos. Publicar o código no GitHub e um resumo no LinkedIn transforma o trabalho em portfólio.`,
p:["Comece pela métrica de sucesso","Versão simples funcionando antes da sofisticada","Coloque em uso real, mesmo que pequeno","Meça o resultado antes e depois","Documente e publique como portfólio"],
ex:`Projeto: módulo de previsão de atraso na torre de controle. Métrica: recall acima de 70% e alerta ao SAC com 24h de antecedência.`,
q:{p:"Qual deve ser o primeiro passo de um projeto de IA?",o:["Escolher a rede neural","Definir o problema e a métrica de sucesso","Comprar GPU","Publicar no GitHub"],c:1,e:"Sem problema e métrica claros não há como saber se o projeto deu certo."}}
});
