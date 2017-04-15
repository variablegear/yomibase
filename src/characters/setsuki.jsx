export const setsuki = {
    summary: {
        name: 'Setsuki',
        fullName: 'Setsuki Hiruki',
        title: 'Ninja Student',
        hitPoints: 70,
        maxCombo: 6,
        attackDefaults: {
            speedOffset: 0.2,
        },
        throwDefaults: {
            speedOffset: 0.2,
            damage: 6,
            comboPts: 3,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: ['7*', 8, 9, 'T*', 'K'],
        blocks: [6, '7*', 8, 9],
        dodges: [2, 3, 4, 5, 'T*'],
        innateAbilities: [
            {
                name: 'Speed of the Fox',
                text: 'If you start the draw phase with 1 or 0 cards in hand, draw 5 cards (instead of 1) and you may hit back with a full combo if you dodge an attack or Joker this turn.',
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Bag of Tricks',
                timing: 'End of Turn',
                text: 'At the end of turn, if this is the only card in your hand, you may put up to three non-Joker cards from your discard pile on top of your deck in any order, then discard this card.',
            },
            {
                rank: 'T',
                name: 'Smoke Bomb',
                timing: 'Reaction',
                text: 'Discard two cards (and this card) to counter an ability. (Prevent and undo the ability and the opponent discards the card if played from hand. You can\'t counter Aces, Jokers or character cards.)',
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>K++>6>AA', maxDamage: 36, goodCombo: '2>3>4>5>tK', goodDamage: 20},
        {rank: 3, maxCombo: '3>K++>6>AA', maxDamage: 37, goodCombo: '3>4>5>6>tK', goodDamage: 24},
        {rank: 4, maxCombo: '4>K++>6>AA', maxDamage: 38, goodCombo: '4>5>6>K+>5', goodDamage: 28},
        {rank: 5, maxCombo: '5>K++>6>AA', maxDamage: 39, goodCombo: '5>6>K+>4>5', goodDamage: 28},
        {rank: 6, maxCombo: '6>K++>6>AA', maxDamage: 40, goodCombo: '6>K+>3>4>5', goodDamage: 26},
        {
            speed: 1.4, rank: 'J', name: 'Esper Dash', damage: 5, chip: 1,
            comboPts: 1, comboType: 'Linker', maxCombo: 'J>K++>6>AA', maxDamage: 39,
            goodCombo: 'J>K+>3>4>5', goodDamage: 25,
        },
        {
            speed: 0.0, rank: 'Q', name: 'Ninpo Flash', pumpWith: '+X+X', damage: 1,
            pump: 4, chip: 1, comboPts: 3, comboType: 'Starter', maxCombo: 'Q++>6>AA', maxDamage: 32,
            goodCombo: 'Q++>K+>6', goodDamage: 23,
        },
        {
            speed: 2.2, rank: 'K', name: 'Starlight Kick', pumpWith: '+X+X', damage: 5,
            pump: 3, chip: 2, comboPts: 2, comboType: 'Linker', maxCombo: 'K++>K++>AA', maxDamage: 39,
            goodCombo: 'K++>4>5>6>J', goodDamage: 31,
        },
        {
            speed: 1.0, rank: 'A', pumpWith: '+A+A+A', name: 'Shuriken Hail', damage: 9,
            pump: 9, chip: 3, comboType: 'Can\'t Combo',
            maxCombo: 'A+++', maxDamage: 36, goodCombo: 'A++', goodDamage: '27',
        },
        {
            speed: 1.2, rank: 'AA', name: 'Surprise Gift', damage: 17, chip: 3,
            comboPts: 2, comboType: 'Ender',
        },
    ],
    throws: [
        {rank: 7, maxCombo: 't7>6>AA', maxDamage: 29, goodCombo: 't7>4>5>6', goodDamage: 21},
        {rank: 8, maxCombo: 't8>6>AA', maxDamage: 29, goodCombo: 't8>4>5>6', goodDamage: 21},
        {rank: 9, maxCombo: 't9>6>AA', maxDamage: 29, goodCombo: 't9>4>5>6', goodDamage: 21},
        {rank: 'T', maxCombo: 'tT>6>AA', maxDamage: 29, goodCombo: 'tT>4>5>6', goodDamage: 21},
        {
            speed: 9.2, rank: 'K', name: 'Starlight Tumbler', damage: 6, comboPts: 2,
            comboType: 'Ender', kd: true,
        },
    ],
};
