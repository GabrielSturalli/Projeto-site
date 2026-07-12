// ============================================================
// POSTS DO BLOG
// ============================================================
// Para adicionar um post novo, copie um bloco { ... } abaixo e
// preencha os campos. O post mais RECENTE deve ficar PRIMEIRO.
//
//   slug     -> identificador único na URL (sem espaços/acentos).
//               Ex.: "copom-julho-2026" vira blog.html#post/copom-julho-2026
//   titulo   -> título do post.
//   data     -> data de publicação, formato DD/MM/AAAA.
//   tags     -> lista de temas (aparecem no filtro do topo do blog).
//   resumo   -> 1-2 frases exibidas no card da lista.
//   imagem   -> caminho de uma imagem na pasta do site
//               (ex.: "blog-img/minha-foto.jpg") ou null para usar
//               a capa automática no estilo do site.
//   conteudo -> o texto do post em HTML. Use <p>, <h2>, <ul>, <li>,
//               <strong>, <em>, <blockquote>. Aspas do HTML devem
//               ficar dentro da crase (`) sem quebrar o template.
// ============================================================

window.__BLOG_POSTS__ = [
  {
    slug: "como-leio-a-curva-antes-do-copom",
    titulo: "Como eu leio a curva DI x Pré antes de uma decisão do Copom",
    data: "12/07/2026",
    tags: ["Juros", "Copom", "Curva"],
    resumo: "Nível, inclinação e curvatura: o roteiro que eu sigo para extrair da curva o que o mercado já precificou — antes de qualquer comunicado.",
    imagem: "blog-img/capa-curva.svg",
    conteudo: `
      <p>A curva DI x Pré é, na prática, uma pesquisa de opinião contínua sobre o futuro da Selic — só que respondida com dinheiro de verdade. Antes de qualquer reunião do Copom, é nela que eu vou primeiro. O que segue é o roteiro que eu uso, em três camadas.</p>

      <h2>1. Nível: o que já está no preço?</h2>
      <p>A primeira pergunta não é "o que o Copom vai fazer?", e sim <strong>"o que o mercado já acha que ele vai fazer?"</strong>. A ponta curta da curva (contratos de 1 a 3 meses) embute a expectativa para a próxima decisão. Se a taxa do DI curto está, digamos, 25 bps acima da Selic efetiva, o mercado está precificando alta de 25 bps com convicção quase total.</p>
      <p>A consequência prática: quando a decisão sai igual ao precificado, <em>a curva quase não se mexe</em> — o evento já tinha acontecido nos preços. A surpresa (e o movimento) vem do desvio entre o comunicado e essa expectativa embutida.</p>

      <h2>2. Inclinação: o mercado acredita na convergência?</h2>
      <p>A diferença entre a ponta longa e a ponta curta conta uma história sobre credibilidade. Curva muito <strong>inclinada para cima</strong> (steepening) costuma indicar que o mercado exige prêmio para carregar risco longo — dúvida fiscal, inflação implícita alta, incerteza. Curva <strong>invertida</strong> (curto acima do longo) tende a aparecer quando o aperto monetário é percebido como temporário: o mercado espera cortes à frente.</p>
      <p>Antes do Copom, eu comparo a inclinação de hoje com a de um mês atrás. O movimento recente importa mais do que o nível absoluto: uma curva desinvertendo rapidamente diz mais sobre mudança de humor do que qualquer relatório.</p>

      <h2>3. Curvatura: onde está a "barriga"?</h2>
      <p>A parte intermediária da curva (2 a 5 anos) é onde mora a discussão mais interessante: o ritmo do ciclo. Barriga alta em relação às pontas sugere que o mercado vê juro alto por <em>mais tempo</em>, mesmo que o destino final seja o mesmo. Barriga baixa sugere convergência rápida.</p>

      <blockquote>No simulador de cenário do meu dashboard dá para aplicar choques de nível, inclinação e curvatura sobre a curva real e ver o efeito em cada prazo — é exatamente esta decomposição, interativa.</blockquote>

      <h2>O checklist de véspera</h2>
      <ul>
        <li><strong>Ponta curta vs. Selic:</strong> quanto de movimento está precificado para amanhã?</li>
        <li><strong>Inclinação vs. 30 dias atrás:</strong> o prêmio de prazo está abrindo ou fechando?</li>
        <li><strong>Barriga (2-5 anos):</strong> o mercado mudou a percepção de <em>ritmo</em>, ou só de destino?</li>
        <li><strong>Inflação implícita:</strong> o juro real embutido fecha a conta com a meta?</li>
      </ul>
      <p>Nenhuma dessas leituras prevê o futuro — a curva erra, e erra com frequência. Mas ela define o <strong>ponto de partida</strong>: sem saber o que já está no preço, é impossível interpretar a reação do mercado a qualquer decisão.</p>
    `
  },
  {
    slug: "fatores-no-radar",
    titulo: "Fatores no radar: o que estou acompanhando neste semestre",
    data: "12/07/2026",
    tags: ["Watchlist", "Inflação", "Fiscal"],
    resumo: "Um formato recorrente do blog: a lista curta de variáveis que, na minha leitura, vão definir o rumo dos preços de ativos brasileiros nos próximos meses.",
    imagem: null,
    conteudo: `
      <p>Este é o primeiro post de um formato que pretendo manter recorrente: uma <strong>watchlist comentada</strong> — poucos fatores, escolhidos a dedo, com o racional de por que cada um importa e qual sinal eu espero extrair deles. A ideia não é prever, é <em>organizar a atenção</em>.</p>

      <h2>1. Composição do IPCA, não só a manchete</h2>
      <p>O número cheio do IPCA diz pouco sozinho. O que eu olho: a média dos <strong>núcleos</strong> (que filtram itens voláteis), a inflação de <strong>serviços</strong> (mais inercial, mais sensível ao mercado de trabalho) e a <strong>difusão</strong> (percentual de itens subindo). Desinflação com difusão alta e serviços resistentes é desinflação frágil.</p>

      <h2>2. A trajetória fiscal como pano de fundo dos juros longos</h2>
      <p>A ponta longa da curva DI raramente responde só à política monetária. Resultado primário, trajetória da dívida/PIB e a percepção sobre o arcabouço fiscal funcionam como um "piso" para o prêmio de risco. Meu sinal de atenção: quando o juro longo sobe <em>sem</em> piora nas expectativas de inflação — isso costuma ser prêmio fiscal, não medo de Copom.</p>

      <h2>3. Câmbio e o canal de repasse</h2>
      <p>O real desvalorizado pressiona preços de bens comercializáveis com defasagem de alguns meses. O que importa não é o nível pontual do dólar, mas a <strong>persistência</strong> do movimento: choques rápidos e revertidos repassam pouco; deslocamentos sustentados repassam mais. Acompanho junto: preços de commodities em real.</p>

      <h2>4. Mercado de trabalho e o motor de serviços</h2>
      <p>Desemprego baixo e massa salarial crescendo sustentam consumo de serviços — exatamente o grupo mais duro de desinflacionar. A pergunta que este fator responde: <em>a demanda vai deixar a inflação de serviços ceder?</em></p>

      <h2>Como este formato evolui</h2>
      <p>A cada edição, a lista muda pouco de propósito — a utilidade está em comparar: o que saiu do radar, o que entrou, e o que mudou de sinal. Se um fator fica três edições sem gerar sinal relevante, ele sai da lista.</p>
    `
  }
];
