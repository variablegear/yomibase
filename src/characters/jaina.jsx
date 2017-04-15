import React from 'react';
import {Note, recycles} from '../note.jsx';

function normal(rank, max, maxDmg, good, goodDmg) {
    return {
        rank: rank, chip: '(' + rank + ')',
        notes: <Note
            text="Chip damage on *red* normals only"
            icon={
                <span>
                    <span className='yomi-attack'>{'\u2764'}</span>
                    /
                        <span className='yomi-attack'>{'\u2666'}</span>
                    {'\u21D2'}
                    <span className='yomi-block'>{'\u26CA'}</span>
                </span>
            }
        />,
        maxCombo: max, maxDamage: maxDmg, goodCombo: good, goodDamage: goodDmg,
    };
};

const recycle35 = recycles('Card is likely to recycle from the discard once Jaina is below 35 life');

export const jaina = {
    summary: {
        name: 'Jaina',
        fullName: 'Jaina Stormborne',
        title: 'Phoenix Archer',
        hitPoints: 85,
        maxCombo: 5,
        attackDefaults: {
            speedOffset: 0.6,
        },
        throwDefaults: {
            speedOffset: 0.6,
            damage: 7,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [6, 7, 8, 9, 'T'],
        blocks: [7, 8, 9, 'T'],
        dodges: [2, 3, 4, 5],
        innateAbilities: [
            {
                name: 'Burning Vigor',
                text: 'At the end of combat, if you attacked, you may return any number of combo cards to your hand other than Queens or Aces. Take 3 damage for each card returned this way.',
            },
            {
                name: 'Burning Desperation',
                text: 'If you have 35 life or less, you may also return Queens and Aces and take 4 damage for each.',
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Unstable Power',
                timing: 'Draw Phase',
                text: 'Knocked down opponents stand up. You can\'t play Aces this turn, but you can rotate your combat-revealed attack 180 degrees. If you hit the opponent this combat, search your deck or discard pile for 2 Aces. Otherwise, take 7 damage.',
            },
            {
                rank: 'T',
                name: 'Smoldering Embers',
                timing: 'Combat Reveal',
                text: 'If the opponent dodged while this card is in your discard pile, they take two damage. You can\'t power up with this card. (It\'s too hot.)',
            },
        ],
    },
    attacks: [
        normal(2, '2>K+++>AA', 47, '2>3>4>AA', 25),
        normal(3, '3>K+++>AA', 48, '3>4>5>AA', 30),
        normal(4, '4>K+++>AA', 49, '4>5>6>AA', 33),
        normal(5, '5>K+++>AA', 50, '5>K+>5>6', 28),
        normal(6, '6>K+++>AA', 51, '6>K+>4>5', 28),
        {
            speed: 2.6, rank: 'J', name: 'Flame Arrow', damage: 6,
            chip: 5, comboType: 'Ender', comboPts: 1,
        },
        {
            speed: 4.6, rank: 'J', name: 'Charged Shot', damage: 8,
            chip: 7, comboType: 'Starter', comboPts: 2,
            maxCombo: 'J>K+++>6', maxDamage: 41, goodCombo: 'J>4>5>6', goodDamage: 24,
        },
        {
            speed: 0.2, rank: 'Q', name: 'Dragonheart', pumpWith: '+X',
            damage: 8, pump: 5, chip: 1, comboType: 'Ender', comboPts: 3,
            maxCombo: 'Q+', maxDamage: 13, notes: recycle35,
        },
        {
            speed: 2.4, rank: 'K', name: 'Crossfire Kick', pumpWith: '+K+K+K',
            damage: 6, pump: 7, chip: 3, comboType: 'Linker', comboPts: 2,
            maxCombo: 'K+++>6>AA', maxDamage: 51, goodCombo: 'K++>4>5>6', goodDamage: 35,
        },
        {
            speed: 0.8, rank: 'A', name: 'Red Dragon', pumpWith: '+A+A+A',
            damage: 10, pump: 9, chip: 2, comboType: 'Can\'t Combo', comboPts: null,
            maxCombo: 'A+++', maxDamage: 37, goodCombo: 'A++', goodDamage: 28, notes: recycle35,
        },
        {
            speed: 0.2, rank: 'AA', name: 'Letter J', damage: 18, chip: 4,
            comboType: 'Ender', comboPts: 2, notes: recycle35,
        },
    ],
    throws: [
        {
            rank: 6, speed: 8.6, name: 'Knee Bash', pumpWith: '+X+X', damage: 7,
            pump: 4, comboType: 'Can\'t Combo', kd: false, comboPts: null,
            maxCombo: '6++', maxDamage: 15, goodCombo: '6+', goodDamage: 11,
        },
        {rank: 7, maxCombo: 't7>K+++>6', maxDamage: 40, goodCombo: 't7>4>5>6', goodDamage: '22'},
        {rank: 8, maxCombo: 't8>K+++>6', maxDamage: 40, goodCombo: 't8>4>5>6', goodDamage: '22'},
        {rank: 9, maxCombo: 't9>K+++>6', maxDamage: 40, goodCombo: 't9>4>5>6', goodDamage: '22'},
        {rank: 'T', maxCombo: 'tT>K+++>6', maxDamage: 40, goodCombo: 'tT>4>5>6', goodDamage: '22'},
    ],
};
