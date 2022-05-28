const gameController = require('../../../src/app/controllers/games-controller')
const gamesService = require('../../../src/app/services/games-service')

jest.mock('../../../src/app/services/games-service')

describe('loadGameController', () => {
    describe('loadGameController', () => {
        it('should load loadGamesService ', async () => {
            const Lista = [{}]
            const spyLoadGamesService = jest
                .spyOn(gamesService, 'loadGamesService')
                .mockImplementation(async () => Lista)
            const stu = await gameController.loadGameController()
            const result = {
                statusCode: 200,
                body: Lista,
            }
            expect(spyLoadGamesService).toHaveBeenCalled()
            expect(stu).toStrictEqual(result)
        })
        it('loadGamesService is not called sucessfull', async () => {
            const err = {
                message: 'error loading games'
            }
            const spyLoadGamesService = jest
                .spyOn(gamesService, 'loadGamesService')
                .mockImplementation(async () => {
                    throw err
                })
            const stu = await gameController.loadGameController()
            expect(spyLoadGamesService).toHaveBeenCalled()
            expect(stu).toStrictEqual({
                statusCode: 500,
                body: err.message
            })
        })
    })
})