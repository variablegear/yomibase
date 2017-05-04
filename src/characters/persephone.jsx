import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.4);

const normalThrow = mkNormal(0.6, {
    damage: 7,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>6>J++',
    maxDamage: 28,
    goodCombo: (rank) => 't' + rank + '>AA',
    goodDamage: 23,
});

export const persephone = {
    theme: {
        // primary: #4B555E, #FFFFFF
        text: 'linear-gradient(#e3e6e9, #FFFFFF)',
        headshot: require('../../images/persephone.jpg'),
    },
    summary: {
        name: 'Persephone',
        fullName: 'Mistress Persephone',
        title: 'Nox Oracle',
        hitPoints: 75,
        maxCombo: 4,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.6 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 7,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'A'],
        throws: [7, 8, 9, 'T', 'K'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Dominance',
                text: "Whenever you knock down your opponent, you may fetch a non-Joker card from your discard pile (before you discard combat cards). If you also knocked them down last combat, fetch up to four non-Joker cards of different ranks instead.",
            },
        ],
        cardAbilities: [
            {
                rank: 9,
                name: 'Do As Told',
                timing: 'Reaction',
                text: "The opponent may take 10 damage to make their ability uncounterable. If they don't, counter that ability. (Prevent and undo the ability and the opponent discards the card if played from hand. You can't counter Aces, Jokers, or character cards.)",
            },
            {
                rank: 'T',
                name: 'Bare Your Soul',
                timing: 'Draw Phase',
                text: "Put the top 3 cards of the opponent's deck face up on the table. If there are more than 3 such face up cards, discard down to 3 (your choice). Whenever they would draw a card, you may choose one of those face up cards for them to draw instead. If you don't, they discard the face up cards. Whenever the opponent would shuffle their deck, they shuffle those cards back into it.",
            },
            {
                rank: 'A',
                name: "Mistress's Command",
                timing: 'Draw Phase',
                text: "If you won combat and Mistress's Command deals damage, you control the opponent's next turn until (and including) the combat-reveal. You can't control two turns in a row.\n(Look at their hand, you may play their abilities and their combat card. You control your own turn as usual.)",
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>3>4>J++', maxDamage: 24, goodCombo: '2>3>AA', goodDamage: 21}),
        normalAttack(3, {maxCombo: '3>4>5>J++', maxDamage: 27, goodCombo: '3>4>AA', goodDamage: 23}),
        normalAttack(4, {maxCombo: '4>5>6>J++', maxDamage: 30, goodCombo: '4>5>AA', goodDamage: 25}),
        normalAttack(5, {maxCombo: '5>6>AA', maxDamage: 27, goodCombo: '5>6>J++', goodDamage: 26}),
        normalAttack(6, {maxCombo: '6>AA', maxDamage: 22, goodCombo: '6>J++', goodDamage: 21}),
        {
            speed: 2.4, rank: 'J', name: 'Rapid Lashes', pumpWith: '+x+x',
            damage: '7', pump: '4', chip: '3', comboPts: 1, comboType: <Ender/>, kd: false,
        },
        {
            speed: 4.0, rank: 'J', name: 'Power Lash', damage: '10', chip: '3',
            comboType: <CantCombo/>, kd: true,
        },
        {
            speed: 0.2, rank: 'Q', name: 'Rising Pleasure', damage: '9', chip: '2',
            comboPts: 3, comboType: <Ender/>, kd: false,
        },
        {
            speed: 3.0, rank: 'A', name: "Mistress's Command", damage: '1',
            comboType: <CantCombo/>, kd: false,
        },
        {
            speed: 0.4, rank: 'AA', name: 'On Your Knees', damage: '16', chip: '3',
            comboPts: 2, comboType: <Ender/>, kd: true,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 8.0, rank: 'K', name: 'Wild Ride', damage: 9,
            comboType: <Starter/>, comboPts: 2, kd: true,
            maxCombo: 'tK>6>J++', maxDamage: 30, goodCombo: 'tK>AA', goodDamage: 25
        },
    ],
};
