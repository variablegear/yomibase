import React from 'react';
import Note from '../note.jsx';

const dragon = <Note text="Requires Dragon Form" icon={<span style={{fontSize: '150%'}}>{'\uD83D\uDC32'}</span>} />;
export const midori = {
    summary: {
        name: 'Midori',
        fullName: 'Master Midori',
        title: 'Mentor Dragon',
        hitPoints: 90,
        maxCombo: 3,
        attackDefaults: {
            speedOffset: 0.2,
        },
        throwDefaults: {
            speedOffset: 0.8,
            damage: 8,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [4, 5, 6, 7, 8, 'J', 'Q', 'A'],
        throws: ['2*', 3, 4, 5, 9, 'T', 'K', 'A'],
        blocks: ['2*', 3, 6, 7, 8],
        dodges: [9, 'T'],
        innateAbilities: [
            {
                name: 'Aspect of the Dragon',
                text: 'Your Dragon attacks can not be dodged by normal dodges. Whenever you block an attack or Joker while in Dragon Form, you may return a non-Joker card from your discard pile to your hand instead of drawing a card. (You can only play Dragon moves while in Dragon Form.)',
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 2,
                name: 'Dragon Form',
                timing: 'Draw Phase',
                text: 'Ongoing. You can play Dragon moves. Discard this if you get thrown or you combat-reveal a non-Dragon attack/throw.',
            },
            {
                rank: 'T',
                name: 'Glimpse of the Dragon',
                timing: 'Combat Reveal',
                text: 'If you combat-revealed a face card while not in Dragon Form, rotate it 180 degrees to play the Dragon Form version of your move. (Aces aren\'t face cards.)',
            },
        ],
    },
    attacks: [
        {rank: 4, maxCombo: '4>5>J+', maxDamage: 25, goodCombo: '4>5>6', goodDamage: 15},
        {rank: 5, maxCombo: '5>6>J+', maxDamage: 27, goodCombo: '5>6>7', goodDamage: 18},
        {rank: 6, maxCombo: '6>7>J+', maxDamage: 29, goodCombo: '6>7>8', goodDamage: 21},
        {rank: 7, maxCombo: '7>8>J+', maxDamage: 31, goodCombo: '7>8>J', goodDamage: 23},
        {rank: 8, maxCombo: '8>J+', maxDamage: 24, goodCombo: '8>Q', goodDamage: 18},
        {
            speed: 2.4, rank: 'J', pumpWith: '+J', name: 'Whirlwind', damage: 8, pump: 8, chip: 2,
            comboPts: 1, comboType: 'Ender', maxCombo: 'J+', maxDamage: 16,
        },
        {
            speed: 2.4, rank: 'J', name: 'Toxic Breath', damage: 9, chip: 2, comboPts: 1, comboType: 'Starter',
            maxCombo: 'dJ>AA', maxDamage: 29, goodCombo: 'J>7>8', goodDamage: 24, notes: dragon,
        },
        {speed: 1.2, rank: 'Q', name: 'Rising Mountain', damage: 10, chip: 1, comboPts: 2, comboType: 'Ender'},
        {
            speed: 0.6, rank: 'Q', name: 'Dragon Mountain', damage: 14, chip: 2, comboPts: 2, comboType: 'Linker',
            maxCombo: 'dQ>J+', maxDamage: 30, goodCombo: 'dQ>8', goodDamage: 22, notes: dragon,
        },
        {speed: 1.2, rank: 'AA', name: 'Wrath of Earth', damage: 20, chip: 2, comboType: 'Can\'t Combo'},
    ],
    throws: [
        {rank: 2, maxCombo: 't2>J+', maxDamage: 24, goodCombo: 't2>8', goodDamage: 16},
        {rank: 3, maxCombo: 't3>J+', maxDamage: 24, goodCombo: 't3>8', goodDamage: 16},
        {rank: 4, maxCombo: 't4>J+', maxDamage: 24, goodCombo: 't4>8', goodDamage: 16},
        {rank: 5, maxCombo: 't5>J+', maxDamage: 24, goodCombo: 't5>8', goodDamage: 16},
        {rank: 9, maxCombo: 't9>J+', maxDamage: 24, goodCombo: 't9>8', goodDamage: 16},
        {rank: 'T', maxCombo: 'tT>J+', maxDamage: 24, goodCombo: 'tT>8', goodDamage: 16},
        {speed: 4.4, rank: 'K', name: 'Rushing River', damage: 12, comboType: 'Can\'t Combo', comboPts: null},
        {
            speed: 1.8, rank: 'K', name: 'Talon Swoop', damage: 17, comboType: 'Can\'t Combo',
            comboPts: null, notes: dragon,
        },
        {
            speed: 0.0, rank: 'AA', pumpWith: '+A+A', name: 'Final Dragon Buster', damage: 20,
            pump: 16, comboType: 'Can\'t Combo', comboPts: null,
            maxCombo: 'AA++', maxDamage: 52, goodCombo: 'AA+', goodDamage: 36, notes: dragon,
        },
    ],
};
