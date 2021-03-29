fetch('https://backend-blackhole-clicker.herokuapp.com/leaderboard')
    .then(r => r.json())
    .then(r => {
        r.resultados.sort((a, b) => (a.tempo < b.tempo) ? 1 : (a.tempo === b.tempo) ? ((a.nome > b.nome) ? 1 : -1) : -1 )

        let conteudoLeaderboard = r.resultados.map(item => `${item.nome} - ${item.tempo} minutos`)

        let leaderboardEl = document.querySelector('#leaderboard')  

        for (i in r.resultados){
            let posicaoEl = document.createElement('p')

            posicaoEl.classList.add('text-center')

            posicaoEl.innerHTML = conteudoLeaderboard[i]

            leaderboardEl.appendChild(posicaoEl)
        }
    })