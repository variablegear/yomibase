import React from 'react';
import {Note, Icon} from '../note.jsx';
import {CantCombo, Ender, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal, Block} from '../move.jsx';

const normalAttack = mkNormal(0.8);

const normalThrow = mkNormal(0.0, {
    damage: 8,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>8',
    maxDamage: 16,
    goodCombo: (rank) => 't' + rank + '>6',
    goodDamage: 14,
});

export const troq = {
    theme: {
        // primary: #482310, #C59D7A
        text: 'linear-gradient(#f6e1d6, #f0e5dc)',
        headshot: require('../../images/troq.jpg'),
    },
    summary: {
        name: 'Troq',
        fullName: 'Troq Bashar',
        title: 'Well-meaning Beast',
        hitPoints: 95,
        maxCombo: 3,
        attackSpeed: <span>x.8 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.0 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 8,
        attacks: [4, 5, 6, 7, 8, 'J', 'Q', 'A'],
        throws: [2, 3, 4, 5, 9, 'T', 'K', 'A'],
        blocks: [2, 3, 6, 7, 8],
        dodges: [9, 'T'],
        innateAbilities: [
            {
                name: 'Giant Growth',
                text: 'Whenever you block an attack or Joker, attach your block card to your \
                       character card, or discard it if two cards are already attached. Your \
                       normal attacks and normal throws do +1 damage for each attached card. \
                       (You still draw a card from blocking, as usual.)',
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 'T',
                name: 'War Stomp',
                timing: 'Draw Phase',
                text: 'If you are not knocked down, knock the opponent down, draw a card, and the \
                       opponent discards a card.',
            },
            {
                rank: 'J',
                name: 'Troq Armor',
                timing: 'During Combat',
                text: 'Neither side of this Jack can be interrupted by normal attacks. (If it\'s hit \
                       by a faster normal attack, the opponent can\'t combo. This hits afterwards and \
                       wins combat.)',
            },
            {
                rank: 'K',
                name: 'Lockhorn Skewer',
                timing: 'During Combat',
                text: 'This beats normal attacks with speed 5.0 or faster, but you still take damage \
                       from the normal attack.',
            },
            {
                rank: 'AAA',
                name: 'Beast Unleashed',
                timing: 'During Combat',
                text: 'When you attempt Beast Unleashed, return your attached block cards to your hand.',
            },
        ],
    },
    attacks: [
        normalAttack(4, {maxCombo: '4>AA', maxDamage: 24, goodCombo: '4>5>6', goodDamage: 15}),
        normalAttack(5, {maxCombo: '5>AA', maxDamage: 25, goodCombo: '5>6>7', goodDamage: 18}),
        normalAttack(6, {maxCombo: '6>AA', maxDamage: 26, goodCombo: '6>7>8', goodDamage: 21}),
        normalAttack(7, {maxCombo: '7>AA', maxDamage: 27, goodCombo: '7>8>J', goodDamage: 22}),
        normalAttack(8, {maxCombo: '8>AA', maxDamage: 28, goodCombo: '8>J', goodDamage: 18}),
        {
            speed: 2.2, rank: 'J', name: 'Bull Rush',
            damage: 7, chip: 2, comboPts: 1, comboType: <Ender/>,
        },
        {
            speed: 3.4, rank: 'J', name: 'Bull Charge',
            damage: 10, chip: 3, comboPts: 2, comboType: <Ender/>,
        },
        {
            speed: 0.8, rank: 'Q', name: 'Up Hawk',
            damage: 9, chip: '2', comboPts: 2, comboType: <Ender/>,
        },
        {
            speed: 1.0, rank: 'AA', name: 'Eagle Totem',
            damage: 20, chip: 2, comboPts: 2, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(2),
        normalThrow(3),
        normalThrow(4),
        normalThrow(5),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 2.4, rank: 'K', name: 'Lockhorn Skewer',
            damage: 15, comboPts: null, comboType: <CantCombo/>, kd: false,
        },
        {
            speed: 0.0, rank: 'AAA', name: 'Beast Unleashed',
            damage: 45, comboPts: null, comboType: <CantCombo/>, kd: false,
            notes: <Note
                text="Requires 2 attached blocks"
                icon={<Block><Icon>{'+\u26CA'}</Icon> >= 2</Block>}
            />,
        },
    ],
};

troq.variants = {
    EX: Object.assign({}, troq, {
        summary: Object.assign({}, troq.summary, {
            name: <span>EX {troq.summary.name}</span>,
            fullName: <span>EX {troq.summary.fullName}</span>,
            innateAbilities: [
                {
                    name: 'Gargantuan Growth',
                    text: <span>
                        Whenever you block an attack or Joker, attach your block
                        card to Troq, or discard it if two cards are already attached.
                        Your attacks and throws do +2 damage for each attached
                        card. (You still draw a card from blocking, as usual.)
                    </span>
                },
                {
                    name: 'Defense Mastery',
                    text: 'Opponents don\'t draw when you block their normal attacks.',
                },
            ],
            cardAbilities: troq.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Bullbuster',
                    timing: 'During Combat',
                    text: <span>
                        If you played Bullbuster in combat and didn't win combat,
                        return it to your hand.
                    </span>
                },
            ]),
            attacks: troq.summary.attacks.concat(['D']),
            throws: troq.summary.throws.concat(['D']),
        }),
        throws: troq.throws.concat([
            {speed: 8.0, rank: 'D', pumpWith: '+x+x', name: 'Bullbuster',
             damage: 10, pump: 5, comboType: <CantCombo/>,
             maxCombo: 'D++', maxDamage: 20, goodCombo: 'D+', goodDamage: '15'},
        ]),
    }),
};
