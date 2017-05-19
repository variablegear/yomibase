import React from 'react';
import {CantCombo, Ender, Linker, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {EX, First} from '../editions.jsx';

const normalAttack = mkNormal(0.8);

const normalThrow = mkNormal(0.0, {
    damage: 10,
    comboType: <CantCombo/>,
    kd: true,
});

export const rook = {
    theme: {
        // primary: D6DBE1
        text: 'linear-gradient(#e2e5e9, #e2e5e9)',
        headshot: require('../../images/rook.jpg'),
    },
    summary: {
        name: 'Rook',
        fullName: 'Garus Rook',
        title: 'Stone Golem',
        hitPoints: 100,
        maxCombo: 3,
        attackSpeed: <span>x.8 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.0 <ComboDetails type={<CantCombo/>} kd={true}/></div>,
        throwDamage: 10,
        attacks: [4, 5, 6, 7, 8, 'T', 'J', 'Q', 'A'],
        throws: [2, 3, 6, 7, 9, 'T', 'Q', 'K', 'A'],
        blocks: [2, 3, 4, 5, 8, 9],
        dodges: [],
        innateAbilities: [
            {
                name: 'Rock Armor',
                text: <span>
                    If your normal attack is hit by the opponent's faster normal
                    attack or special attack, the opponent finishes their combo,
                    then if you were not knocked down, you may discard two
                    cards of the same suit as your attack. If you do, your attack is
                    not interrupted and you may finish your combo.
                </span>
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 3,
                name: 'Entangling Vines',
                timing: 'During Combat',
                text: <span>
                    This block avoids block damage, knocks down attackers, and
                    deals 5 damage to them. When it does, next turn your attacks
                    and throws are 3 speed faster, to a minimum of speed 1.0.<br />
                 <i>(This doesn't return to hand or draw from blocking.)</i>
                </span>
            },
            {
                rank: 5,
                name: 'Stone Wall',
                timing: 'During Combat',
                text: <span>
                    This block reflects an attack's damage back to the attacker.<br />
                 <i>(This doesn't return to hand or draw from blocking.)</i>
                </span>
            },
            {
                rank: 'K',
                name: 'Windmill Crusher',
                timing: 'During Combat',
                text: 'This throw beats normal attacks with speed 5.0 or faster, but you still \
                       take damage from the opponent\'s normal attack.',
            },
        ],
    },
    attacks: [
        normalAttack(4, {maxCombo: '4>Q+', maxDamage: 18, goodCombo: '4>tQ', goodDamage: 14}),
        normalAttack(5, {maxCombo: '5>Q+', maxDamage: 19, goodCombo: '5>6>7', goodDamage: 18}),
        normalAttack(6, {maxCombo: '6>7>8', maxDamage: 21, goodCombo: '6>tQ', goodDamage: 16}),
        normalAttack(7, {maxCombo: '7>Q+', maxDamage: 21, goodCombo: '7>tQ', goodDamage: 17}),
        normalAttack(8, {maxCombo: '8>Q+', maxDamage: 22, goodCombo: '8>tQ', goodDamage: 18}),
        normalAttack('T', {maxCombo: 'T>Q+', maxDamage: 24, goodCombo: 'T>tQ', goodDamage: 20}),
        {
            speed: 2.2, rank: 'J', name: 'Thunderclap',
            damage: 4, chip: 2, comboPts: 1, comboType: <Linker/>,
            maxCombo: 'J>7>8', maxDamage: 19, goodCombo: 'J>T', goodDamage: '14',
        },
        {
            speed: 2.6, rank: 'Q', name: 'Hammerfist', pumpWith: '+X',
            damage: 9, pump: 5, chip: 1, comboPts: 2, comboType: <Ender/>,
            maxCombo: 'Q+', maxDamage: 14,
        },
        {
            speed: 0.8, rank: 'AA', name: 'Wall of Vines',
            damage: 20, chip: 3, comboType: <CantCombo/>,
        },
    ],
    throws: [
        normalThrow(2),
        normalThrow(3),
        normalThrow(6),
        normalThrow(7),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 8.4, rank: 'Q', name: 'Rolling Stone',
            damage: 10, comboPts: 2, comboType: <Ender/>, kd: false,
        },
        {
            speed: 2.4, rank: 'K', name: 'Windmill Crusher',
            damage: 15, comboType: <CantCombo/>, kd: false,
        },
        {
            speed: 0.0, rank: 'AAAA', name: 'Checkmate Buster',
            damage: 50, comboType: <CantCombo/>, kd: false,
        },
    ],
};

rook.variants = {
    EX: Object.assign({}, rook, {
        summary: Object.assign({}, rook.summary, {
            name: <span>EX {rook.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Diamond Armor',
                    text: <span>
                        If your normal attack is hit by the opponent's faster normal
                        attack or special attack, the opponent finishes his combo,
                        then if you were not knocked down, your attack is not
                        interrupted and you may finish your combo.
                    </span>
                },
                {
                    name: 'Defense Mastery',
                    text: 'Opponents don\'t draw when you block their normal attacks.',
                },
            ],
            cardAbilities: rook.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Verdant Vines',
                    timing: 'During Combat',
                    text: <span>
                        After combat-reveal, you may rotate this card 180 degrees.
                        When you deal damage (not block damage) with this card,
                        you may choose to knock the opponent down and draw a card
                        -OR- have this move deal double damage.
                    </span>
                },
            ]),
            attacks: rook.summary.attacks.concat(['D']),
            throws: rook.summary.throws.concat(['D']),
        }),
        attacks: rook.attacks.concat([
            {
                speed: 4.0, rank: 'D', name: 'Rippervine', damage: 7, chip: 2,
                comboType: <CantCombo/>
            },
        ]),
        throws: rook.throws.concat([
            {speed: 4.0, rank: 'D', name: 'Tanglevine', damage: 7, comboType: <CantCombo/>},
        ]),
    }),
    FirstEd: Object.assign({}, rook, {
        summary: Object.assign({}, rook.summary, {
            name: <span>1<sup>st</sup> Ed. {rook.summary.name}</span>,
            edition: First,
            innateAbilities: [
                {
                    name: 'Rock Armor',
                    text: <span>
                        If your normal attack is hit by the opponent's faster normal
                        attack or special attack, the opponent finishes his combo,
                        then if you were not knocked down, you may discard two
                        cards of the same suit as your attack. If you do, your attack is
                        not interrupted and you may finish your combo.
                    </span>
                },
            ],
            cardAbilities: [
                {
                    rank: 3,
                    name: 'Entangling Vines',
                    timing: null,
                    text: <span>
                        If you block an attack or joker with this card, take no
                        block damage. You may discard a normal throw card from your
                        hand to deal 8 damage to the opponent. Do not draw a card
                        from blocking with Entangling Vines and don't return it to
                        your hand unless it was countered.
                    </span>
                },
                {
                    rank: 5,
                    name: 'Stone Wall',
                    timing: null,
                    text: <span>
                        If you block an attack with this card, the attack does full
                        damage to the attacker and no damage to you. Do not draw a
                        card from blocking this way and don't return this card to your
                        hand unless it was countered.
                    </span>
                },
            ],
        }),
    }),
};
