  function navigateToSection(sectionNumber) {
      // Esconder todas as seções
      var sections = document.getElementsByClassName("section");
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
      }
      
      // Mostrar a seção selecionada
      var selectedSection = document.getElementById("section" + sectionNumber);
      if (selectedSection) {
        selectedSection.style.display = "block";
      }
    }
    // Animação s1
    window.addEventListener('load', function() {
      var section1 = document.getElementById('section1');
      section1.classList.add('show');
    });
    

    //noticias
  // Função para buscar as notícias do dia atual
  function buscarNoticiasDoDia() {
    // Fazer uma requisição para a API de notícias
    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=')
      .then(response => response.json())
      .then(data => {
        // Obter as notícias do resultado da API
        const noticias = data.articles;

        // Obter a lista de notícias do HTML
        const listaNoticias = document.getElementById('listaNoticias');

        // Limpar a lista de notícias existente
        listaNoticias.innerHTML = '';

        // Iterar sobre as notícias e adicionar na lista
        for (let i = 0; i < noticias.length; i++) {
          const noticia = noticias[i];
          const itemLista = document.createElement('li');
          itemLista.textContent = noticia.title;
          listaNoticias.appendChild(itemLista);
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro ao buscar as notícias:', error);
      });
  }

  // Chamar a função para buscar as notícias do dia atual
  buscarNoticiasDoDia();

  //not semana
  function buscarNoticiasDaSemana() {
    // Calcular a data de uma semana atrás
    const umaSemanaAtras = new Date();
    umaSemanaAtras.setDate(umaSemanaAtras.getDate() - 7);

    // Formatar as datas para o formato YYYY-MM-DD
    const dataInicial = umaSemanaAtras.toISOString().split('T')[0];
    const dataFinal = new Date().toISOString().split('T')[0];

    // Fazer uma requisição para a API de notícias da semana
    // Substitua "SUA_CHAVE_DE_API" pela sua chave de API válida
    fetch(`https://newsapi.org/v2/everything?language=pt&q=brasil&from=${dataInicial}&to=${dataFinal}&apiKey=`)
      .then(response => response.json())
      .then(data => {
        // Obter as notícias do resultado da API
        const noticiasSemana = data.articles;

        // Obter a lista de notícias da semana do HTML
        const listaNoticiasSemana = document.getElementById('listaNoticiasSemana');

        // Limpar a lista de notícias existente
        listaNoticiasSemana.innerHTML = '';

        // Iterar sobre as notícias e adicionar na lista
        for (let i = 0; i < noticiasSemana.length; i++) {
          const noticia = noticiasSemana[i];
          const itemLista = document.createElement('li');
          itemLista.textContent = noticia.title;
          listaNoticiasSemana.appendChild(itemLista);
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro ao buscar as notícias da semana:', error);
      });
  }

  // Chamar a função para buscar as notícias da semana
  buscarNoticiasDaSemana();


  //scroll animate 
  // Função para scroll suave até a seção
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


  //em alta
  // Função para buscar as notícias em alta
  // Função para buscar as principais notícias do mundo
  function buscarPrincipaisNoticias() {
    // Substitua "SUA_CHAVE_DE_API" pela sua chave de API válida
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
      .then(response => response.json())
      .then(data => {
        // Obter as notícias do resultado da API
        const noticias = data.articles.slice(0, 5); // Obter apenas as 5 primeiras notícias

        // Obter o elemento HTML onde as notícias serão exibidas
        const listaNoticias = document.getElementById('listaAlta');

        // Limpar a lista de notícias existente
        listaNoticias.innerHTML = '';

        // Iterar sobre as notícias e adicionar na lista
        noticias.forEach(noticia => {
          const itemLista = document.createElement('li');
          itemLista.textContent = noticia.title;
          listaNoticias.appendChild(itemLista);

          noticias.forEach(noticia => {
            const itemLista = document.createElement('li');
          
          
          });
        });
      })
      .catch(error => {
        console.log('Ocorreu um erro ao buscar as notícias:', error);
      });
  }

  // Chamar a função para buscar as principais notícias
  buscarPrincipaisNoticias();


