let sequencias = {
    rpg : 'r p g'
}

cheet(sequencias.rpg)

cheet.done(function (seq){
    if(seq === sequencias.rpg){
        $('#zimas-image').attr('src','imgs/akino.png')
        $('#zimas-name').html('Akino')
        $('#zimas-text').html('Prazer! Me chamo Akino e sou seguidor do Fogo Eterno do Deus Jabiroca. Como Paladino tenho o objetivo de exterminar todo o mal a qualquer custo. Sobre minha aparência, sou um Tiefling azul e por isso tenho esses belos chifres e asas que não aparecem na imagem. Está interessado em ouvir as palavras de Jabiroca?')
        $('#guima-image').attr('src','imgs/dandelion.png')
        $('#guima-name').html('Dandelion')
        $('#guima-text').html('Olá meu caro, sou Sr.Dandelion, um humano bardo errante que viajo por ai encantando pessoas com meu charme e minhas artes com espadas. Como vivi no mundo do crime, domino as artes do roubo e espadas. Agradeço pela leitura gracinha, me chame depois se quiser, beijos a todos e todas. ASS: ❤️Dandelion❤️.')
        $('#tzim-image').attr('src','imgs/tzimrpg.png')
        $('#tzim-name').html('Immeral')
        $('#tzim-text').html('Immeral')
        $('#vitor-image').attr('src','imgs/kuro.png')
        $('#vitor-name').html('Kuro')
        $('#vitor-text').html('Sou Kuro, a Sombra do Oriente, vim da tribo dos Black Wings, os fenômenos da natureza encarnados em pássaros negros. Represento o anoitecer do mundo e sou um mestre em luta no estilo oriental, e domino principalmente com katanas. Luto para defender minha tribo e a honra dela e não exito <del> em acabar com quem tente atacá-los.</del>')
    }
})