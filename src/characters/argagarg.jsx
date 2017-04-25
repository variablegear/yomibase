export const argagarg = {
    summary: {
        name: 'Argagarg',
        fullName: 'Argagarg Garg',
        title: 'Water Shaman',
        hitPoints: 85,
        maxCombo: 3,
        attackDefaults: {
            speedOffset: 0.4,
        },
        throwDefaults: {
            speedOffset: 0.8,
            damage: 6,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [5, 6, 7, 8, 9, 'T', 'A'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Hex of Murkwood',
                text: "At the end of each turn, if you weren't knocked down this turn, the opponent takes 2 damage.",
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Protective Ward',
                timing: 'Combat Reveal',
                text: "Draw a card. This turn, the opponent's attacks and throws are Enders \
                       that can't be pumped (or tag comboed from in 2v2).",
            },
            {
                rank: 'T',
                name: 'Crash and Flow',
                timing: 'Reaction',
                text: "Counter an ability. The opponent who played it draws a card. If it was \
                       played from hand, put it on the bottom of their deck. (Prevent and undo \
                       the ability and the opponent discards the card if played from hand. You \
                       can't counter Aces, Jokers or character cards.)",
            },
            {
                rank: 'A',
                name: 'Bubble Shield',
                timing: 'During Combat',
                text: "If this blocks an attack or Joker, draw a card and this gets: Ongoing. \
                       Your Hex of Murkwood deals an extra 2 damage per turn. When you get hit \
                       with an attack or throw, take no damage, end combat and discard this.",

            }
        ],
    },
    attacks: [
        { rank: 2, maxCombo: '2>K+>K+', maxDamage: 22, goodCombo: '2>3>4', goodCombo: 9 },
        { rank: 3, maxCombo: '3>K+>K+', maxDamage: 23, goodCombo: '3>4>5', goodCombo: 12 },
        { rank: 4, maxCombo: '4>K+>K+', maxDamage: 24, goodCombo: '4>5>6', goodCombo: 15 },
        { rank: 5, maxCombo: '5>K+>K+', maxDamage: 25, goodCombo: '5>6>J', goodCombo: 18 },
        { rank: 6, maxCombo: '6>K+>K+', maxDamage: 26, goodCombo: '6>K+>5', goodCombo: 21 },
        {
            speed: 2.4, rank: 'J', name: 'Flying Fish',
            damage: 7, chip: 2, comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 2.2, rank: 'Q', name: 'Water Spirit',
            damage: 9, chip: 2, comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 3.2, rank: 'K', name: 'Sparkling Bubble', pumpWith: '+K',
            damage: 6, pump: 4, chip: 3, comboPts: 1, comboType: 'Linker',
            maxCombo: 'K+>K+>J', maxDamage: 27, goodCombo: 'K>5>6', goodDamage: 17,
        },
        {
            speed: 0.2, rank: 'AA', name: 'Blowfish Spikes',
            damage: 16, chip: 2, comboPts: 2, comboType: 'Ender',
        },
    ],
    throws: [
        { rank: 7, maxCombo: '7>K+>K+', maxDamage: 27, goodCombo: '7>5>6', goodDamage: 17 },
        { rank: 8, maxCombo: '8>K+>K+', maxDamage: 27, goodCombo: '8>5>6', goodDamage: 17 },
        { rank: 9, maxCombo: '9>K+>K+', maxDamage: 27, goodCombo: '9>5>6', goodDamage: 17 },
        { rank: 'T', maxCombo: 'T>K+>K+', maxDamage: 27, goodCombo: 'T>5>6', goodDamage: 17 },
    ],
};