import React from 'react';
import {CantCombo, Ender, Linker, ComboDetails, KD} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {Note, Icon} from '../note.jsx';

const normalAttack = mkNormal(0.3, {
    notes: <Speed1OnKD/>,
});

const normalThrow = mkNormal(0.3, {
    damage: 6,
    comboPts: 2,
    comboType: <Linker/>,
    kd: false,
    maxCombo: (rank) => 't' + rank + '>AA',
    maxDamage: 25,
    goodCombo: (rank) => 't' + rank + '>9>J',
    goodDamage: 24,
});

function Speed1OnKD(props) {
    return <Note
        text='Speed 1.0 when opponent is knocked down'
        icon={<span><KD/><Icon>{'\u21D2'}</Icon><Icon>{'\uD83C\uDFC3'}</Icon>1.0</span>}
    />;
}

export const zane = {
    theme: {
        // primary: #F98CF5, #7ACC77
        text: 'linear-gradient(#fccffb, #dbf1da)',
        headshot: require('../../images/zane.jpg'),
    },
    summary: {
        name: 'Zane',
        fullName: 'Captain Zane',
        title: 'Blood Guard Anarchist',
        hitPoints: 85,
        maxCombo: 4,
        attackSpeed: <span>x.3 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.4 <ComboDetails points={2} max={2} kd={false}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 6, 7, 9, 'J', 'Q', 'K', 'A'],
        throws: [5, 7, 8, 9, 'T'],
        blocks: [2, 4, 6, 8],
        dodges: [2, 3, 4, 'T'],
        innateAbilities: [
            {
                name: 'Shenanigans',
                text: "Once per turn, when you could play a combo card, reveal two cards \
                       from the top of your deck and use up to one of them in your combo. \
                       Discard the unused card(s).",
            },
            {
                name: 'Meaty Attacks',
                text: "While your opponent is knocked down, your normal attacks are speed 1.0.",
            },
        ],
        cardAbilities: [
            {
                rank: 4,
                name: 'Creator and Destroyer',
                timing: 'Full Combo',
                text: "Whenever you use all your combo points or hit with a \"Can't Combo\" move, \
                       you may discard this card to remake the opponent's hand (they reveal their hand, \
                       shuffle it, put it on the bottom of their deck, then draw that many cards).",
            },
            {
                rank: 'K',
                name: 'Crash Bomb',
                timing: 'During Combat',
                text: "This can't be interrupted. (If it's hit by a faster attack, the opponent \
                       can't combo. This hits afterwards and wins combat.) If this is blocked, \
                       you take 5 damage and are knocked down.",
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>Q>AA', maxDamage: 28, goodCombo: '2>Q>9>J', goodDamage: 27}),
        normalAttack(3, {maxCombo: '3>Q>AA', maxDamage: 29, goodCombo: '3>Q>9>J', goodDamage: 28}),
        normalAttack(6, {maxCombo: '6>Q>AA', maxDamage: 32, goodCombo: '6>Q>9>J', goodDamage: 31}),
        normalAttack(7, {maxCombo: '7>Q>AA', maxDamage: 33, goodCombo: '7>Q>9>J', goodDamage: 32}),
        normalAttack(9, {maxCombo: '9>Q>AA', maxDamage: 35, goodCombo: '9>Q>9>J', goodDamage: 34}),
        {
            speed: 2.8, rank: 'J', name: 'Anarch Crusher',
            damage: '9', chip: '4', comboPts: 1, comboType: <Ender/>, kd: true,
        },
        {
            speed: 4.0, rank: 'Q', name: 'Shoulder Ram',
            damage: '7', chip: '2', comboPts: 1, comboType: <Linker/>, kd: false,
            maxCombo: 'Q>9>AA', maxDamage: 35, goodCombo: 'Q>9>Q>J', goodDamage: 7+9+7+19,
        },
        {
            speed: 5.0, rank: 'K', name: 'Crash Bomb',
            damage: '10', chip: '5', comboType: <CantCombo/>, kd: true,
        },
        {
            speed: 1.2, rank: 'AA', name: 'Slipstream Phase',
            damage: '19', chip: '2', comboPts: 2, comboType: <Ender/>, kd: false,
        },
        {
            speed: 0.0, rank: 'AAAA', name: 'Maximum Anarchy',
            damage: '50', chip: '5', comboType: <CantCombo/>, kd: false,
        },
    ],
    throws: [
        normalThrow(5),
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

zane.variants = {
    EX: Object.assign({}, zane, {
        summary: Object.assign({}, zane.summary, {
            name: <span>EX {zane.summary.name}</span>,
            fullName: <span>EX {zane.summary.fullName}</span>,
            innateAbilities: [
                {
                name: 'More Shenanigans',
                text: <span>
                        Once per turn, when you could play a combo card, reveal
                        three cards from the top of your deck and you may use
                        them in your combo. Discard the unused card(s).
                    </span>
                },
                {
                    name: 'Meaty Attacks',
                    text: "While your opponent is knocked down, your normal attacks are speed 1.0.",
                },
            ],
            cardAbilities: zane.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'A Little Shake-Up',
                    timing: 'Draw Phase',
                    text: <span>
                        This turn you can't block. Your opponent discards their combat
                        card if it's the same suit as yours. Your attacks are 2 speed
                        faster (to a minimum of 1.0) and deal +2 damage each.
                    </span>
                },
            ]),
            attacks: zane.summary.attacks.concat(['D']),
        }),
        attacks: zane.attacks.concat([
            {
                speed: 2.3, rank: 'D', name: 'Dragonish Flight', damage: 9, chip: 2,
                comboPts: 2, comboType: <Linker/>
            },
        ]),
    }),
};
