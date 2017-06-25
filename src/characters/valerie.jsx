import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {EX} from '../editions.jsx';

const normalAttack = mkNormal(0.4);

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

export const valerie = {
    theme: {
        // primary: #58BCE0, #88C067
        text: 'linear-gradient(#d4eef7, #e3f0db)',
        headshot: require('../../images/valerie.jpg'),
    },
    summary: {
        name: 'Valerie',
        fullName: 'Valerie Rose',
        title: 'Manic Painter',
        hitPoints: 80,
        maxCombo: 6,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.2 <ComboDetails points={3} max={3} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Agile Hands',
                text: 'You can combo normal attacks in any order. (Out-of-order normals count \
                        as chain combos for you and let you search for Aces during the Power Up phase.)',
            },
        ],
        // quote: "Some would have me apologize for my passions, but I see the world a bit differently."
        cardAbilities: [
            {
                rank: 7,
                name: 'Bold Strokes',
                timing: 'Combat Reveal',
                text: 'Your normal attacks do +1 damage each this turn. Draw a card.',
            },
            {
                rank: 'T',
                name: 'Burst of Speed',
                timing: 'Combat Reveal',
                text: 'The attack or throw you combat-revealed is 2 speed faster, to a minimum \
                        of speed 1.0. (Does stack if you play multiples.)',
            },
            {
                rank: 'K',
                name: 'Splash of Color',
                timing: 'During Combat',
                text: 'This card can only be blocked by a block of the same color (red/black).',
            },
            {
                rank: 'A',
                name: 'Unbounded Creativity',
                timing: 'During Combat',
                text: 'When you hit with either side of this Ace, draw a card.',
            },
            {
                rank: 'AA',
                name: 'Unbounded Creativity',
                timing: 'During Combat',
                text: 'When you hit with either side of this Ace, draw a card.',
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
            speed: 2.2, rank: 'J', name: 'Three Colors', pumpWith: '+F+F',
            damage: 7, pump: 7, chip: 2, comboPts: 2, comboType: <Ender/>,
            maxCombo: 'J++', maxDamage: 21, goodCombo: 'J+', goodDamage: 14,
        },
        {
            speed: 0.2, rank: 'Q', name: 'Crimson Passion', pumpWith: '+X+X',
            damage: 8, pump: 3, chip: 1, comboPts: 3, comboType: <Ender/>,
            maxCombo: 'Q++', maxDamage: 14, goodCombo: 'Q+', goodDamage: 11,
        },
        {
            speed: 3.4, rank: 'K', name: 'Flying Rainbow Strike',
            damage: 6, chip: 2, comboPts: 1, comboType: <Linker/>,
            maxCombo: 'K>6>6>6>J++', maxDamage: 45, goodCombo: 'K>3>4>4>5>6', goodDamage: 28,
        },
        {
            speed: 1.0, rank: 'A', name: 'Chromatic Orb',
            damage: 10, chip: 3, comboType: <CantCombo/>,
        },
        {
            speed: 1.2, rank: 'AA', name: 'Masterpiece',
            damage: 16, chip: 3, comboPts: 2, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

valerie.variants = {
    EX: Object.assign({}, valerie, {
        summary: Object.assign({}, valerie.summary, {
            name: <span>EX {valerie.summary.name}</span>,
            edition: EX,
            maxCombo: 8,
            innateAbilities: [
                {
                    name: 'Manic Hands',
                    text: <span>
                        When you combat-reveal a normal attack, draw a card.
                        You can combo normal attacks in any order.
                        (Out-of-order normals count as chain combos for you and let
                        you search for Aces during the Power Up phase.)
                    </span>
                },
            ],
            cardAbilities: valerie.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Rainbow Disc',
                    timing: 'During Combat',
                    text: <span>
                        This attack can't be interrupted by attacks except those that
                        knock down. (If it's hit by a faster (non-knockdown) attack, the
                        opponent can't combo. This hits afterwards and wins combat.)
                    </span>
                },
            ]),
            attacks: valerie.summary.attacks.concat(['D']),
        }),
        attacks: valerie.attacks.concat([
            {
                speed: 3.0, rank: 'D', name: 'Rainbow Disc', damage: 6, chip: 2,
                comboPts: 2, comboType: <Starter/>, kd: true,
            },
        ]),
    }),
    
    FirstEd: Object.assign({}, valerie, {
        summary: Object.assign({}, valerie.summary, {
            edition: First,
            innateAbilities: [
                {
                    name: 'Agile Hands',
                    text: <span>
                        You can combo normal attacks in any order. This ability
                        can not be countered. <i>(Out-of-order chain combos still
                        let you search for Aces during the Power Up phase.)</i>
                    </span>
                },
            ],
            // quote: "I can love whoever I want in Rook's Land of Do-As-You-Please."
            cardAbilities: [
                {
                    rank: 7,
                    name: 'Bold Strokes',
                    timing: null,
                    text: <span>
                        After combat cards are revealed, you may discard this card to
                        give your normal attacks +1 damage each this turn. Draw a card.
                    </span>
                },
                {
                    rank: 'T',
                    name: 'Burst of Speed',
                    timing: null,
                    text: <span>
                        After combat cards are revealed, you may discard this card to
                        make your attack or throw 2 speed faster. <i>(You may discard more
                        than one 10 to stack this effect. 0 is the fastest possible speed.)</i>
                    </span>
                },
                {
                    rank: 'A',
                    name: 'Unbounded Creativity',
                    timing: null,
                    text: 'When you hit the opponent with an Ace attack, draw a card.',
                },
                {
                    rank: 'AA',
                    name: 'Unbounded Creativity',
                    timing: null,
                    text: 'When you hit the opponent with an Ace attack, draw a card.',
                },
            ],
        }),
    }),
};
