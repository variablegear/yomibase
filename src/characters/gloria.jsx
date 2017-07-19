import React from 'react';
import {Ender, Linker, Starter, CantCombo, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {EX} from '../editions.jsx';

const normalAttack = mkNormal(0.8);

const normalThrow = mkNormal(0.8, {
    damage: 6,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>AA',
    maxDamage: 24,
    goodCombo: (rank) => 't' + rank + '>5>6',
    goodDamage: 17,
});

export const gloria = {
    theme: {
        // primary: #FFD0DE, #FFFFFF
        text: 'linear-gradient(#FFD0DE, #FFFFFF)',
        headshot: require('../../images/gloria.jpg'),
    },
    summary: {
        name: 'Gloria',
        fullName: 'Gloria Grayson',
        title: 'Hopeful Healer',
        hitPoints: 70,
        maxCombo: 4,
        attackSpeed: <span>x.8 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.8 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'Q'],
        blocks: [2, 3, 4, 9, 'T'],
        dodges: [5, 6, 7, 8],
        innateAbilities: [
            {
                name: 'Healing Touch',
                text: <span>
                    After the power up phase, if you aren't knocked down,
                    you may discard two non-Hearts cards to gain 4 life and
                    fetch a Hearts card from your discard pile.
                </span>
            },
        ],
        // quote: "Things will turn out well if we keep a positive attitude."
        cardAbilities: [
            {
                rank: 'T',
                name: 'Healing Sphere',
                timing: 'Draw Phase',
                text: <div>
                    <b>Ongoing.</b> At the end of each turn:
                    <ul>
                        <li>Draw a card if you healed <i>(even if you were at max life).</i></li>
                        <li>Discard this if you didn't heal or were thrown this turn.</li>
                    </ul>
                </div>
            },
            {
                rank: 'J',
                name: 'Bathed in Moonlight',
                timing: 'End of Combat',
                text: <span>
                    If you hit with either side of this Jack, you may return it to
                    your hand to heal yourself and the opponent for 4 life.
                </span>
            },
            {
                rank: 'A',
                name: 'Overdose',
                timing: 'End of Combat',
                text: <span>
                    Both players take 10 damage (you first). If you won combat,
                    draw 2 cards. Play only one Overdose per turn.
                </span>
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>AA>6', maxDamage: '26', goodCombo: '2>3>4>5', goodDamage: 14}),
        normalAttack(3, {maxCombo: '3>AA>6', maxDamage: '27', goodCombo: '3>4>5>6', goodDamage: 18}),
        normalAttack(4, {maxCombo: '4>AA>6', maxDamage: '28', goodCombo: '4>5>6>J', goodDamage: 20}),
        normalAttack(5, {maxCombo: '5>AA>6', maxDamage: '29', goodCombo: '5>6>J>6', goodDamage: 22}),
        normalAttack(6, {maxCombo: '6>AA>6', maxDamage: '30', goodCombo: '6>J>5>6', goodDamage: 22}),
        {
            speed: 4.0, rank: 'J', name: 'Ray of Moonlight', damage: 9, chip: 2,
            comboPts: 1, comboType: <Starter/>,
            maxCombo: 'J>6>AA', maxDamage: 33, goodCombo: 'J>4>5>6', goodDamage: 24,
        },
        {
            speed: 2.2, rank: 'J', name: 'Moonlight Sphere', damage: 5, chip: 2,
            comboPts: 1, comboType: <Linker/>,
            maxCombo: 'J>6>AA', maxDamage: 29, goodCombo: 'J>4>5>6', goodDamage: 20,
        },
        {
            speed: 1.0, rank: 'Q', pumpWith: '+F', name: 'Sunburst',
            damage: 6, pump: 7, chip: 1, comboType: <CantCombo/>,
            maxCombo: 'Q+', maxDamage: 13,
        },
        {
            speed: 2.2, rank: 'K', name: 'Fountain of Light', damage: 9, chip: 3,
            comboType: <CantCombo/>, kd: true,
        },
        {
            speed: 2.0, rank: 'AA', name: 'Twilight Key', damage: 18, chip: 2,
            comboPts: 2, comboType: <Linker/>,
            maxCombo: 'AA>AA', maxDamage: 36, goodCombo: 'AA>5>6', goodDamage: 29,
        },
        {
            speed: 0.6, rank: 'AAA', name: 'Sun and Moon', damage: 29, chip: 2,
            comboPts: 1, comboType: <Starter/>,
            maxCombo: 'AAA>6', maxDamage: 35, goodCombo: 'AAA>J', goodDamage: 34,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 8.6, rank: 'Q', pumpWith: '+x+x', name: 'Sunbar Cage',
            damage: 4, pump: 6, comboType: <CantCombo/>,
            maxCombo: 'tQ++', maxDamage: 16, goodCombo: 'tQ+', goodDamage: 10
        },
    ],
};

gloria.variants = {
    EX: Object.assign({}, gloria, {
        summary: Object.assign({}, gloria.summary, {
            name: <span>EX {gloria.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Potent Healing Touch',
                    text: <span>
                        After the power up phase, if you aren't knocked down,
                        you may discard a non-Hearts card to gain 4 life and
                        fetch a Hearts card from your discard pile.
                    </span>
                },
            ],
            // quote: "It's fun to practice fighting when I can heal us both."
            cardAbilities: gloria.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Pulsing Globes',
                    timing: 'During Combat',
                    text: <span>
                        Each time you pump this card, gain 3 life.
                    </span>
                },
            ]),
            attacks: gloria.summary.attacks.concat(['D']),
        }),
        attacks: gloria.attacks.concat([
            {
                speed: 1.8, rank: 'D', pumpWith: '+x', name: 'Apogee Globe',
                damage: 5, pump: 2, chip: 2, comboPts: 1, comboType: <Ender/>
            },
            {
                speed: 4.0, rank: 'D', pumpWith: '+x+x+x', name: 'Perigee Globe',
                damage: 6, pump: 4, chip: 4, comboPts: 2, comboType: <Starter/>,
                maxCombo: 'D+++>AA', maxDamage: 36, goodCombo: 'D+++>5>6', goodDamage: 29
            },
        ]),
    }),
};
