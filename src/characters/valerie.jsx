export const valerie = {
        summary: {
            name: 'Valerie',
            fullName: 'Valerie Rose',
            title: 'Manic Painter',
            hitPoints: 80,
            maxCombo: 6,
            attackDefaults: {
                speedOffset: 0.4,
            },
            throwDefaults: {
                speedOffset: 0.2,
                damage: 6,
                comboPts: 3,
                comboType: 'Starter',
                kd: true,
            },
            attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
            throws: [7, 8, 9, 'T'],
            blocks: [5, 6, 7, 8, 9, 'T'],
            dodges: [2, 3, 4],
            innateAbilities: [
                {
                    name: 'Agile Hands',
                    text: 'You can combo normal attacks in any order. (Out-of-order normals count as chain combos for you and let you search for Aces during the Power Up phase.)',
                },
            ],
            cardAbilities: [
                {
                    rank: 7,
                    name: 'Bold Strokes',
                    timing: 'Combat Reveal',
                    text: 'Your normal attacks do +1 damage each this turn. Draw a card.',
                },
                {
                    rank: 'T',
                    name: 'Burst of Speed',
                    timing: 'Combat Reveal',
                    text: 'The attack or throw you combat-revealed is 2 speed faster, to a minimum of speed 1.0. (Does stack if you play multiples.)',
                },
                {
                    rank: 'K',
                    name: 'Splash of Color',
                    timing: 'During Combat',
                    text: 'This card can only be blocked by a block of the same color (red/black).',
                },
                {
                    rank: 'A',
                    name: 'Unbounded Creativity',
                    timing: 'During Combat',
                    text: 'When you hit with either side of this Ace, draw a card.',
                },
                {
                    rank: 'AA',
                    name: 'Unbounded Creativity',
                    timing: 'During Combat',
                    text: 'When you hit with either side of this Ace, draw a card.',
                },
            ],
        },
        attacks: [
            {rank: 2, maxCombo: '2>6>6>6>J++', maxDamage: 41, goodCombo: '2>3>4>5>5>6', goodDamage: 25},
            {rank: 3, maxCombo: '3>6>6>6>J++', maxDamage: 42, goodCombo: '3>2>4>5>5>6', goodDamage: 25},
            {rank: 4, maxCombo: '4>6>6>6>J++', maxDamage: 43, goodCombo: '4>2>3>5>5>6', goodDamage: 25},
            {rank: 5, maxCombo: '5>6>6>6>J++', maxDamage: 44, goodCombo: '5>2>4>4>5>6', goodDamage: 26},
            {rank: 6, maxCombo: '6>6>6>6>J++', maxDamage: 45, goodCombo: '6>3>4>5>5>6', goodDamage: 29},
            {
                speed: 2.2, rank: 'J', name: 'Three Colors', pumpWith: '+F+F',
                damage: 7, pump: 7, chip: 2, comboPts: 2, comboType: 'Ender',
                maxCombo: 'J++', maxDamage: 21, goodCombo: 'J+', goodDamage: 14,
            },
            {
                speed: 0.2, rank: 'Q', name: 'Crimson Passion', pumpWith: '+X+X',
                damage: 8, pump: 3, chip: 1, comboPts: 3, comboType: 'Ender',
                maxCombo: 'Q++', maxDamage: 14, goodCombo: 'Q+', goodDamage: 11,
            },
            {
                speed: 3.4, rank: 'K', name: 'Flying Rainbow Strike',
                damage: 6, chip: 2, comboPts: 1, comboType: 'Linker',
                maxCombo: 'K>6>6>6>J++', maxDamage: 45, goodCombo: 'K>3>4>4>5>6', goodDamage: 28,
            },
            {
                speed: 1.0, rank: 'A', name: 'Chromatic Orb',
                damage: 10, chip: 3, comboType: 'Can\'t Combo',
            },
            {
                speed: 1.2, rank: 'AA', name: 'Masterpiece',
                damage: 16, chip: 3, comboPts: 2, comboType: 'Ender',
            },
        ],
        throws: [
            {rank: 7, maxCombo: 't7>6>J++', maxDamage: 33, goodCombo: 't7>4>5>6', goodDamage: 21},
            {rank: 8, maxCombo: 't8>6>J++', maxDamage: 33, goodCombo: 't8>4>5>6', goodDamage: 21},
            {rank: 9, maxCombo: 't9>6>J++', maxDamage: 33, goodCombo: 't9>4>5>6', goodDamage: 21},
            {rank: 'T', maxCombo: 'tT>6>J++', maxDamage: 33, goodCombo: 'tT>4>5>6', goodDamage: 21},
        ],
    };
