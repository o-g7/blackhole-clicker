function espera(tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),tempo)
    })
}  

let sequencias = {
    rpg : 'r p g',
    zelda : 'z e l d a',
    poze : 'p o z e',
    dica: 'd i c a',
    X:'x'
}

$('#loading').css('display','none')
cheet(sequencias.rpg)
cheet(sequencias.zelda)
cheet(sequencias.poze)
cheet(sequencias.dica)
cheet(sequencias.X)

cheet.done(async function (seq){
    if(seq === sequencias.rpg){
        $('#loading').css('display','block')
        $('#zimas-image').attr('src','imgs/akino.png')
        $('#zimas-name').html('Akino')
        $('#zimas-text').html('Prazer! Me chamo Akino e sou seguidor do Fogo Eterno do Deus Jabiroca. Como Paladino tenho o objetivo de exterminar todo o mal a qualquer custo. Sobre minha aparência, sou um Tiefling azul e por isso tenho esses belos chifres e asas que não aparecem na imagem. Está interessado em ouvir as palavras de Jabiroca?')
        $('#guima-image').attr('src','imgs/dandelion.png')
        $('#guima-name').html('Jaskier')
        $('#guima-text').html('Olá meu caro, sou Sr.Jaskier , um changeling(adquiro a aparência de quem eu quiser) bardo errante que viajo por ai encantando pessoas com meu charme e minhas artes com espadas. Como vivi no mundo do crime, domino as artes do roubo e espadas. Agradeço pela leitura gracinha, me chame depois se quiser, beijos a todos e todas. ASS: ❤️Jaskier❤️.')
        $('#tzim-image').attr('src','imgs/tzimrpg.png')
        $('#tzim-name').html('Immeral')
        $('#tzim-text').html('Olá amigo! Sou Immeral, o melhor guardião de todas essas terras. Passei a maior parte da minha vida no mar, navegando sem rumo, fugindo de meu passado. Eventualmente, fui obrigado a voltar à terra firme, e então, deixei de ser o marinheiro mais legal de todos pra ser o aventureiro mais legal de todos!')
        $('#vitor-image').attr('src','imgs/kuro.png')
        $('#vitor-name').html('Kuro')
        $('#vitor-text').html('Sou Kuro, a Sombra do Oriente, vim da tribo dos Black Wings, os fenômenos da natureza encarnados em pássaros negros. Represento o anoitecer do mundo e sou um mestre em luta no estilo oriental, e domino principalmente com katanas. Luto para defender minha tribo e a honra dela e não exito <del> em acabar com quem tente atacá-los.</del>')
        $('#coutinho-image').attr('src','imgs/irish.png')
        $('#coutinho-name').html('Irish Warhammer')
        $('#coutinho-text').html('Dotado de um olhar muito atraente (um olho atrai o outro), Irish Warhammer - também conhecido como Mestre Anão - habita a hoje pacata RockField e, após seus grandes feitos no campo de batalha que resultaram na liberação de todo o Reino de Utan, hoje prefere se enclausurar em sua taverna onde produz suas receitas secretas do bom hidromel.')
        await espera(2000) 
        $('#loading').css('display','none')
    }
    else if(seq === sequencias.zelda){
        let audio = new Audio('audio/zeldinha.mp3')
        $('#guima-name').html('Link')
        $('#guima-text').html('HEY!HEEEEEAT!HEYYA!')
        $('#guima-image').attr('src','imgs/majora.png')
        $('#zimas-name').html('Link')
        $('#zimas-text').html('Boas ações são o que transforma uma criança em homem.')
        $('#zimas-image').attr('src','imgs/minish.png')
        $('#tzim-name').html('Link')
        $('#tzim-text').html('Huh...')
        $('#tzim-image').attr('src','imgs/ocarina.png')
        $('#vitor-name').html('Link')
        $('#vitor-text').html('É perigoso ir sozinho, pegue isso aqui!')
        $('#vitor-image').attr('src','imgs/awakening.png')
        $('#coutinho-image').attr('src','imgs/cout.jpg')
        $('#coutinho-name').html('Coutinho')
        $('#coutinho-text').html('Esse aqui em cima é o Grande Coutinho, nosso mestre. As sugestões e ensinamentos dele colaborou no nosso avanço no conhecimento da arte de programar em web.')
        audio.addEventListener('canplaythrough',() => {
            audio.play()
        })
    }
    else if(seq === sequencias.poze){
        location.href = "https://www.youtube.com/watch?v=Dr07OyheOjc&list=PLaA1VDT4XMieAw5i0gJnESyVwZBWdz7Ba"
    }
    else if(seq === sequencias.dica){
        $('#zimas-image').attr('src','imgs/enzimas.png')
        $('#zimas-name').html('Enzo')
        $('#zimas-text').html('Digite a sigla de "Jogo de Interpretação de Mesa".')
        $('#guima-name').html('Gabriel Guimarães')
        $('#guima-text').html('Digite o nome da franquia de aventura mais famosa da Nintendo.')
        $('#guima-image').attr('src','imgs/guima.png')
        $('#tzim-name').html('Matheus')
        $('#tzim-text').html('Digite o nome pitbull do funk.')
        $('#tzim-image').attr('src','imgs/teuzim.png')
        $('#vitor-name').html('Vitor')
        $('#vitor-text').html('Complete o nome do alien mais forte do Ben 10: Alien...')
        $('#vitor-image').attr('src','imgs/vitor.png')
        $('#coutinho-image').attr('src','imgs/cout.jpg')
        $('#coutinho-name').html('Coutinho')
        $('#coutinho-text').html('Esse aqui em cima é o Grande Coutinho, nosso mestre. As sugestões e ensinamentos dele colaborou no nosso avanço no conhecimento da arte de programar em web.')
    }
    else if(seq === sequencias.X){
        location.href = "https://youtu.be/JgJSHGVWflc"
    }
})