<h1>🌐 Portfólio de Ciência de Dados</h1>

<p>
  <a href="https://polloncarlos.github.io" target="_blank">
    <img src="https://img.shields.io/badge/View-Portfolio-black?style=for-the-badge"/>
  </a>
  <a href="https://github.com/polloncarlos" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge"/>
  </a>
  <a href="https://www.linkedin.com/in/carlos-pollon/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge"/>
  </a>
  <img src="https://img.shields.io/badge/Data%20Science-Portfolio-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge"/>
</p>

<hr/>

<h2>📌 Sobre</h2>

<p>
Este repositório hospeda meu <strong>portfólio profissional em Ciência de Dados</strong>,
desenvolvido para apresentar projetos práticos, com foco em
<strong>análise de dados</strong>, <strong>machine learning</strong> e
<strong>soluções orientadas a negócio</strong>.
</p>

<p>
Os projetos aqui apresentados seguem uma abordagem estruturada,
priorizando clareza, impacto prático e aplicação em cenários reais,
incluindo desde exploração de dados até modelos em produção.
</p>

<hr/>

<h2>📂 Projetos em Destaque</h2>

<ul>
  <li>
    <strong>Churn Prediction + A/B Testing + Uplift Modeling</strong><br/>
    Pipeline de retenção de clientes em 3 camadas para um e-commerce, combinando um modelo de churn, um teste A/B com rigor estatístico e um modelo de uplift (T-Learner) para identificar quem realmente responde à campanha de retenção.
    O objetivo foi ir além de prever quem sai: descobrir se a campanha reduz esse risco e, principalmente, para quem vale a pena gastar o orçamento de retenção.
    Como resultado, o modelo de uplift identificou um grupo de clientes (Sleeping Dogs) para quem o cupom aumentava a chance de cancelamento, permitindo excluí-lo automaticamente da campanha — entregando ROC-AUC de 0,776 no churn e ROI de 51,7% por ciclo, validado por teste A/B (p=0,008).<br/>
    🔗 <a href="https://github.com/polloncarlos/churn_ab_uplift_pipeline" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>

  <li>
    <strong>Customer Value Segmentation</strong><br/>
    Projeto end-to-end de segmentação de clientes de e-commerce utilizando técnicas de clusterização não supervisionada para identificar perfis de consumo, clientes VIP e grupos com risco de churn.
    O objetivo foi transformar dados transacionais em inteligência de negócio, permitindo estratégias segmentadas de retenção, fidelização e crescimento.
    Como resultado, foi desenvolvido um pipeline produtivo em cloud utilizando AWS (S3, EC2 e RDS PostgreSQL), com persistência dos clusters e dashboard executivo interativo via Metabase.<br/>
    🔗 <a href="https://github.com/polloncarlos/customer_value_segmentation" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>


  <li>
    <strong>Rossmann Sales Forecast</strong><br/>
    Projeto end-to-end de previsão de vendas diárias para mais de mil lojas da rede Rossmann, usando metodologia CRISP-DM para conectar análise de dados com solução de negócio.
    O objetivo foi automatizar previsões de faturamento para apoiar decisões financeiras e operacionais, substituindo estimativas manuais por um modelo confiável.
    Como resultado, foi entregue um modelo de Machine Learning em produção, acessível via API, com desempenho superior ao baseline e pronto para uso real no suporte à tomada de decisão.<br/>
    🔗 <a href="https://github.com/polloncarlos/rossmann_sales_predict" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>

  <li>
    <strong>Health Insurance Cross-Sell Ranking</strong><br/>
    Projeto de classificação supervisionada para prever a probabilidade de clientes de uma seguradora adquirirem um novo produto de seguro veícular.
    O objetivo foi apoiar estratégias de cross-sell, priorizando leads com maior propensão de conversão e otimizando esforços comerciais.
    Como resultado, foi desenvolvido um modelo de Machine Learning com validação por cross-validation e métricas de ranking (Gain e Lift), pronto para integração em pipelines de marketing e vendas.<br/>
    🔗 <a href="https://github.com/polloncarlos/health_insurance_ranking" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>

  <li>
    <strong>Análise Global de Restaurantes (Zomato)</strong><br/>
    Dashboard interativo criado com Streamlit para explorar dados globais de restaurantes da plataforma Zomato, permitindo análises por localização, país, cidade e tipo de culinária.
    O objetivo foi transformar um conjunto de dados público em uma ferramenta visual acessível que facilite a identificação de padrões e oportunidades estratégicas.
    Como entrega final, o painel oferece visualizações navegáveis que apoiam decisões sobre mercados prioritários e preferências regionais.<br/>
    🔗 <a href="https://github.com/polloncarlos/zomato_restaurant" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>
  <li>
    <strong>Painel Gerencial de Marketplace Delivery</strong><br/>
    Dashboard interativo desenvolvido para analisar vendas, categorias de produtos e desempenho geral de uma empresa alimentar fictícia.
    O objetivo foi fornecer uma visão clara dos principais indicadores de negócio e facilitar decisões gerenciais com base em dados reais de receita e sazonalidade.
    Como resultado, a ferramenta oferece gráficos e filtros que destacam tendências de vendas, desempenho por categoria e padrões temporais relevantes.<br/>
    🔗 <a href="https://github.com/polloncarlos/curry_company" target="_blank">
      Ver repositório
    </a>
  </li>
  <br/>
<li>
    <strong>Ensaio de Machine Learning</strong><br/>
    Projeto exploratório de Machine Learning focado em comparar desempenho e limitações de algoritmos de classificação, regressão e clusterização.
    O objetivo foi experimentar abordagens distintas, aplicar técnicas de preparação e avaliação de dados e entender trade-offs como underfitting e overfitting.
    Como resultado, foram gerados insights sobre performance, métrica e comportamento dos modelos, formando uma base sólida para projetos mais avançados.<br/>
    🔗 <a href="https://github.com/polloncarlos/ensaio_machine_learning" target="_blank">
      Ver repositório
    </a>
  </li>
</ul>

<hr/>

<h2>🛠️ Tecnologias & Ferramentas</h2>

<ul>
  <li>Python</li>
  <li>Pandas, NumPy</li>
  <li>Scikit-learn, XGBoost</li>
  <li>A/B Testing & Uplift Modeling (Causal Inference)</li>
  <li>Optuna</li>
  <li>SQL & PostgreSQL</li>
  <li>AWS (S3, EC2, RDS)</li>
  <li>SQLAlchemy</li>
  <li>Metabase</li>
  <li>Streamlit</li>
  <li>Plotly, Matplotlib, Seaborn</li>
  <li>Flask, Google Sheets API</li>
  <li>Git & GitHub</li>
</ul>

<hr/>

<p>
📬 <strong>Contato:</strong><br/>
<a href="https://www.linkedin.com/in/carlos-pollon/" target="_blank">LinkedIn</a> |
<a href="https://github.com/polloncarlos" target="_blank">GitHub</a>
</p>
