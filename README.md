# Quake log parser

## Task 1 - Construa um parser para o arquivo de log games.log e exponha uma API de consulta.

O arquivo games.log é gerado pelo servidor de quake 3 arena. Ele registra todas as informações dos jogos, quando um jogo começa, quando termina, quem matou quem, quem morreu pq caiu no vazio, quem morreu machucado, entre outros.

O parser deve ser capaz de ler o arquivo, agrupar os dados de cada jogo, e em cada jogo deve coletar as informações de morte.

### Exemplo

      21:42 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  
  O player "Isgalamido" morreu pois estava ferido e caiu de uma altura que o matou.

      2:22 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN
  
  O player "Isgalamido" matou o player Dono da Bola usando a arma Railgun.
  
Para cada jogo o parser deve gerar algo como:

    game_1: {
        total_kills: 45;
        players: ["Dono da bola", "Isgalamido", "Zeh"]
        kills: {
          "Dono da bola": 5,
          "Isgalamido": 18,
          "Zeh": 20
        }
      }



----------------------------------------------------------------

Documentação referente ao projeto de  desenvolvimento do parser para o game Quake Log Parser...


1 - Desenvolvimento baseado na criação de objetos representando o game, os jogadores e o parser que é um conjunto de games. Em termos gerais temos:


1 parser que pode conter 1 a N Games;
N games podem conter N jogadores;
1 jogador pode estar contido em N games;



2  - O codigo contem foi desenvolvido com uma arquitetura baseada em camadas, Controller, Services, Router, Shared, Http e middlewares


API contem uma documentação Swagger em atualização
