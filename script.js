document.addEventListener('DOMContentLoaded', function () {
    // Dados dos animes
    const animeData = [
        { 
            title: 'Attack on Titan',
            image: 'img/attack_on_titan.jpg',
            description: 'Em um mundo onde a humanidade reside dentro de enormes cidades muradas para se proteger dos Titãs, criaturas humanoides gigantes, a história segue Eren Yeager e seus amigos que se juntam ao exército para lutar contra os Titãs.',
            studio: 'Wit Studio',
            year: 2013,
            link: 'https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin'
        },
        { 
            title: 'My Hero Academia',
            image: 'img/my_hero_academia.jpg',
            description: 'Em um mundo onde quase todos têm algum tipo de superpoder, ou "Quirk", a história segue Izuku Midoriya, um garoto sem Quirk que sonha em se tornar um herói.',
            studio: 'Bones',
            year: 2016,
            link: 'https://pt.wikipedia.org/wiki/Boku_no_Hero_Academia'
        },
        { 
            title: 'One Punch Man',
            image: 'img/one_punch_man.jpg',
            description: 'Saitama, um herói que pode derrotar qualquer oponente com um único soco, procura por um desafio digno para aliviar seu tédio.',
            studio: 'Madhouse',
            year: 2015,
            link: 'https://pt.wikipedia.org/wiki/One_Punch-Man'
        },
        { 
            title: 'Naruto',
            image: 'img/naruto.jpg',
            description: 'Naruto Uzumaki, um jovem ninja com uma raposa demônio selada dentro dele, busca reconhecimento e sonha em se tornar o ninja mais forte, o Hokage.',
            studio: 'Pierrot',
            year: 2002,
            link: 'https://pt.wikipedia.org/wiki/Naruto'
        },
        { 
            title: 'Death Note',
            image: 'img/death_note.jpg',
            description: 'Light Yagami, um estudante do ensino médio, descobre um caderno misterioso que permite que ele mate qualquer pessoa cujo nome ele escreva nele, levando a um jogo de inteligência com um detetive genial chamado L.',
            studio: 'Madhouse',
            year: 2006,
            link: 'https://pt.wikipedia.org/wiki/Death_Note'
        },
        { 
            title: 'Demon Slayer',
            image: 'img/demon_slayer.jpg',
            description: 'Tanjiro Kamado, um jovem, se torna um matador de demônios depois que sua família é massacrada por demônios, e sua irmã Nezuko é transformada em um deles.',
            studio: 'ufotable',
            year: 2019,
            link: 'https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba'
        },
        { 
            title: 'Dragon Ball Z',
            image: 'img/dragon_ball.jpg',
            description: 'Siga as aventuras de Goku enquanto ele treina artes marciais, explora o mundo em busca das Esferas do Dragão e enfrenta poderosos inimigos para proteger a Terra.',
            studio: 'Toei Animation',
            year: 1986,
            link: 'https://pt.wikipedia.org/wiki/Dragon_Ball_Z'
        },
        { 
            title: 'Fullmetal Alchemist: Brotherhood',
            image: 'img/fullmetal_alchemist.jpg',
            description: 'Os irmãos Edward e Alphonse Elric usam a alquimia em sua busca para recuperar seus corpos após uma tentativa de ressurreição que deu errado.',
            studio: 'Bones',
            year: 2009,
            link: 'https://pt.wikipedia.org/wiki/Fullmetal_Alchemist'
        },
        { 
            title: 'Hunter x Hunter',
            image: 'img/hunter_x_hunter.jpg',
            description: 'Gon Freecss decide se tornar um caçador para encontrar seu pai desaparecido e descobre um mundo repleto de desafios, criaturas misteriosas e outros aspirantes a caçadores.',
            studio: 'Madhouse',
            year: 2011,
            link: 'https://pt.wikipedia.org/wiki/Fullmetal_Alchemist'
        },
        { 
            title: 'Steins;Gate',
            image: 'img/steins_gate.jpg',
            description: 'Rintarou Okabe, um cientista excêntrico, descobre uma maneira de enviar mensagens para o passado, desencadeando uma série de eventos e consequências imprevistas.',
            studio: 'White Fox',
            year: 2011,
            link: 'https://pt.wikipedia.org/wiki/Steins;Gate'
        },
        { 
            title: 'Pokémon',
            image: 'img/pokemon.jpg',
            description: 'Acompanhe as aventuras de Ash Ketchum e seu companheiro Pikachu enquanto viajam pelo mundo, capturam Pokémon e competem em torneios para se tornarem Mestres Pokémon.',
            studio: 'OLM',
            year: 1997,
            link: 'https://pt.wikipedia.org/wiki/Pokémon' // Adicione um link real para mais informações
        },
        { 
            title: 'Nanatsu no Taizai',
            image: 'img/nanatsu_no_taizai.jpg',
            description: 'Os Sete Pecados Capitais, um grupo de cavaleiros poderosos, são acusados de traição e buscam limpar seus nomes enquanto enfrentam ameaças que colocam o reino em perigo.',
            studio: 'A-1 Pictures',
            year: 2014,
            link: 'https://pt.wikipedia.org/wiki/Nanatsu_no_Taizai' // Adicione um link real para mais informações
        },
        { 
            title: 'Jujutsu Kaisen',
            image: 'img/jujutsu_kaisen.jpg',
            description: 'Yuji Itadori, um estudante do ensino médio, se envolve em eventos sobrenaturais ao encontrar um objeto amaldiçoado. Ele é arrastado para o mundo perigoso do Jujutsu, uma forma de feitiçaria.',
            studio: 'MAPPA',
            year: 2020,
            link: 'https://pt.wikipedia.org/wiki/Jujutsu_Kaisen' // Adicione um link real para mais informações
        },
        { 
            title: 'Record of Ragnarok',
            image: 'img/record_of_ragnarok.jpg',
            description: 'Deuses decidem eliminar a humanidade, mas a valquíria Brunhilde propõe uma última chance: 13 lutas entre deuses e humanos, com a sobrevivência da humanidade em jogo.',
            studio: 'Graphinica',
            year: 2021,
            link: 'https://pt.wikipedia.org/wiki/Record_of_Ragnarok'
        },
    ];

    const animeCatalog = document.getElementById('animeCatalog');

    // Adiciona cada anime ao catálogo
    animeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'animeCard';
        animeCard.style.backgroundImage = `url(${anime.image})`;

        const playIcon = document.createElement('div');
        playIcon.className = 'playIcon';
        playIcon.innerHTML = '&#9654;'; // Ícone de play

        const animeOverlay = document.createElement('div');
        animeOverlay.className = 'animeOverlay';

        const animeTitle = document.createElement('h3');
        animeTitle.textContent = anime.title;

        const animeDescription = document.createElement('p');
        animeDescription.textContent = anime.description;

        const animeDetails = document.createElement('div');
        animeDetails.className = 'animeDetails';

        const studioLabel = document.createElement('span');
        studioLabel.textContent = 'Estúdio: ';
        const studioValue = document.createElement('span');
        studioValue.textContent = anime.studio;

        const yearLabel = document.createElement('span');
        yearLabel.textContent = 'Ano: ';
        const yearValue = document.createElement('span');
        yearValue.textContent = anime.year;

        const moreInfoLink = document.createElement('a');
        moreInfoLink.href = anime.link;
        moreInfoLink.target = '_blank';
        moreInfoLink.textContent = 'Mais Informações';

        animeDetails.appendChild(studioLabel);
        animeDetails.appendChild(studioValue);
        animeDetails.appendChild(document.createElement('br'));
        animeDetails.appendChild(yearLabel);
        animeDetails.appendChild(yearValue);

        animeOverlay.appendChild(animeTitle);
        animeOverlay.appendChild(animeDescription);
        animeOverlay.appendChild(animeDetails);
        animeOverlay.appendChild(moreInfoLink);

        animeCard.appendChild(playIcon);
        animeCard.appendChild(animeOverlay);

        animeCatalog.appendChild(animeCard);
    });
});
