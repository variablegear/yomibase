import React from 'react';
import {Ender, Linker, Starter, CantCombo, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.8);

const normalThrow = mkNormal(0.8, {
    damage: 6,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>AA',
    maxDamage: 24,
    goodCombo: (rank) => 't' + rank + '>5>6',
    goodDamage: 17,
});

export const gloria = {
    theme: {
        text: 'linear-gradient(#FFD0DE, #F1FFFF)',
    },
    summary: {
        name: 'Gloria',
        fullName: 'Gloria Grayson',
        title: 'Hopeful Healer',
        hitPoints: 70,
        maxCombo: 4,
        attackSpeed: <span>x.8 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.8 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'Q'],
        blocks: [2, 3, 4, 9, 'T'],
        dodges: [5, 6, 7, 8],
        innateAbilities: [
            {
                name: 'Healing Touch',
                text: "After the power up phase, if you aren't knocked down, you may discard \
                two non-Hearts cards to gain 4 life and fetch a Hearts card from your discard \
                pile.",
            },
        ],
        cardAbilities: [
            {
                rank: 'T',
                name: 'Healing Sphere',
                timing: 'Draw Phase',
                text: <div>
                    Ongoing. At the end of each turn:
                    <ul>
                        <li>Draw a card if you healed (even if you were at max life).</li>
                        <li>Discard this if you didn't heal or were thrown this turn.</li>
                    </ul>
                </div>
            },
            {
                rank: 'J',
                name: 'Bathed in Moonlight',
                timing: 'End of Combat',
                text: 'When you hit with this attack, you may heal yourself and the \
                opponent for 4 life. If you do, return this card to your hand.',
            },
            {
                rank: 'A',
                name: 'Overdose',
                timing: 'End of Combat',
                text: 'Both players take 10 damage (you first). If you won combat, draw \
                2 cards. Play only one Overdose per turn.',
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>AA>6', maxDamage: '26', goodCombo: '2>3>4>5', goodDamage: 14}),
        normalAttack(3, {maxCombo: '3>AA>6', maxDamage: '27', goodCombo: '3>4>5>6', goodDamage: 18}),
        normalAttack(4, {maxCombo: '4>AA>6', maxDamage: '28', goodCombo: '4>5>6>J', goodDamage: 20}),
        normalAttack(5, {maxCombo: '5>AA>6', maxDamage: '29', goodCombo: '5>6>J>6', goodDamage: 22}),
        normalAttack(6, {maxCombo: '6>AA>6', maxDamage: '30', goodCombo: '6>J>5>6', goodDamage: 22}),
        {
            speed: 4.0, rank: 'J', name: 'Ray of Moonlight', damage: 9, chip: 2,
            comboPts: 1, comboType: <Starter/>,
            maxCombo: 'J>6>AA', maxDamage: 33, goodCombo: 'J>4>5>6', goodDamage: 24,
        },
        {
            speed: 2.2, rank: 'J', name: 'Moonlight Sphere', damage: 5, chip: 2,
            comboPts: 1, comboType: <Linker/>,
            maxCombo: 'J>6>AA', maxDamage: 29, goodCombo: 'J>4>5>6', goodDamage: 20,
        },
        {
            speed: 1.0, rank: 'Q', pumpWith: '+F', name: 'Sunburst',
            damage: 6, pump: 7, chip: 1, comboType: <CantCombo/>,
            maxCombo: 'Q+', maxDamage: 13,
        },
        {
            speed: 2.2, rank: 'K', name: 'Fountain of Light', damage: 9, chip: 3,
            comboType: <CantCombo/>, kd: true,
        },
        {
            speed: 2.0, rank: 'AA', name: 'Twilight Key', damage: 18, chip: 2,
            comboPts: 2, comboType: <Linker/>,
            maxCombo: 'AA>5>6', maxDamage: 29, goodCombo: 'AA>4>5', goodDamage: 27,
        },
        {
            speed: 0.6, rank: 'AAA', name: 'Sun and Moon', damage: 29, chip: 2,
            comboPts: 1, comboType: <Starter/>,
            maxCombo: 'AAA>6', maxDamage: 35, goodCombo: 'AAA>J', goodDamage: 34,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 8.6, rank: 'Q', pumpWith: '+x+x', name: 'Sunbar Cage',
            damage: 4, pump: 6, comboType: <CantCombo/>,
            maxCombo: 'tQ++', maxDamage: 16, goodCombo: 'tQ+', goodDamage: 10
        },
    ],
};
