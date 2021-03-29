fetch('https://backend-blackhole-clicker.herokuapp.com/leaderboard') //Faz um request GET para o leaderboard.
    .then(r => r.json())
    .then(r => {
        r.resultados.sort((a, b) => (a.tempo > b.tempo) ? 1 : -1 ) //Organiza de acordo com a propriedade tempo do objeto que foi resultado do GET

        let conteudoLeaderboard = r.resultados.map(item => `${item.nome} - ${item.tempo} minutos`) //Organiza o objeto

        let leaderboardEl = document.querySelector('#leaderboard')  

        for (i in r.resultados){
            let posicaoEl = document.createElement('p') //Cria um elemento p

            posicaoEl.classList.add('text-center') //Adiciona uma classe no elemento p

            posicaoEl.innerHTML = conteudoLeaderboard[i] // Adiciona o conteudo na pagina

            leaderboardEl.appendChild(posicaoEl) //Adiciona o elemento p na pagina
        }
    })