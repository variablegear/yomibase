export const CHARACTER_NAME_HERE = {
    summary: {
        name: '',
        fullName: '',
        title: '',
        hitPoints: 0,
        maxCombo: 0,
        attackDefaults: {
            speedOffset: 0.2,
        },
        throwDefaults: {
            speedOffset: 0.2,
            damage: 6,
            comboPts: 0,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [6, 7, 8, 9, 'T'],
        blocks: [7, 8, 9, 'T'],
        dodges: [2, 3, 4, 5],
        innateAbilities: [
            {
                name: '',
                text: '',
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: '',
                timing: '',
                text: '',
            },
            {
                rank: 'T',
                name: '',
                timing: '',
                text: '',
            },
        ],
    },
    attacks: [
        {
            speed: 0, rank: '', name: '', pumpWith: '',
            damage: '', pump: '', chip: '', comboPts: 1, comboType: 'Starter', kd: false,
            maxCombo: '', maxDamage: '', goodCombo: '', goodDamage: '', notes: '',
        },
    ],
    throws: [
        {
            speed: '',
            rank: '',
            pumpWith: '',
            damage: '',
            pump: '',
            maxCombo: '',
            maxDamage: '',
            goodCombo: '',
            goodDamage: '',
            notes: '',
        },
    ],
};
