window.AULAS=window.AULAS||{};
Object.assign(window.AULAS,{
"qual-0-0":{r:`Qualidade é o grau em que um conjunto de características atende aos requisitos, ou seja, entregar o que o cliente espera, do jeito combinado, sempre. A família ISO 9000 organiza esse pensamento: a ISO 9000 traz os fundamentos e o vocabulário, a ISO 9001 traz os requisitos certificáveis e a ISO 9004 orienta o sucesso sustentado.

A base de tudo são os 7 princípios da gestão da qualidade. Eles não são requisitos auditáveis, mas explicam o porquê de cada requisito da ISO 9001. Quem entende os princípios consegue interpretar qualquer cláusula sem decorar.`,
p:["Foco no cliente: atender e superar expectativas","Liderança: direção clara e ambiente para engajar","Engajamento das pessoas: competência e autonomia em todos os níveis","Abordagem de processo: atividades gerenciadas como processos interligados","Melhoria: foco contínuo em melhorar","Tomada de decisão baseada em evidência: dados antes de opinião","Gestão de relacionamento: fornecedores e parceiros também fazem a qualidade"],
ex:`Na transportadora, 'decisão baseada em evidência' é olhar o índice de entregas no prazo por unidade antes de decidir onde reforçar a frota, em vez de seguir a reclamação mais barulhenta da semana.`,
q:{p:"Qual norma da família ISO 9000 contém os requisitos usados na certificação?",o:["ISO 9000","ISO 9001","ISO 9004","ISO 19011"],c:1,e:"A ISO 9001 é a única da família com requisitos certificáveis. A 9000 traz vocabulário e a 9004 é orientativa."}},

"qual-0-1":{r:`A ISO 9001 segue a Estrutura Harmonizada (HS) da ISO, a mesma da 14001 e da 45001. As cláusulas 1 a 3 são introdutórias (escopo, referências, termos). Os requisitos de verdade estão nas cláusulas 4 a 10, que seguem o ciclo PDCA: 4 Contexto, 5 Liderança, 6 Planejamento, 7 Apoio, 8 Operação, 9 Avaliação de desempenho e 10 Melhoria.

A revisão de 2026 mantém essa estrutura. Pelo que foi divulgado nos rascunhos, os pontos de atenção são a cultura da qualidade e o comportamento ético da liderança, a separação mais clara entre riscos e oportunidades, a consideração das mudanças climáticas no contexto (que veio na emenda de 2024) e anexos explicativos mais completos. Confira sempre no texto publicado da norma antes de ajustar documentos.`,
p:["Cláusulas 4 a 10 contêm os requisitos auditáveis","4 e 5 = Plan (contexto e liderança); 6 = planejamento","7 e 8 = Do (apoio e operação)","9 = Check (monitoramento, auditoria interna, análise crítica)","10 = Act (não conformidade, ação corretiva, melhoria)"],
ex:`Ao revisar uma IT da MIR para a 2026, pergunte: a liderança demonstra a cultura da qualidade? O processo trata riscos e oportunidades separadamente? Isso vira evidência para o auditor.`,
q:{p:"Em qual cláusula da ISO 9001 estão a auditoria interna e a análise crítica pela direção?",o:["Cláusula 7","Cláusula 8","Cláusula 9","Cláusula 10"],c:2,e:"A cláusula 9 (Avaliação de desempenho) reúne monitoramento, satisfação do cliente, auditoria interna e análise crítica."}},

"qual-0-2":{r:`Processo é um conjunto de atividades que transforma entradas em saídas, agregando valor. Mapear processos mostra quem faz o quê, em que ordem, com quais entradas e saídas, e onde estão os gargalos.

O BPMN (Business Process Model and Notation) é a notação padrão para desenhar processos. Os elementos básicos são poucos: eventos (círculos de início e fim), atividades (retângulos arredondados), gateways (losangos de decisão), fluxos (setas) e raias (pools e lanes, que mostram o responsável). Comece sempre pelo processo 'como é' (AS-IS) antes de desenhar o 'como deveria ser' (TO-BE).`,
p:["Entrada → atividades → saída, com dono e indicador","Evento de início e fim sempre presentes","Gateway exclusivo (X) = apenas um caminho segue","Raias deixam claro o responsável de cada etapa","Ferramentas: Bizagi Modeler e draw.io são gratuitas"],
ex:`Processo de coleta: Início (cliente solicita) → SAC registra no SSW → Gateway 'Tem veículo?' → Sim: programa coleta / Não: negocia nova data → Motorista coleta → Fim (mercadoria na unidade). Cada raia é um setor.`,
q:{p:"No BPMN, qual elemento representa uma decisão com caminhos alternativos?",o:["Evento","Gateway","Raia","Artefato"],c:1,e:"O gateway (losango) divide ou junta fluxos conforme uma condição."}},

"qual-0-3":{r:`A cláusula 4 pede que a organização entenda seu contexto antes de montar o sistema. Isso significa identificar questões externas (mercado, legislação, concorrência, clima, economia) e internas (cultura, recursos, conhecimento, sistemas) que afetam a capacidade de entregar resultados.

Depois, identifique as partes interessadas pertinentes (clientes, colaboradores, motoristas agregados, fornecedores, órgãos reguladores, comunidade) e quais requisitos de cada uma são relevantes. Ferramentas comuns são a análise SWOT para o contexto e uma matriz de partes interessadas com necessidades, expectativas e forma de monitorar.`,
p:["Questões internas e externas: use SWOT ou PESTEL","Partes interessadas: só as pertinentes ao SGQ","Registre requisitos e como serão monitorados","Revise na análise crítica pela direção","Escopo do SGQ (4.3) nasce dessa análise"],
ex:`Questão externa para a MIR: aumento do preço do diesel. Parte interessada: motoristas agregados, que esperam pagamento em dia e programação previsível de cargas.`,
q:{p:"Qual ferramenta é mais usada para analisar questões internas e externas?",o:["FMEA","SWOT","Pareto","5S"],c:1,e:"A SWOT cruza forças e fraquezas (internas) com oportunidades e ameaças (externas)."}},

"qual-1-0":{r:`As 7 ferramentas da qualidade foram popularizadas por Kaoru Ishikawa e resolvem a maioria dos problemas do dia a dia com dados simples. São elas: folha de verificação, estratificação, diagrama de Pareto, diagrama de causa e efeito (Ishikawa), histograma, diagrama de dispersão e gráfico de controle.

O segredo é a sequência: a folha de verificação coleta os dados, a estratificação separa por categoria, o Pareto mostra os poucos itens que causam a maior parte do problema (regra 80/20) e o Ishikawa investiga as causas do item principal usando os 6M: método, máquina, mão de obra, material, medida e meio ambiente.`,
p:["Folha de verificação: coleta organizada","Pareto: priorizar os poucos vitais","Ishikawa (6M): levantar causas possíveis","Histograma: ver a distribuição dos dados","Dispersão: relação entre duas variáveis"],
ex:`Pareto das avarias do mês: 62% vêm de amarração mal feita. O Ishikawa desse item aponta Método (sem padrão de amarração) e Mão de obra (conferentes novos sem treino).`,
q:{p:"Qual ferramenta aplica a regra 80/20 para priorizar problemas?",o:["Histograma","Pareto","Dispersão","Folha de verificação"],c:1,e:"O Pareto ordena as categorias por frequência e mostra quais concentram a maior parte das ocorrências."}},

"qual-1-1":{r:`O PDCA é o ciclo da melhoria: Plan (planejar), Do (executar), Check (verificar) e Act (agir, padronizar ou corrigir). O MASP (Método de Análise e Solução de Problemas) é o PDCA detalhado em 8 etapas: identificar o problema, observar, analisar causas, plano de ação, ação, verificação, padronização e conclusão.

O 5W2H transforma a análise em plano de ação concreto: What (o quê), Why (por quê), Where (onde), When (quando), Who (quem), How (como) e How much (quanto custa). Uma ação sem responsável e prazo não é ação, é intenção.`,
p:["PDCA gira continuamente, cada volta sobe o padrão","MASP: 8 etapas, ótimo para ação corretiva","Use os 5 porquês para chegar à causa raiz","5W2H: toda ação com dono, prazo e custo","Padronize (IT, treinamento) para não voltar o problema"],
ex:`What: criar padrão de amarração. Why: 62% das avarias. Where: expedição RSL. When: até 30/12. Who: líder da expedição. How: IT com fotos e treino de 1h. How much: R$ 0 (interno).`,
q:{p:"Em qual etapa do PDCA se compara o resultado com a meta?",o:["Plan","Do","Check","Act"],c:2,e:"No Check se verifica se o executado atingiu o planejado. No Act se padroniza ou corrige."}},

"qual-1-2":{r:`Risco é o efeito da incerteza sobre os objetivos. A ISO 31000 dá as diretrizes: identificar, analisar, avaliar e tratar riscos, sempre com comunicação e monitoramento. Na prática, se monta uma matriz de probabilidade x impacto e se prioriza o que fica no vermelho.

O FMEA (Análise de Modos e Efeitos de Falha) é uma ferramenta preventiva. Para cada etapa do processo, liste como pode falhar, o efeito, a causa e os controles atuais. Dê notas de 1 a 10 para Severidade (S), Ocorrência (O) e Detecção (D). O RPN = S x O x D prioriza onde agir primeiro.`,
p:["Risco = probabilidade x impacto","Tratamentos: evitar, reduzir, transferir, aceitar","FMEA é preventivo, age antes da falha","RPN = Severidade x Ocorrência x Detecção","Reavalie o RPN depois das ações"],
ex:`Etapa: emissão do CT-e. Falha: peso digitado errado. Efeito: frete cobrado a menor. S=7, O=5, D=6 → RPN 210. Ação: validação automática contra a nota fiscal. Novo D=2 → RPN 70.`,
q:{p:"Como se calcula o RPN no FMEA?",o:["S + O + D","S x O x D","(S x O) / D","S x O"],c:1,e:"RPN (Risk Priority Number) é o produto de Severidade, Ocorrência e Detecção."}},

"qual-1-3":{r:`O Lean nasceu no Sistema Toyota e busca eliminar desperdícios, tudo que o cliente não pagaria. Os 8 desperdícios são: superprodução, espera, transporte desnecessário, excesso de processamento, estoque, movimentação, defeitos e talento não aproveitado.

O Six Sigma reduz a variação dos processos usando estatística e o roteiro DMAIC: Define (definir), Measure (medir), Analyze (analisar), Improve (melhorar) e Control (controlar). O Green Belt conduz projetos na sua área com as ferramentas básicas. Juntos, Lean Six Sigma ataca desperdício e variação ao mesmo tempo.`,
p:["Valor é definido pelo cliente","8 desperdícios (sigla TIMWOODS em inglês)","DMAIC é o roteiro dos projetos Six Sigma","Seis sigma = 3,4 defeitos por milhão","Ferramentas: VSM, 5S, kanban, SMED"],
ex:`Desperdício de espera: caminhão parado 2h na doca aguardando conferência. Um projeto DMAIC mede o tempo de doca por turno e testa agendamento de chegadas.`,
q:{p:"Qual é a sequência correta do DMAIC?",o:["Definir, Medir, Analisar, Melhorar, Controlar","Desenhar, Medir, Agir, Implantar, Checar","Definir, Mapear, Ajustar, Implantar, Controlar","Diagnosticar, Medir, Analisar, Inovar, Concluir"],c:0,e:"DMAIC = Define, Measure, Analyze, Improve, Control."}},

"qual-1-4":{r:`Estatística é a linguagem da qualidade. Medidas de tendência central (média, mediana, moda) dizem onde os dados se concentram. Medidas de dispersão (amplitude, desvio padrão) dizem o quanto eles variam. Um processo com boa média mas grande variação ainda gera clientes insatisfeitos.

O CEP (Controle Estatístico de Processo) usa gráficos de controle com linha média e limites superior e inferior (normalmente média ± 3 desvios). Pontos dentro dos limites e sem padrão indicam causas comuns (variação natural). Pontos fora ou sequências estranhas indicam causas especiais, que devem ser investigadas.`,
p:["Média é sensível a extremos; mediana não","Desvio padrão mede a variação","Limites de controle = média ± 3σ","Causa especial: investigar e eliminar","7 pontos seguidos do mesmo lado da média = sinal"],
ex:`Tempo médio de descarga: 42 min, σ = 6 min. Limites: 24 a 60 min. Uma descarga de 75 min é causa especial (ex.: empilhadeira quebrada) e precisa de registro.`,
q:{p:"No CEP, um ponto fora dos limites de controle indica:",o:["Causa comum","Causa especial","Processo capaz","Erro do gráfico"],c:1,e:"Pontos fora dos limites sinalizam causa especial, algo diferente do comportamento normal do processo."}},

"qual-2-0":{r:`Indicador (KPI) é a forma de medir se um objetivo está sendo alcançado. Um bom indicador tem nome, fórmula, meta, frequência, fonte do dado e responsável. A ISO 9001 pede objetivos da qualidade mensuráveis e monitorados (6.2 e 9.1).

O Balanced Scorecard (BSC), de Kaplan e Norton, equilibra os indicadores em 4 perspectivas: financeira, clientes, processos internos e aprendizado e crescimento. O mapa estratégico liga essas perspectivas em relação de causa e efeito: pessoas capacitadas melhoram processos, que satisfazem clientes, que geram resultado financeiro.`,
p:["Indicador sem meta não orienta decisão","Use metas SMART","Misture indicadores de resultado e de tendência","BSC: financeiro, cliente, processos, aprendizado","Poucos indicadores bem acompanhados valem mais"],
ex:`Cliente: % entregas no prazo (meta 95%). Processos: % CT-e emitidos sem erro (meta 99%). Aprendizado: horas de treinamento por colaborador. Financeiro: margem por rota.`,
q:{p:"Quais são as 4 perspectivas do Balanced Scorecard?",o:["Financeira, clientes, processos internos, aprendizado e crescimento","Qualidade, custo, prazo, segurança","Pessoas, máquinas, métodos, materiais","Estratégica, tática, operacional, individual"],c:0,e:"O BSC equilibra financeiro, clientes, processos internos e aprendizado e crescimento."}},

"qual-2-1":{r:`Custos da qualidade mostram em reais quanto a falta de qualidade custa. O modelo PAF divide em quatro grupos. Prevenção: treinamento, planejamento, manutenção preventiva. Avaliação: inspeção, conferência, auditorias. Falhas internas: retrabalho, refugo, correções antes de chegar ao cliente. Falhas externas: indenizações, devoluções, reentregas, perda de cliente.

A lógica é que investir em prevenção reduz as falhas, que são as mais caras. Falha externa ainda carrega custos ocultos, como dano à imagem, difíceis de medir mas reais.`,
p:["Prevenção e avaliação = custo de conformidade","Falhas internas e externas = custo da não conformidade","Falha externa é a mais cara","Mostre os números para a direção em reais","Meta: deslocar gasto de falhas para prevenção"],
ex:`Indenizações de avaria em um ano: R$ 85 mil (falha externa). Treinar conferentes e padronizar amarração custa R$ 6 mil (prevenção). O argumento financeiro convence a direção.`,
q:{p:"Uma reentrega por erro de endereço é qual tipo de custo da qualidade?",o:["Prevenção","Avaliação","Falha interna","Falha externa"],c:3,e:"O erro chegou ao cliente, então é falha externa."}},

"qual-2-2":{r:`Serviço é intangível, produzido e consumido ao mesmo tempo, e depende muito das pessoas. O modelo SERVQUAL mede a qualidade percebida em 5 dimensões: confiabilidade, presteza (responsividade), segurança, empatia e tangíveis. A satisfação é a diferença entre o que o cliente esperava e o que percebeu.

Na logística, a qualidade aparece em indicadores como OTIF (On Time In Full: no prazo e completo), índice de avarias, tempo de resposta do SAC, acuracidade de documentos e rastreabilidade. Para uma transportadora, cumprir o prazo prometido costuma ser a dimensão mais importante.`,
p:["5 dimensões: confiabilidade, presteza, segurança, empatia, tangíveis","OTIF une prazo e integridade","Rastreio em tempo real reduz ansiedade do cliente","SAC é ponto crítico de percepção","Pesquisa de satisfação atende 9.1.2 da ISO 9001"],
ex:`OTIF da filial no mês: 1.000 entregas, 940 no prazo, 925 no prazo e sem avaria → OTIF = 92,5%.`,
q:{p:"O que mede o indicador OTIF?",o:["Custo por entrega","Entregas no prazo e completas","Ocupação do veículo","Tempo de carregamento"],c:1,e:"On Time In Full: entregue no prazo e completo, sem falta ou avaria."}},

"qual-2-3":{r:`A auditoria interna (ISO 9001, 9.2) verifica se o SGQ atende aos requisitos da norma e aos da própria organização, e se está implementado de forma eficaz. A ISO 19011 dá as diretrizes para auditar qualquer sistema de gestão.

Etapas principais: programa anual de auditorias baseado em riscos, plano de cada auditoria, reunião de abertura, coleta de evidências (entrevistas, registros, observação), constatações, reunião de encerramento e relatório. O auditor deve ser imparcial e não auditar o próprio trabalho. Esse tema é aprofundado no curso de auditor.`,
p:["Auditoria = processo sistemático, independente e documentado","Evidência objetiva sustenta toda constatação","Auditor não audita o próprio trabalho","Programa considera riscos e resultados anteriores","Constatações: conformidade, NC, oportunidade de melhoria"],
ex:`Na auditoria da expedição, o auditor pede os checklists da semana, conversa com o conferente e observa uma carga. Achou 3 checklists sem assinatura: evidência objetiva de NC.`,
q:{p:"Qual norma fornece diretrizes para auditorias de sistemas de gestão?",o:["ISO 9004","ISO 19011","ISO 31000","ISO 17025"],c:1,e:"A ISO 19011 orienta auditorias de qualquer sistema de gestão."}},

"qual-3-0":{r:`O TCC de uma especialização normalmente é um artigo científico ou um estudo de caso. A melhor escolha é um problema real do seu trabalho: você tem acesso aos dados, aplica o conteúdo e gera resultado para a empresa.

Estrutura sugerida: introdução (problema, objetivo, justificativa), referencial teórico (as ferramentas usadas), metodologia (como coletou e analisou), resultados e discussão (dados antes e depois), conclusão e referências no padrão ABNT. Delimite bem: um processo, um indicador, um período.`,
p:["Escolha um problema real e mensurável","Objetivo começa com verbo: analisar, propor, reduzir","Metodologia: estudo de caso com MASP ou DMAIC","Mostre antes e depois em números","Peça autorização da empresa para usar dados"],
ex:`Tema sugerido: 'Aplicação do MASP para redução de avarias na expedição de uma transportadora de carga fracionada'. Indicador: avarias por mil volumes.`,
q:{p:"Qual é a principal vantagem de usar um problema do seu trabalho no TCC?",o:["É mais curto","Acesso a dados reais e resultado aplicável","Dispensa referencial teórico","Não precisa de orientador"],c:1,e:"Dados reais tornam o estudo consistente e o resultado vira ganho para a empresa."}},

"qual-3-1":{r:`Para concluir a especialização normalmente é preciso ter aprovação em todas as disciplinas, cumprir a carga horária mínima (360 horas para lato sensu) e, quando exigido, entregar e apresentar o TCC. Confira no regulamento da instituição os prazos de entrega e a nota mínima.

Depois, solicite o certificado e guarde o histórico. Atualize o currículo, o LinkedIn e, na empresa, a planilha de competências (RG 22), pois a formação comprova competência para funções do SGQ conforme a cláusula 7.2 da ISO 9001.`,
p:["Lato sensu: mínimo de 360 horas","Confira o reconhecimento da instituição no MEC","Peça certificado e histórico","Atualize currículo e LinkedIn","Registre na matriz de competências da empresa"],
ex:`Ao receber o certificado, envie cópia ao RH e atualize sua linha no controle de competências como evidência de formação.`,
q:{p:"Qual a carga horária mínima de uma pós lato sensu no Brasil?",o:["180 horas","240 horas","360 horas","420 horas"],c:2,e:"A especialização lato sensu exige no mínimo 360 horas."}}
});
