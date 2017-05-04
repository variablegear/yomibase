import React from 'react';
import {Note, Icon} from '../note.jsx';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.0);

const normalThrow = mkNormal(0.6, {
    damage: 6,
    comboPts: 3,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>6>A+',
    maxDamage: 21,
    goodCombo: (rank) => 't' + rank + '>4>5>6',
    goodDamage: 21,
});

export const gwen = {
    theme: {
        // primary: #99072E, #C3DFEB
        text: 'linear-gradient(#fdceda, #d9ebf2)',
        headshot: require('../../images/gwen.jpg'),
    },
    summary: {
        name: 'Gwen',
        fullName: 'Gwen Grayson',
        title: 'Doomed Wanderer',
        hitPoints: 85,
        maxCombo: 6,
        attackSpeed: <span>x.0 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.6 <ComboDetails points={3} max={3} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'A'],
        blocks: [2, 3, 4, 9, 'T'],
        dodges: [5, 6, 7, 8],
        innateAbilities: [
            {
                name: 'Shadow Plague',
                text: 'During the draw phase, draw an extra card and take 2 damage.',
            },
            {
                name: 'Relentless Strikes',
                text: 'Whenever the opponent normal blocks your non-Ender attack, you \
                       may discard a red and a black normal attack. If you do, the black \
                       one hits, you win combat (and it ends), the opponent\'s block is \
                       discarded, and they draw a card.',
            },
        ],
        cardAbilities: [
            {
                rank: 'T',
                name: 'Gloria\'s Remedy',
                timing: 'During Combat',
                text: 'When you block an attack or Joker with this card, take no block \
                       damage, discard this card, and don\'t draw a card from blocking. \
                       Gain 6 life.',
            },
            {
                rank: 'J',
                name: 'Chillbane',
                timing: 'During Combat',
                text: 'When you hit with Chains of Ice, freeze the opponent (they skip all \
                       decisions they would make the rest of the turn). Next turn, their \
                       attacks and throws are 2 speed slower.',
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>J>K++>A+', maxDamage: 36, goodCombo: '2>3>4>5>6', goodDamage: 20}),
        normalAttack(3, {maxCombo: '3>J>K++>A+', maxDamage: 37, goodCombo: '3>4>5>6>A+', goodDamage: 34}),
        normalAttack(4, {maxCombo: '4>J>K++>A+', maxDamage: 38, goodCombo: '4>5>6>J>A+', goodDamage: 37}),
        normalAttack(5, {maxCombo: '5>6>K++>A+', maxDamage: 39, goodCombo: '5>6>J>A+', goodDamage: 33}),
        normalAttack(6, {maxCombo: '6>J>K++>A+', maxDamage: 40, goodCombo: '6>J>3>4>5>6', goodDamage: 30}),
        {
            speed: 3.6, rank: 'J', pumpWith: '+J', name: 'Chains of Ice',
            damage: 7, pump: 7, chip: 5,
            comboPts: 2, comboType: <Starter/>,
            maxCombo: 'J+>K++>A+', maxDamage: 42, goodCombo: 'J+>3>4>5>6', goodDamage: 32,
            notes: <Note
                text="Unburstable due to Chillbane"
                icon={<Icon><strike>{'\uD83D\uDCA5'}</strike></Icon>}
            />,
        },
        {
            speed: 4.0, rank: 'J', name: 'Links of Ice', damage: 6, chip: 1, maxCombo: 'J>6>K++>A+',
            maxDamage: 40, goodCombo: 'J>2>3>4>5>6', goodDamage: 26, comboPts: 1, comboType: <Linker/>,
        },
        {
            speed: 0.0, rank: 'Q', name: 'Shadow Slice', pumpWith: '+X',
            damage: 6, pump: 4, chip: 1, comboPts: 3, comboType: <Ender/>,
            maxCombo: 'Q+', maxDamage: 10,
        },
        {
            speed: 1.2, rank: 'K', name: 'Burnbarrow', pumpWith: '+X+X',
            damage: 4, pump: 4, chip: 3, comboPts: 2, comboType: <Linker/>,
            maxCombo: 'K++>K++>A+', maxDamage: 40, goodCombo: 'K++>3>4>5>6', goodDamage: 30,
        },
        {
            speed: 1.2, rank: 'A', name: 'Dashgorger', pumpWith: '+A',
            damage: 8, pump: 8, chip: 3, comboPts: 2, comboType: <Ender/>,
            maxCombo: 'A+', maxDamage: 16,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 4.6, rank: 'AAA', name: 'Dreadlands Portal', damage: 22, comboPts: null,
            comboType: <CantCombo/>, kd: false,
        },
    ],
};
