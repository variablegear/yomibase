export const quince = {
    summary: {
        name: 'Quince',
        fullName: 'Sirus Quince',
        title: 'Flagstone Chief Magistrate',
        hitPoints: 90,
        maxCombo: 4,
        attackDefaults: {
            speedOffset: 0.8,
        },
        throwDefaults: {
            speedOffset: 0.8,
            damage: 7,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 5, 6, 7, 'J', 'Q', 'A'],
        throws: [7, 8, 9, 'T', 'Q', 'K'],
        blocks: [4, 5, 6, 8, 9, 'T'],
        dodges: [2, 3, 4, 'J', 'K'],
        innateAbilities: [
            {
                name: 'Positive Spin',
                text: 'At the end of the turn, if you dealt damage or block damage to your opponent, you may reveal a face card from your hand. If you combat-reveal that card next turn, you may draw a card to rotate it 180 degrees.',
            },
        ],
        cardAbilities: [
            {
                rank: 2,
                name: 'Two Truths',
                timing: 'Draw Phase',
                text: 'Choose up to 3 cards in your discard pile of different ranks from 3 through King, then reveal the top 2 cards of your deck. Divide all these cards into two face-up piles. The opponent puts one pile in your hand and you discard the other.',
            },
            {
                rank: 'T',
                name: 'Flagstone Tax',
                timing: 'Draw Phase',
                text: 'Choose attack, block, throw or dodge. If the opponent combat-reveals that option this turn, draw 2 cards.',
            },
            {
                rank: 'A',
                name: 'Patriot Mirror',
                timing: 'During Combat',
                text: 'If you deal damage or block damage with Patriot Mirror, you may play a second face-down card next combat instead of using Positive Spin. After combat cards are revealed, choose one to discard and use the other.',
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>AA+', maxDamage: 33, goodCombo: '2>3>tQ++', goodDamage: 22},
        {rank: 3, maxCombo: '3>AA+', maxDamage: 34, goodCombo: '3>tQ++', goodDamage: 20},
        {rank: 5, maxCombo: '5>AA+', maxDamage: 35, goodCombo: '5>6>tQ++', goodDamage: 28},
        {rank: 6, maxCombo: '6>AA+', maxDamage: 36, goodCombo: '6>7>tQ++', goodDamage: 30},
        {rank: 7, maxCombo: '7>AA+', maxDamage: 37, goodCombo: '7>tQ++', goodDamage: 24},
        {
            speed: 2.6, rank: 'J', name: 'Truth Geyser', damage: 9, chip: 2,
            comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 7.2, rank: 'Q', name: 'Righteous Zeal', damage: 12, chip: 3,
            comboPts: 2, comboType: 'Starter', maxCombo: 'Q>tQ++', maxDamage: 29,
            goodCombo: 'Q>6>J', goodDamage: 27, kd: true,
        },
        {
            speed: 2.8, rank: 'A', name: 'Patriot Mirror', damage: 10, chip: 3,
            comboType: 'Can\'t Combo', kd: true,
        },
        {
            speed: 1.2, rank: 'AA', name: 'Consent of the Governed', pumpWith: '+A+A',
            damage: 16, pump: 14, chip: 4, comboPts: 3, comboType: 'Ender',
        },
    ],
    throws: [
        {rank: 7, maxCombo: 't7>K+', maxDamage: 21, goodCombo: 't7>4>5', goodDamage: 16},
        {rank: 8, maxCombo: 't8>K+', maxDamage: 21, goodCombo: 't8>4>5', goodDamage: 16},
        {rank: 9, maxCombo: 't9>K+', maxDamage: 21, goodCombo: 't9>4>5', goodDamage: 16},
        {rank: 'T', maxCombo: 'tT>K+', maxDamage: 21, goodCombo: 'tT>4>5', goodDamage: 16},
        {
            speed: 9.8, rank: 'Q', name: 'Righteous Tumbler', pumpWith: '+x+x',
            damage: 7, pump: 5, comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 9.0, rank: 'K', name: 'Righteous Tumbler', damage: 7, comboPts: 2,
            comboType: 'Starter', maxCombo: 'tK>tQ++', maxDamage: 26, goodCombo: 'tK>6>J',
            goodDamage: 24,
        },
    ],
};
