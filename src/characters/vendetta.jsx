import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails, KD} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {Note, Icon, Recycles} from '../note.jsx';


const normalAttack = mkNormal(0.2);

const normalThrow = mkNormal(0.4, {
    damage: 7,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>J+++',
    maxDamage: 27,
    goodCombo: (rank) => 't' + rank + '>AA',
    goodDamage: 25,
});

function Speed1OnKD(props) {
    return <Note
        text='Speed 1.0 when opponent is knocked down'
        icon={<span><KD/><Icon>{'\u21D2'}</Icon><Icon>{'\uD83C\uDFC3'}</Icon>1.0</span>}
    />;
}

const kingNotes = <span><Speed1OnKD/>, <Recycles text="Returns to hand on hit"/></span>;

export const vendetta = {
    theme: {
        // primary: #7EAC3F, #524825
        text: 'linear-gradient(#e7f1da 75%, #efebdc)',
        headshot: require('../../images/vendetta.jpg'),
    },
    summary: {
        name: 'Vendetta',
        fullName: 'Vendetta',
        title: 'Undead Assassin',
        hitPoints: 75,
        maxCombo: 4,
        attackSpeed: <span>x.2 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.4 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 7,
        attacks: [2, 3, 5, 6, 7, 'J', 'Q', 'K', 'A'],
        throws: [4, 7, 8, 9, 'K'],
        blocks: [5, 6, 8, 9, 'T'],
        dodges: [2, 3, 4, 'T'],
        innateAbilities: [
            {
                name: 'Carrion Reach',
                text: 'Whenever your normal attack is blocked or wins combat, \
                return it to your hand.',
            },
        ],
        cardAbilities: [
            {
                rank: 8,
                name: 'Acrobatics',
                timing: 'Combat Reveal',
                text: "Discard a dodge (and this card) to cancel combat (discard all combat cards \
                and no combat damage is dealt). Players skip forward to next turn's combat. \
                Next turn your attacks and throws are 2 speed slower and you can't play Acrobatics. \
                (You can't play this from the bench or while assisting.)",
            },
            {
                rank: 'K',
                name: 'Wall Dive Loop',
                timing: 'During Combat',
                text: "While the opponent is knocked down, both sides of this card are speed 1.0. \
                When you hit with either side of this card, return it to your hand.",
            },
        ],
    },
    attacks: [
        {
            speed: 2.2, rank: '2', name: 'Pincer Poke', damage: '4',
            maxCombo: '2>Q>J+++', maxDamage: 31, goodCombo: '2>Q>6>7', goodDamage: 24,
        },
        {
            speed: 3.2, rank: '3', name: 'Pincer Stab', damage: '4',
            maxCombo: '3>Q>J+++', maxDamage: '31', goodCombo: '3>Q>6>7', goodDamage: '24',
        },
        normalAttack(5, {maxCombo: '5>Q>J+++', maxDamage: 32, goodCombo: '5>6>7', goodDamage: 18}),
        normalAttack(6, {maxCombo: '6>Q>J+++', maxDamage: 33, goodCombo: '6>Q>6>7', goodDamage: 26}),
        {
            speed: 3.0, rank: '7', name: 'Claw Trip', damage: '7',
            comboType: <Ender/>, kd: true,
        },
        {
            speed: 2.4, rank: 'J', name: 'Tumbling Strike', pumpWith: '+X+X+X',
            damage: '8', pump: '4', chip: '3', comboPts: 2, comboType: <Ender/>, kd: false,
        },
        {
            speed: 3.0, rank: 'Q', name: 'Frost Web',
            damage: '7', chip: '2', comboPts: 1, comboType: <Linker/>, kd: false,
            maxCombo: 'Q>Q>J+++', maxDamage: 34, goodCombo: 'Q>5>6>7', goodDamage: '25',
        },
        {
            speed: 3.2, rank: 'K', name: 'Diving Pincer Slice',
            damage: '12', chip: '1', comboPts: 2, comboType: <Starter/>, kd: false,
            maxCombo: 'K>J+++', maxDamage: '32', goodCombo: 'K>Q>7', goodDamage: '26',
            notes: kingNotes,
        },
        {
            speed: 2.0, rank: 'AA', name: 'Maximum Ven',
            damage: '18', chip: '4', comboPts: 2, comboType: <Ender/>, kd: false,
        },
        {
            speed: 1.0, rank: 'AAA', name: 'Surgical Strike',
            damage: '36', comboType: <CantCombo/>, kd: false,
        },
    ],
    throws: [
        {
            speed: '8.8', rank: '4', name: 'Kidney Shot', damage: '8',
            comboPts: 1, comboType: <Starter/>, kd: false,
            maxCombo: 't4>Q>J+++', maxDamage: '35', goodCombo: 't4>5>6>7', goodDamage: '26',
        },
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        {
            speed: '11.0', rank: 'K', name: 'Wall Dive Suplex', damage: '12',
            comboType: <CantCombo/>, kd: true, notes: kingNotes,
        }
    ],
};
