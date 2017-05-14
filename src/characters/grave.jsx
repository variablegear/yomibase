import React from 'react';
import {Ender, Linker, Starter, CantCombo, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.6);

const normalThrow = mkNormal(0.6, {
    damage: 7,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>K+',
    maxDamage: 21,
    goodCombo: (rank) => 't' + rank + '>4>5',
    goodDamage: 16,
});

export const grave = {
    theme: {
        // primary: #688BEF
        text: '#d1dcfa',
        headshot: require('../../images/grave.jpg'),
    },
    summary: {
        name: 'Grave',
        fullName: 'Grave Stormborne',
        title: 'Wind Warrior',
        hitPoints: 90,
        maxCombo: 4,
        attackSpeed: <span>x.6 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.6 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 7,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Knowing the Opponent',
                text: <span>
                    When you block an attack, you may reveal a card from
                    your hand. If you combat-reveal that card next turn but
                    don't win combat with it, draw a card. If you do win
                    combat with it, search your deck or discard pile for a
                    Queen. <i>(Shuffle your deck if you searched it.)</i>
                </span>
            },
        ],
        // quote: "My skills improve every day...do yours?"
        cardAbilities: [
            {
                rank: 7,
                name: 'Martial Mastery',
                timing: 'Draw Phase',
                text: 'Draw 2 cards, then discard a card, then the opponent reveals his hand.',
            },
            {
                rank: 'T',
                name: 'Mental Toughness',
                timing: 'Reaction',
                text: <span>Discard a face card (and this card) to counter an ability. <i>(Prevent
                    and undo the ability and the opponent discards the card if played from hand.
                    You can't counter Aces, Jokers or character cards).</i>
                </span>
            },
            {
                rank: 'J',
                name: 'Lightning Trap',
                timing: 'During Combat',
                text: 'When you deal block damage with Lightning Cloud, return this card \
                       to your hand and the opponent doesn\'t draw a card from blocking.',
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>AAA', maxDamage: '47', goodCombo: '2>3>4>J', goodDamage: 17}),
        normalAttack(3, {maxCombo: '3>AAA', maxDamage: '48', goodCombo: '3>4>5>J', goodDamage: 20}),
        normalAttack(4, {maxCombo: '4>AAA', maxDamage: '49', goodCombo: '4>5>6>J', goodDamage: 23}),
        normalAttack(5, {maxCombo: '5>AAA', maxDamage: '50', goodCombo: '5>K+>J', goodDamage: 27}),
        normalAttack(6, {maxCombo: '6>AAA', maxDamage: '51', goodCombo: '6>K+>J', goodDamage: 28}),
        {
            speed: 2.4, rank: 'J', name: 'Lightning Cloud', damage: 8, chip: 3,
            comboPts: 1, comboType: <Ender/>,
        },
        {
            speed: 0.0, rank: 'Q', name: 'Dragonheart', damage: 10, chip: 2,
            comboPts: 3, comboType: <Ender/>,
        },
        {
            speed: 2.2, rank: 'K', pumpWith: '+K', name: 'Whirlwind',
            damage: 7, pump: 7, chip: 1, comboPts: 2, comboType: <Linker/>,
            maxCombo: 'K+>6>J', maxDamage: 29, goodCombo: 'K+>A', goodDamage: 26,
        },
        {
            speed: 1.0, rank: 'A', name: 'True-Spark Arc', damage: 12, chip: 3,
            comboPts: 2, comboType: <Ender/>,
        },
        {
            speed: 0.4, rank: 'AAA', name: 'True Power of Storms', damage: 45, chip: 1,
            comboPts: 3, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

grave.variants = {
    EX: Object.assign({}, grave, {
        summary: Object.assign({}, grave.summary, {
            name: <span>EX {grave.summary.name}</span>,
            fullName: <span>EX {grave.summary.fullName}</span>,
            innateAbilities: [
                {
                    name: 'True Dragonheart',
                    text: <span>
                        Whenever you win combat, you may fetch a Queen from your discard pile.
                        Your Queen can combo into True Power of Storms, but your super does only
                        30 damage when you do.
                    </span>
                },
            ],
            // quote: "Every time I thought I achieved mastery, I improved some more."
            cardAbilities: grave.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Stormborne Sword',
                    timing: 'During Combat',
                    text: 'Overhead Slice is unblockable.',
                },
            ]),
            attacks: grave.summary.attacks.concat(['D']),
        }),
        attacks: grave.attacks.concat([
            {
                speed: 7.0, rank: 'D', name: 'Overhead Slice', damage: 15, comboType: <CantCombo/>
            },
            {
                speed: 2.0, rank: 'D', name: 'Rapid Poke', pumpWith: '+X+X',
                damage: 4, pump: 4, chip: 1, comboPts: 1, comboType: <Linker/>,
            },
        ]),
    }),
    
    FirstEd: Object.assign({}, grave, {
        summary: Object.assign({}, grave.summary, {
            name: <span>1<sup>st</sup> Ed. {grave.summary.name}</span>,
            fullName: <span>1<sup>st</sup> Edition {grave.summary.fullName}</span>,
            innateAbilities: [
                {
                    name: 'Knowing the Opponent',
                    text: <span>
                        When you block an attack, you may reveal a card from
                        your hand. If you play that card as your face down
                        combat card next turn, when you reveal it in combat
                        you may search your deck or discard pile for a
                        Queen, reveal it, put it into your hand, then shuffle
                        your deck.
                    </span>
                },
            ],
            cardAbilities:[
                {
                    rank: 7,
                    name: 'Martial Mastery',
                    timing: null,
                    text: 'After the draw phase, you may discard this card to draw 2 cards, \
                           then discard a card, then the opponent reveals his hand.',
                },
                {
                    rank: 'T',
                    name: 'Mental Toughness',
                    timing: null,
                    text: <span>
                        Discard this card to counter the effect of any ability not on Aces,
                        Jokers or character cards. <i>(Play this after the opponent spends any
                        activation costs, then prevent and undo that entire ability. The opponent
                        discards the ability card if it was played from his hand.)</i>
                    </span>
                },
                {
                    rank: 'J',
                    name: 'Lightning Trap',
                    timing: null,
                    text: 'When you deal block damage with Lightning Cloud, return this card \
                           to your hand and the opponent doesn\'t draw a card from blocking.',
                },
            ],
        }),
    }),
};
