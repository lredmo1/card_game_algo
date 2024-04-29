const {war, handleWar, addCardsWon} = require("./war_algo");

const playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
const playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

const playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
const playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

const playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


describe('war algo', () => {

	describe('base case', () => {

		test("Returns 1 when Player 1 wins the game", () => {
			expect(war(playerOneCards1,playerTwoCards1)).toBe(1);
		});
		
		test("Returns 2 when Player 2 wins the game", () => {
			expect(war(playerOneCards2,playerTwoCards2)).toBe(2);
		});
		
		test("Returns 0 when the result is a tie", () => {
			expect(war(playerOneCards3,playerTwoCards3)).toBe(0);
		});

	})

	describe('handleWar', () => {

		test("Return the correctly ordered cards when at least one player has only one card remaining", () => {
			expect(addCardsWon(2, 1, [1, 2],[1, 10])).toStrictEqual([[], [10, 2, 1, 1]]);
		});
		
		test("Return the correctly ordered cards when at least one player has only two cards remaining", () => {
			expect(addCardsWon(1, 2, [1, 2, 10],[1, 3, 4])).toStrictEqual([[2, 10, 3, 4, 1, 1], []]);
		});
		
		test("Return the correctly ordered cards when at least one player has only three cards remaining", () => {
			expect(addCardsWon(2, 3, [1, 2, 3, 4],[1, 5, 6, 7])).toStrictEqual([[], [5, 6, 7, 2, 3, 4, 1, 1]]);
		});
		
		test("Return the correctly ordered cards when at least one player has only four cards remaining", () => {
			expect(addCardsWon(1, 4, [1, 6, 7, 8, 9],[1, 2, 3, 4, 5 ])).toStrictEqual([[6, 7, 8, 9, 2, 3, 4, 5, 1, 1], []]);
		});

	})

	describe('addCardsWon', () => {

		test("Returns 1 if Player 1 wins a war", () => {
			expect(handleWar([1, 2, 10],[1, 3, 4], 2)).toBe(1);
		});
		
		test("Returns 2 if Player 2 wins a war", () => {
			expect(handleWar([1, 2, 3, 4],[1, 5, 6, 7], 4)).toBe(2);
		});
		
		test("Returns 0 if if the out come of a war is a tie", () => {
			expect(handleWar([1, 2],[1, 2], 1)).toBe(0);
		});

	})

})