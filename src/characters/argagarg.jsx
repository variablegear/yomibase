import React from 'react';
import {Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.4);

const normalThrow = mkNormal(0.8, {
    damage: 6,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>K+>K+',
    maxDamage: 27,
    goodCombo: (rank) => 't' + rank + '>5>6',
    goodDamage: 17,
});

export const argagarg = {
    theme: {
        // primary: #5FC19B
        text: '#daf1e8',
        headshot: require('../../images/argagarg.jpg'),
    },
    summary: {
        name: 'Argagarg',
        fullName: 'Argagarg Garg',
        title: 'Water Shaman',
        hitPoints: 85,
        maxCombo: 3,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.8 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [5, 6, 7, 8, 9, 'T', 'A'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Hex of Murkwood',
                text: "At the end of each turn, if you weren't knocked down this turn, the opponent takes 2 damage.",
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Protective Ward',
                timing: 'Combat Reveal',
                text: "Draw a card. This turn, the opponent's attacks and throws are Enders \
                       that can't be pumped (or tag comboed from in 2v2).",
            },
            {
                rank: 'T',
                name: 'Crash and Flow',
                timing: 'Reaction',
                text: "Counter an ability. The opponent who played it draws a card. If it was \
                       played from hand, put it on the bottom of their deck. (Prevent and undo \
                       the ability and the opponent discards the card if played from hand. You \
                       can't counter Aces, Jokers or character cards.)",
            },
            {
                rank: 'A',
                name: 'Bubble Shield',
                timing: 'During Combat',
                text: "If this blocks an attack or Joker, draw a card and this gets: Ongoing. \
                       Your Hex of Murkwood deals an extra 2 damage per turn. When you get hit \
                       with an attack or throw, take no damage, end combat and discard this.",

            }
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>K+>K+', maxDamage: 22, goodCombo: '2>3>4', goodCombo: 9}),
        normalAttack(3, {maxCombo: '3>K+>K+', maxDamage: 23, goodCombo: '3>4>5', goodCombo: 12}),
        normalAttack(4, {maxCombo: '4>K+>K+', maxDamage: 24, goodCombo: '4>5>6', goodCombo: 15}),
        normalAttack(5, {maxCombo: '5>K+>K+', maxDamage: 25, goodCombo: '5>6>J', goodCombo: 18}),
        normalAttack(6, {maxCombo: '6>K+>K+', maxDamage: 26, goodCombo: '6>K+>5', goodCombo: 21}),
        {
            speed: 2.4, rank: 'J', name: 'Flying Fish',
            damage: 7, chip: 2, comboPts: 1, comboType: <Ender/>,
        },
        {
            speed: 2.2, rank: 'Q', name: 'Water Spirit',
            damage: 9, chip: 2, comboPts: 2, comboType: <Ender/>,
        },
        {
            speed: 3.2, rank: 'K', name: 'Sparkling Bubble', pumpWith: '+K',
            damage: 6, pump: 4, chip: 3, comboPts: 1, comboType: <Linker/>,
            maxCombo: 'K+>K+>J', maxDamage: 27, goodCombo: 'K>5>6', goodDamage: 17,
        },
        {
            speed: 0.2, rank: 'AA', name: 'Blowfish Spikes',
            damage: 16, chip: 2, comboPts: 2, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

argagarg.variants = {
    EX: Object.assign({}, argagarg, {
        summary: Object.assign({}, argagarg.summary, {
            name: <span>EX {argagarg.summary.name}</span>,
            fullName: <span>EX {argagarg.summary.fullName}</span>,
            innateAbilities: [
                {
                    name: 'Curse of Murkwood',
                    text: <span>
                        At the end of each turn you weren't knocked down,
                        the opponent takes 5 damage.
                        (This can be boosted by Bubble Shield.)
                    </span>
                },
            ],
            cardAbilities: argagarg.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Raging River',
                    timing: 'During Combat',
                    text: <span>
                        If this deals damage or block damage, players can't
                        throw next turn. (Throws will do nothing and be discarded.)
                    </span>
                },
            ]),
            attacks: argagarg.summary.attacks.concat(['D']),
        }),
        attacks: argagarg.attacks.concat([
            {
                speed: 4.0, rank: 'D', name: 'Raging River', damage: 6, chip: 2,
                comboPts: 1, comboType: <Ender/>
            },
        ]),
    }),
};
