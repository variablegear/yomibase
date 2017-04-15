export const grave = {
    summary: {
        name: 'Grave',
        fullName: 'Grave Stormborne',
        title: 'Wind Warrior',
        hitPoints: 90,
        maxCombo: 4,
        attackDefaults: {
            speedOffset: 0.6,
        },
        throwDefaults: {
            speedOffset: 0.6,
            damage: 7,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Knowing the Opponent',
                text: 'When you block an attack, you may reveal a card from your hand. If you combat-reveal that card next turn but don\'t win combat with it, draw a card. If you do win combat with it, search your deck or discard pile for a Queen. (Shuffle your deck if you searched for it).',
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Martial Mastery',
                timing: 'Draw Phase',
                text: 'Draw 2 cards, then discard a card, then the opponent reveals his hand.',
            },
            {
                rank: 'T',
                name: 'Mental Toughness',
                timing: 'Reaction',
                text: 'Discard a face card (and this card) to counter an ability. (Prevent and undo the ability and the opponent discards the card if played from hand. You can\'t counter Aces, Jokers or character cards).',
            },
            {
                rank: 'J',
                name: 'Lightning Trap',
                timing: 'During Combat',
                text: 'When you deal block damage with Lightning Cloud, return this card to your hand and the opponent doesn\'t draw a card from blocking.',
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>AAA', maxDamage: '47', goodCombo: '2>3>4>J', goodDamage: 17},
        {rank: 3, maxCombo: '3>AAA', maxDamage: '48', goodCombo: '3>4>5>J', goodDamage: 20},
        {rank: 4, maxCombo: '4>AAA', maxDamage: '49', goodCombo: '4>5>6>J', goodDamage: 23},
        {rank: 5, maxCombo: '5>AAA', maxDamage: '50', goodCombo: '5>K+>J', goodDamage: 27},
        {rank: 6, maxCombo: '6>AAA', maxDamage: '51', goodCombo: '6>K+>J', goodDamage: 28},
        {
            speed: 2.4, rank: 'J', name: 'Lightning Cloud', damage: 8, chip: 3,
            comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 0.0, rank: 'Q', name: 'Dragonheart', damage: 10, chip: 2,
            comboPts: 3, comboType: 'Ender',
        },
        {
            speed: 2.2, rank: 'K', pumpWith: '+K', name: 'Whirlwind', damage: 7, pump: 7, chip: 1,
            comboPts: 2, comboType: 'Linker', maxCombo: 'K+>6>J', maxDamage: 29, goodCombo: 'K+>A', goodDamage: 26,
        },
        {
            speed: 1.0, rank: 'A', name: 'True-Spark Arc', damage: 12, chip: 3,
            comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 0.4, rank: 'AAA', name: 'True Power of Storms', damage: 45, chip: 1,
            comboPts: 3, comboType: 'Ender',
        },
    ],
    throws: [
        {rank: 7, maxCombo: 't7>K+', maxDamage: 21, goodCombo: 't7>4>5', goodDamage: 16},
        {rank: 8, maxCombo: 't8>K+', maxDamage: 21, goodCombo: 't8>4>5', goodDamage: 16},
        {rank: 9, maxCombo: 't9>K+', maxDamage: 21, goodCombo: 't9>4>5', goodDamage: 16},
        {rank: 'T', maxCombo: 'tT>K+', maxDamage: 21, goodCombo: 'tT>4>5', goodDamage: 16},
    ],
};
