import React from 'react';
import Note from '../note.jsx';

export const gwen = {
    summary: {
        name: 'Gwen',
        fullName: 'Gwen Grayson',
        title: 'Doomed Wanderer',
        hitPoints: 85,
        maxCombo: 6,
        attackDefaults: {
            speedOffset: 0.0,
        },
        throwDefaults: {
            speedOffset: 0.6,
            damage: 6,
            comboPts: 3,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J*', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T*', 'AAA'],
        blocks: [2, 3, 4, 9, 'T*'],
        dodges: [5, 6, 7, 8],
        innateAbilities: [
            {
                name: 'Shadow Plague',
                text: 'During the draw phase, draw an extra card and take 2 damage.',
            },
            {
                name: 'Relentless Strikes',
                text: 'Whenever the opponent normal blocks your non-Ender attack, you may discard a red and a black normal attack. If you do, the black one hits, you win combat (and it ends), the opponent\'s block is discarded, and they draw a card.',
            },
        ],
        cardAbilities: [
            {
                rank: 'T',
                name: 'Gloria\'s Remedy',
                timing: 'During Combat',
                text: 'When you block an attack or Joker with this card, take no block damage, discard this card, and don\'t draw a card from blocking. Gain 6 life.',
            },
            {
                rank: 'J',
                name: 'Chillbane',
                timing: 'During Combat',
                text: 'When you hit with Chains of Ice, freeze the opponent (they skip all decisions they would make the rest of the turn). Next turn, their attacks and throws are 2 speed slower.',
            },
        ],
    },
    attacks: [
        {rank: 2, maxCombo: '2>J>K++>A+', maxDamage: 36, goodCombo: '2>3>4>5>6', goodDamage: 20},
        {rank: 3, maxCombo: '3>J>K++>A+', maxDamage: 37, goodCombo: '3>4>5>6>A+', goodDamage: 34},
        {rank: 4, maxCombo: '4>J>K++>A+', maxDamage: 38, goodCombo: '4>5>6>J>A+', goodDamage: 37},
        {rank: 5, maxCombo: '5>6>K++>A+', maxDamage: 39, goodCombo: '5>6>J>A+', goodDamage: 33},
        {rank: 6, maxCombo: '6>J>K++>A+', maxDamage: 40, goodCombo: '6>J>3>4>5>6', goodDamage: 30},
        {
            speed: 3.6, rank: 'J', pumpWith: '+J', name: 'Chains of Ice',
            damage: 7, pump: 7, chip: 5,
            comboPts: 2, comboType: 'Starter',
            maxCombo: 'J+>K++>A+', maxDamage: 42, goodCombo: 'J+>3>4>5>6', goodDamage: 32,
            notes: <Note
                text="Unburstable due to Chillbane"
                icon={<strike style={{fontSize: '150%'}}>{'\uD83D\uDCA5'}</strike>}
            />,
        },
        {
            speed: 4.0, rank: 'J', name: 'Links of Ice', damage: 6, chip: 1, maxCombo: 'J>6>K++>A+',
            maxDamage: 40, goodCombo: 'J>2>3>4>5>6', goodDamage: 26, comboPts: 1, comboType: 'Linker',
        },
        {
            speed: 0.0, rank: 'Q', name: 'Shadow Slice', pumpWith: '+X',
            damage: 6, pump: 4, chip: 1, comboPts: 3, comboType: 'Ender',
            maxCombo: 'Q+', maxDamage: 10,
        },
        {
            speed: 1.2, rank: 'K', name: 'Burnbarrow', pumpWith: '+X+X',
            damage: 4, pump: 4, chip: 3, comboPts: 2, comboType: 'Linker',
            maxCombo: 'K++>K++>A+', maxDamage: 40, goodCombo: 'K++>3>4>5>6', goodDamage: 30,
        },
        {
            speed: 1.2, rank: 'A', name: 'Dashgorger', pumpWith: '+A',
            damage: 8, pump: 8, chip: 3, comboPts: 2, comboType: 'Ender',
            maxCombo: 'A+', maxDamage: 16,
        },
    ],
    throws: [
        {rank: 7, maxCombo: 't7>6>A+', maxDamage: 28, goodCombo: 't7>4>5>6', goodDamage: 21},
        {rank: 8, maxCombo: 't8>6>A+', maxDamage: 28, goodCombo: 't8>6>J>6', goodDamage: 24},
        {rank: 9, maxCombo: 't9>6>A+', maxDamage: 28, goodCombo: 't9>6>K++', goodDamage: 24},
        {rank: 'T', maxCombo: 'tT>6>A+', maxDamage: 28, goodCombo: 'tT>J>J>J', goodDamage: 24},
        {speed: 4.6, rank: 'AAA', name: 'Dreadlands Portal', damage: 22, comboPts: null, comboType: 'Can\'t Combo', kd: false},
    ],
};
