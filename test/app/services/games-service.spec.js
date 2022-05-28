const gamesService = require('../../../src/app/services/games-service')
const {parseLogs} = require('../../../src/app/utils/util-parser/parse-logs-lines-util-parser')
const gamesResponse = require('../../mock/games-mock.json')
const games = require('../../mock/games-log-mock')
const parser = {
    "games": new Map(),
    "idGame": 0
}
describe('loadGameService', () => {
    describe('loadGameService', () => {
        it('should load loadGamesService ', async () => {
            await parseLogs(parser, games)
            const stu = await gamesService.loadGamesService()
            expect(stu).toStrictEqual(gamesResponse)
        })
    })
})