import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.2);

const normalThrow = mkNormal(0.2, {
    damage: 6,
    comboPts: 3,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>6>J++',
    maxDamage: 33,
    goodCombo: (rank) => 't' + rank + '>4>5>6',
    goodDamage: 21,
});

export const CHARACTER_NAME_HERE = {
    summary: {
        name: '',
        fullName: '',
        title: '',
        hitPoints: 0,
        maxCombo: 0,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.2 <ComboDetails points={3} max={3} kd={true}/></div>,
        throwDamage: 6,
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
        normalAttack(2, {maxCombo: '2>6>6>6>J++', maxDamage: 41, goodCombo: '2>3>4>5>5>6', goodDamage: 25}),
        normalAttack(3, {maxCombo: '3>6>6>6>J++', maxDamage: 42, goodCombo: '3>2>4>5>5>6', goodDamage: 25}),
        normalAttack(4, {maxCombo: '4>6>6>6>J++', maxDamage: 43, goodCombo: '4>2>3>5>5>6', goodDamage: 25}),
        normalAttack(5, {maxCombo: '5>6>6>6>J++', maxDamage: 44, goodCombo: '5>2>4>4>5>6', goodDamage: 26}),
        normalAttack(6, {maxCombo: '6>6>6>6>J++', maxDamage: 45, goodCombo: '6>3>4>5>5>6', goodDamage: 29}),
        {
            speed: 0, rank: '', name: '', pumpWith: '',
            damage: '', pump: '', chip: '', comboPts: 1, comboType: <Starter/>, kd: false,
            maxCombo: '', maxDamage: '', goodCombo: '', goodDamage: '', notes: '',
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: '', rank: '', name: '', pumpWith: '',
            damage: '', pump: '',
            maxCombo: '', maxDamage: '', goodCombo: '', goodDamage: '',
            notes: '',
        },
    ],
};
