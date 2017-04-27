import React from 'react';

export const menelker = {
    summary: {
        name: 'Menelker',
        fullName: 'Master Menelker',
        title: 'Deathstrike Dragon',
        hitPoints: 70,
        maxCombo: 5,
        attackDefaults: {
            speedOffset: 0.6,
        },
        throwDefaults: {
            speedOffset: 0.6,
            damage: 6,
            comboPts: 3,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'A'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Bleeding Wounds',
                text: <div>
                    When you hit the opponent with a black face card attack (even multiple times in a
                    combo), draw a card and they discard a card. (Aces are not face cards.) During the
                    powerup phase, you may power up for black face cards. (You may still power up for
                    Aces, too.)
                </div>,
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Bonecracker',
                timing: 'During Combat',
                text: 'When you throw the opponent with this card, the opponent reveals their hand and discards a card of your choice.',
            },
            {
                rank: 'T',
                name: 'Into Oblivion',
                timing: 'Draw Phase',
                text: <div>
                    Banish a card from the opponent's discard pile from the game. They
                    must then banish another card of that same rank from their hand or
                    from their deck. (They shuffle their deck afterwards. Banished cards
                    are removed from the game.)
                </div>,
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>K++>A+', maxDamage: '40', goodCombo: '2>3>4>K++', goodDamage: 31},
        {rank: 3, maxCombo: '3>K++>A+', maxDamage: '41', goodCombo: '3>4>5>K++', goodDamage: 34},
        {rank: 4, maxCombo: '4>K++>A+', maxDamage: '42', goodCombo: '4>5>6>K++', goodDamage: 37},
        {rank: 5, maxCombo: '5>K++>A+', maxDamage: '43', goodCombo: '5>6>K++>J', goodDamage: 32},
        {rank: 6, maxCombo: '6>K++>A+', maxDamage: '44', goodCombo: '6>K++>K++', goodDamage: 38},
        {
            speed: 2.4, rank: 'J', name: 'Chaos Orb', damage: '7',
            chip: '2', comboPts: 1, comboType: 'Ender', kd: false,
        },
        {
            speed: 4.0, rank: 'J', pumpWith: '+J+J', name: 'Nether Orb',
            damage: 9, pump: 9, chip: 6, comboPts: 3, comboType: 'Starter',
            maxCombo: 'J++>A+', maxDamage: 49, goodCombo: 'J++>K++', goodDamage: 44,
        },
        {
            speed: 0.0, rank: 'Q', pumpWith: '+x+x', name: 'Rising Dragon',
            damage: 8, pump: 4, chip: 2, comboPts: 3, comboType: 'Ender',
            maxCombo: 'Q++', maxDamage: 16, goodCombo: 'Q+', goodDamage: 12,
        },
        {
            speed: 2.2, rank: 'K', pumpWith: '+x+x', name: 'Sweeping Claws',
            damage: 6, pump: 5, chip: 2, comboPts: 2, comboType: 'Linker',
            maxCombo: 'K++>6>A+', maxDamage: 44, goodCombo: 'K++>K++', goodDamage: 32,
        },
        {
            speed: 1.2, rank: 'A', pumpWith: '+A', name: 'Dragon Breath',
            damage: 11, pump: 11, chip: 3, comboPts: 2, comboType: 'Ender',
            maxCombo: 'A+', maxDamage: 22,
        },
    ],
    throws: [
        {rank: 7, maxCombo: 't7>A+', maxDamage: 28, goodCombo: 't7>K+', goodDamage: 22},
        {rank: 8, maxCombo: 't8>A+', maxDamage: 28, goodCombo: 't8>K+', goodDamage: 22},
        {rank: 9, maxCombo: 't9>A+', maxDamage: 28, goodCombo: 't9>K+', goodDamage: 22},
        {rank: 'T', maxCombo: 'tT>A+', maxDamage: 28, goodCombo: 'tT>K+', goodDamage: 22},
        {
            speed: 0.0, rank: 'AAAA', name: 'Deathstrike Dragon', damage: 55,
            comboType: 'Can\'t Combo', comboPts: null,
        },
    ],
};
