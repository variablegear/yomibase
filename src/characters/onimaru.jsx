import React from 'react';
import {CantCombo, Ender, Linker, Starter} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {rankValue} from '../rank.js';

const normalThrow = mkNormal(0.2, {
    pumpWith: '+X+X',
    damage: (rank) => rankValue(rank),
    pump: 4,
    comboType: <CantCombo/>,
    kd: false,
    maxCombo: (rank) => 't' + rank + '++',
    maxDamage: (rank) => rankValue(rank) + 8,
    goodCombo: (rank) => 't' + rank + '+',
    goodDamage: (rank) => rankValue(rank) + 4,
});

const normalAttack = mkNormal(0.4, {
    pumpWith: '+X',
    damage: 10,
    pump: (rank) => rankValue(rank),
    comboType: <CantCombo/>,
    kd: false,
    maxCombo: (rank) => rank + '+',
    maxDamage: (rank) => 10 + rankValue(rank),
});

export const onimaru = {
    summary: {
        name: 'Onimaru',
        fullName: 'General Onimaru',
        title: 'Wartime Strategist',
        hitPoints: 90,
        maxCombo: 1,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        attackDamage: <span>10+x</span>,
        throwSpeed: <span>x.2 <CantCombo/></span>,
        throwDamage: <span>x+4 (+2 any)</span>,
        attacks: [3, 4, 5, 6, 8, 'T', 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [2, 5, 6, 7, 9,],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Guard Crush',
                text: <div>
                    Your normal attacks cannot be blocked by cards of equal or lower rank,
                    except by named blocks with special abilities."
                </div>
            },
        ],
        cardAbilities: [
            {
                rank: 5,
                name: 'General\'s Armor',
                timing: 'During Combat',
                text: <div>
                    This attack can't be interrupted by normal attacks except those that knock down.
                    (If it's hit by a faster (non-knockdown) normal attack, the opponent can't combo.
                    This hits afterwards and wins combat.)
                </div>
            },
            {
                rank: 9,
                name: 'Final Authority',
                timing: 'Combat Reveal',
                text: <div>
                    If you combat-revealed a face card you may discard a card of the same suit as
                    your attack (and this card) to make your face card beat all other attacks
                    (and tie with other Final Authority attacks) and knock down. This can't be countered.
                </div>
            },
            {
                rank: 'A',
                name: 'Clockwork Formation',
                timing: 'During Combat',
                text: <div>
                    If you won combat and Clockwork Soldiers deals damage, attach it and up to three Aces
                    to Onimaru. Whenever you hit with a face card, discard one attached Ace to deal 15 damage.
                    Whenever your face card is blocked, discard one attached Ace.
                </div>
            }
        ],
    },
    attacks: [
        normalAttack(3),
        normalAttack(4),
        normalAttack(5),
        normalAttack(6),
        normalAttack(8),
        normalAttack('T'),
        {
            speed: 3.4, rank: 'J', name: 'Divide and Conquer', pumpWith: '+J',
            damage: 10, pump: 10, chip: 1, comboPts: 1, comboType: <CantCombo/>,
            maxCombo: 'J+', maxDamage: 20,
        },
        {
            speed: 0.8, rank: 'Q', name: 'Rising Sword',
            damage: 10, chip: 2, comboPts: 1, comboType: <CantCombo/>,
        },
        {
            speed: 4.0, rank: 'K', name: 'Spirit Fire', pumpWith: '+K+K+K',
            damage: 8, pump: 9, chip: 3, comboPts: 1, comboType: <CantCombo/>,
            maxCombo: 'K+++', maxDamage: 35, goodCombo: 'K+', goodDamage: 17,
        },
        {
            speed: 1.0, rank: 'A', name: 'Clockwork Soldiers',
            damage: 1, comboType: <CantCombo/>,
        },
        {
            speed: 1.4, rank: 'AA', name: 'Martial Law',
            damage: 20, chip: 2, comboPts: 1, comboType: <CantCombo/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};
