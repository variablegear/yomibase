import React from 'react';
import {Ender, Starter, Linker, ComboDetails} from '../combo.jsx';
import {mkNormal, overrideMoves} from '../move.jsx';
import {EX, First} from '../editions.jsx';

const normalAttack = mkNormal(0.6);

const normalThrow = mkNormal(0.8, {
    damage: 8,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>AA',
    maxDamage: 28,
    goodCombo: (rank) => 't' + rank + '>J',
    goodDamage: 15,
});

export const degrey = {
    theme: {
        // primary: #F8508B
        text: 'linear-gradient(#fdcedf, #fdcedf)',
        headshot: require('../images/degrey.jpg'),
    },
    summary: {
        name: 'DeGrey',
        fullName: 'Jefferson DeGrey',
        title: 'Ghostly Diplomat',
        hitPoints: 90,
        maxCombo: 4,
        attackSpeed: <span>x.6 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.8 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 8,
        attacks: [2, 3, 5, 6, 7, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [4, 5, 6, 8, 9, 'T'],
        dodges: [2, 3, 4, 'A'],
        innateAbilities: [
            {
                name: 'Moral High Ground',
                text: <span>
                    If your opponent has more cards in hand than you, your
                    special and super attacks deal extra damage equal
                    to the difference.<br />
                 <i>(Compute this bonus after your combo is finished. Special attacks
                    are Jacks, Queeens, and Kings. Super attacks are Aces.)</i>
                </span>
            },
        ],
        // quote: "By silver tongue or mighty fists, I will get justice for all."
        cardAbilities: [
            {
                rank: 7,
                name: 'Point, Counterpoint',
                timing: 'During Combat',
                text: 'Discard a card to rotate this 180 degrees.',
            },
            {
                rank: 4,
                name: 'Troublesome Rhetoric',
                timing: 'Draw Phase',
                text: (
                    'Choose attack, block, throw, or dodge. If the opponent ' +
                    'combat-reveals that option this turn, gain 12 life.'
                )
            },
            {
                rank: 'A',
                name: 'Ghost Riposte',
                timing: 'During Combat',
                text: (
                    'You may hit back with a full combo if you dodge an attack ' +
                    'or Joker with this. Return this card to your hand when combat ' +
                    'ends unless you were thrown.'
                )
            }
        ],
    },
    attacks: [
        normalAttack(2, {
            name: 'Spectral Pull', damage: 4,
            maxCombo: '2>3>AA', maxDamage: 28, goodCombo: '2>3>J', goodDamage: 15,
        }),
        normalAttack(3, {
            name: 'Spectral Push', damage: 4,
            maxCombo: '3>AA', maxDamage: 24, goodCombo: '3>J', goodDamage: 11,
        }),
        normalAttack(5, {maxCombo: '5>6>AA', maxDamage: 31, goodCombo: '5>6>J', goodDamage: 18 }),
        normalAttack(6, {maxCombo: '6>7>AA', maxDamage: 33, goodCombo: '6>7>J', goodDamage: 20 }),
        normalAttack(7, {maxCombo: '7>AA', maxDamage: 27, goodCombo: '7>K', goodDamage: 17 }),
        {
            speed: 2.4, rank: 'J', name: 'Daggerfall Thrust',
            damage: 7, chip: 2, comboPts: 1, comboType: <Ender/>,
        },
        {
            speed: 7.0, rank: 'Q', name: 'Pilebunker',
            damage: 14, chip: 4, comboPts: 2, comboType: <Starter/>, kd: true,
            maxCombo: 'Q>AA', maxDamage: 34, goodCombo: 'Q>6>J', goodDamage: 27,
        },
        {
            speed: 0.2, rank: 'K', name: 'Spirit Justice',
            damage: 10, chip: 2, comboPts: 2, comboType: <Ender/>,
        },
        {
            speed: 1.2, rank: 'AA', name: 'Final Arbiter',
            damage: 20, chip: 2, comboPts: 2, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

degrey.variants = {
    EX: Object.assign({}, degrey, {
        summary: Object.assign({}, degrey.summary, {
            name: <span>EX {degrey.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Moral Mountain',
                    text: <span>
                        If your opponent has more cards in hand than you, your
                        attacks deal extra damage equal to the difference. This bonus
                        damage can't be prevented with Combo Escape Jokers.
                        (Compute this bonus after your combo is finished.)
                    </span>
                },
            ],
            // quote: "Getting punched by justice never hurt more."
            cardAbilities: degrey.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Ghostly Force',
                    timing: 'During Combat',
                    text: <span>
                        When you hit the opponent with Ghostly Force,
                        choose whether they draw a card or discard a card.
                    </span>
                },
            ]),
            attacks: degrey.summary.attacks.concat(['D']),
        }),
        attacks: overrideMoves(degrey.attacks, [
            {rank: '2', name: 'Spectral Pull',
             maxCombo: '2>D>7>D>D>D>AA', maxDamage: 55, goodCombo: '2>D>5>6>J', goodDamage: 28},
            {rank: '3', name: 'Spectral Push',
             maxCombo: '3>D>7>D>D>D>AA', maxDamage: 55, goodCombo: '3>D>5>6>J', goodDamage: 28},
            {rank: '5', maxCombo: '5>D>7>D>D>D>AA', maxDamage: 56, goodCombo: '5>D>5>6>J', goodDamage: 29},
            {rank: '6', maxCombo: '6>7>D>D>D>D>AA', maxDamage: 57, goodCombo: '6>D>5>6>J', goodDamage: 30},
            {rank: 'Q', name: 'Pilebunker', maxCombo: 'Q>D>D>D>D>AA', maxDamage: 64},
        ]).concat([
            {
                speed: 2.4, rank: 'D', name: 'Ghostly Force', damage: 6, chip: 2,
                comboType: <Linker/>, comboPts: 0,
                maxCombo: 'D>7>D>7>D>D>AA', maxDamage: 58, goodCombo: 'D>5>6>J', goodDamage: 24
            },
        ]),
    }),
    FirstEd: Object.assign({}, degrey, {
        summary: Object.assign({}, degrey.summary, {
            name: <span>1<sup>st</sup> Ed. {degrey.summary.name}</span>,
            edition: First,
            innateAbilities: [
                {
                    name: 'Moral High Ground',
                    text: <span>
                        If your opponent has more cards in hand than you, your
                        face cards deal extra damage equal to the difference.<br />
                     <i>(Compute this bonus after your combo is finished.)</i>
                    </span>
                },
            ],
            // quote: "By silver tongue or by blood-letting, I will get justice for all."
            cardAbilities: [
                {
                    rank: 7,
                    name: 'Point, Counterpoint',
                    timing: null,
                    text: <span>
                        If you play this card as a face down combat card, after
                        combat cards are revealed you may discard a card to
                        rotate this card 180 degrees.
                    </span>
                },
                {
                    rank: 4,
                    name: 'Troublesome Rhetoric',
                    timing: null,
                    text: <span>
                        After the draw phase, you may discard a card to choose:
                        attack, block, throw, or dodge. If the opponent reveals
                        that option in combat this turn, gain 12 life.
                    </span>
                },
                {
                    rank: 'A',
                    name: 'Ghost Riposte',
                    timing: null,
                    text: <span>
                        When you dodge an attack or Joker with Ghost Riposte,
                        you may hit back with a full combo. Return this card to
                        your hand at the end of combat unless you were thrown.
                    </span>
                }
            ],
        }),
    }),
};
