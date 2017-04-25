export const degrey = {
    summary: {
        name: 'DeGrey',
        fullName: 'Jefferson DeGrey',
        title: 'Ghostly Diplomat',
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
        throws: [7, 8, 9, 'T'],
        blocks: [4, 5, 6, 8, 9, 'T'],
        dodges: [2, 3, 4, 'A'],
        innateAbilities: [
            {
                name: 'Moral High Ground',
                text: 'If your opponent has more cards in hand than you, your special \
                       and super attacks deal extra damage equal to the difference. \
                       (Compute this bonus after your combo is finished. Special attacks \
                       are Jacks, Queeens, and Kings. Super attacks are Aces.)',
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Point, Counterpoint',
                timing: 'Combat Reveal',
                text: 'Discard a card to rotate this 180 degrees.',
            },
            {
                rank: 4,
                name: 'Troublesome Rhetoric',
                timing: 'Draw Phase',
                text: 'Choose attack, block, throw, or dodge. If the opponent \
                       combat-reveals that option this turn, gain 12 life.',
            },
            {
                rank: 'A',
                name: 'Ghost Riposte',
                timing: 'During Combat',
                text: 'You may hit back with a full combo if you dodge an attack \
                       or Joker with this. Return this card to your hand when combat \
                       ends unless you were thrown.',

            }
        ],
    },
    attacks: [
        {
            rank: 2, name: 'Spectral Pull', damage: 4,
            maxCombo: '2>3>AA', maxDamage: 28, goodCombo: '2>3>K', goodDamage: 18,
        },
        {
            rank: 3, name: 'Spectral Push', damage: 4,
            maxCombo: '3>AA', maxDamage: 24, goodCombo: '3>K', goodDamage: 14,
        },
        { rank: 5, maxCombo: '5>6>AA', maxDamage: 31, goodCombo: '5>6>7>J', goodDamage: 25 },
        { rank: 6, maxCombo: '6>7>AA', maxDamage: 33, goodCombo: '6>7>J', goodDamage: 20 },
        { rank: 7, maxCombo: '7>AA', maxDamage: 27, goodCombo: '7>K', goodDamage: 17 },
        {
            speed: 2.4, rank: 'J', name: 'Daggerfall Thrust',
            damage: 7, chip: 2, comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 7.0, rank: 'Q', name: 'Pilebunker',
            damage: 14, chip: 4, comboPts: 2, comboType: 'Starter', kd: true,
            maxCombo: 'Q>AA', maxDamage: 34, goodCombo: 'Q>J', goodDamage: 21,
        },
        {
            speed: 0.2, rank: 'K', name: 'Spirit Justice',
            damage: 10, chip: 2, comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 1.2, rank: 'AA', name: 'Final Arbiter',
            damage: 20, chip: 2, comboPts: 2, comboType: 'Ender',
        },
    ],
    throws: [
        { rank: 7, maxCombo: '7>AA', maxDamage: 28, goodCombo: '7>J', goodDamage: 15 },
        { rank: 8, maxCombo: '8>AA', maxDamage: 28, goodCombo: '8>J', goodDamage: 15 },
        { rank: 9, maxCombo: '9>AA', maxDamage: 28, goodCombo: '9>J', goodDamage: 15 },
        { rank: 'T', maxCombo: 'T>AA', maxDamage: 28, goodCombo: 'T>J', goodDamage: 15 },
    ],
};
