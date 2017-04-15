export const geiger = {
    summary: {
        name: 'Geiger',
        fullName: 'Max Geiger',
        title: 'Precise Watchmaker',
        hitPoints: 90,
        maxCombo: 4,
        attackDefaults: {
            speedOffset: 0.6,
        },
        throwDefaults: {
            speedOffset: 0.8,
            damage: 8,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 5, 6, 7, 'J', 'Q', 'K', 'A'],
        throws: [4, 7, 8, 9, 'T'],
        blocks: [5, 6, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Time Stop',
                text: 'If your opponent takes block damage from a Time Spiral, your opponent can\'t activate innate abilities from blocking, and you may throw him. (Play a throw card from your hand and continue your combo if you want. The opponent doesn\'t draw a card from blocking if you throw him.)',
            },
        ],
        cardAbilities: [
            {
                rank: 4,
                name: 'Temporal Distortion',
                timing: 'Draw Phase',
                text: 'Fetch a Jack or Queen from your discard pile. Ongoing. Your Time Spirals are zero combo point Linkers that do +1 damage each and are immune to Rewind Time Jokers. Discard this card when you get hit by an attack or throw.',
            },
            {
                rank: 8,
                name: 'Research and Development',
                timing: 'Draw Phase',
                text: 'Look at the top X cards of your deck, put one in your hand, then put the rest back on top of your deck in any order. X is the number of Time Spiral cards in your discard pile.',
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>AA', maxDamage: 22, goodCombo: '2>3>4>5', goodDamage: 14},
        {rank: 3, maxCombo: '3>AA', maxDamage: 23, goodCombo: '3>4>K', goodDamage: 17},
        {rank: 5, maxCombo: '5>6>7>J', maxDamage: 26, goodCombo: '5>6>K', goodDamage: 21},
        {rank: 6, maxCombo: '6>AA', maxDamage: 26, goodCombo: '6>7>K', goodDamage: 23},
        {rank: 7, maxCombo: '7>AA', maxDamage: 27, goodCombo: '7>Q>J', goodDamage: 21},
        {
            speed: 2.4, rank: 'J', name: 'Fast Time Spiral',
            damage: 8, chip: 2, comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 3.4, rank: 'Q', name: 'Slow Time Spiral',
            damage: 6, chip: 2, comboPts: 1, comboType: 'Linker',
            maxCombo: 'Q>AA', maxDamage: 26, goodCombo: 'Q>Q>K', goodDamage: 22,
        },
        {
            speed: 0.2, rank: 'K', name: 'Flash Gear',
            damage: 10, chip: 2, comboPts: 2, comboType: 'Ender', kd: true,
        },
        {
            speed: 2.0, rank: 'AA', name: 'Time Spiral Hurricane',
            damage: 20, chip: 3, comboPts: 3, comboType: 'Ender',
        },
        {
            speed: 0.0, rank: 'AA', name: 'Cycloid Revolution', pumpWith: '+A+A',
            damage: 20, pump: 10, chip: 3, comboType: 'Can\'t Combo',
            maxCombo: 'AA++', maxDamage: 40, goodCombo: 'AA+', goodDamage: 30,
        },
    ],
    throws: [
        {
            speed: 8.8, rank: 4, name: 'Suplex of Science',
            damage: 9, comboPts: 2, comboType: 'Starter', kd: true,
            maxCombo: 't4>Q>J', maxDamage: 23, goodCombo: 't4>K', goodDamage: 19,
        },
        {rank: 7, maxCombo: 't7>Q>J', maxDamage: 22, goodCombo: 't7>K', goodDamage: 18},
        {rank: 8, maxCombo: 't8>Q>J', maxDamage: 22, goodCombo: 't8>K', goodDamage: 18},
        {rank: 9, maxCombo: 't9>Q>J', maxDamage: 22, goodCombo: 't9>K', goodDamage: 18},
        {rank: 'T', maxCombo: 'tT>Q>J', maxDamage: 22, goodCombo: 'tT>K', goodDamage: 18},
    ],
};
