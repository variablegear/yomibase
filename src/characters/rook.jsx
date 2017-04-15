export const rook = {
    summary: {
        name: 'Rook',
        fullName: 'Garus Rook',
        title: 'Stone Golem',
        hitPoints: 100,
        maxCombo: 3,
        attackDefaults: {
            speedOffset: 0.8,
        },
        throwDefaults: {
            speedOffset: 0.0,
            damage: 10,
            comboType: 'Can\'t Combo',
            kd: true,
        },
        attacks: [4, 5, 6, 7, 8, 'T', 'J', 'Q', 'A'],
        throws: [2, 3, 6, 7, 9, 'T', 'Q', 'K', 'A'],
        blocks: [2, 3, 4, 5, 8, 9],
        dodges: [],
        innateAbilities: [
            {
                name: 'Rock Armor',
                text: 'If your normal attack is hit by the opponent\'s faster normal attack or special attack, the opponent finishes his combo, then if you were not knocked down, you may discard two cards of the same suit as your attack. If you do, your attack is not interrupted and you may finish your combo.',
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 3,
                name: 'Entangling Vines',
                timing: 'During Combat',
                text: 'This block avoids block damage, knocks down attackers, and deals 5 damage to them. When it does, next turn your attacks and throws are 3 speed faster, to a minimum of speed 1.0. (This doesn\'t return this card to your hand or draw from blocking.)',
            },
            {
                rank: 5,
                name: 'Stone Wall',
                timing: 'During Combat',
                text: 'This block reflects an attack\'s damage back to the attacker. (This doesn\'t return this card to your hand or draw from blocking.)',
            },
            {
                rank: 'K',
                name: 'Windmill Crusher',
                timing: 'During Combat',
                text: 'This throw beats normal attacks with speed 5.0 or faster, but you still take damage from the opponent\'s normal attack.',
            },
        ],
    },
    attacks: [
        {rank: 4, maxCombo: '4>Q+', maxDamage: 18, goodCombo: '4>tQ', goodDamage: 14},
        {rank: 5, maxCombo: '5>Q+', maxDamage: 19, goodCombo: '5>6>7', goodDamage: 18},
        {rank: 6, maxCombo: '6>7>8', maxDamage: 21, goodCombo: '6>tQ', goodDamage: 16},
        {rank: 7, maxCombo: '7>Q+', maxDamage: 21, goodCombo: '7>tQ', goodDamage: 17},
        {rank: 8, maxCombo: '8>Q+', maxDamage: 22, goodCombo: '8>tQ', goodDamage: 18},
        {rank: 'T', maxCombo: 'T>Q+', maxDamage: 24, goodCombo: 'T>tQ', goodDamage: 20},
        {
            speed: 2.2, rank: 'J', name: 'Thunderclap',
            damage: 4, chip: 2, comboPts: 1, comboType: 'Linker',
            maxCombo: 'J>7>8', maxDamage: 19, goodCombo: 'J>T', goodDamage: '14',
        },
        {
            speed: 2.6, rank: 'Q', name: 'Hammerfist', pumpWith: '+X',
            damage: 9, pump: 5, chip: 1, comboPts: 2, comboType: 'Ender',
            maxCombo: 'Q+', maxDamage: 14,
        },
        {
            speed: 0.8, rank: 'AA', name: 'Wall of Vines',
            damage: 20, chip: 3, comboType: 'Can\'t Combo',
        },
    ],
    throws: [
        {rank: 2},
        {rank: 3},
        {rank: 6},
        {rank: 7},
        {rank: 9},
        {rank: 'T'},
        {
            speed: 8.4, rank: 'Q', name: 'Rolling Stone',
            damage: 10, comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 2.4, rank: 'K', name: 'Windmill Crusher',
            damage: 15,
        },
        {
            speed: 0.0, rank: 'AAAA', name: 'Checkmate Buster',
            damage: 50,
        },
    ],
};
