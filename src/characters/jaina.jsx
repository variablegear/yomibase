import React from 'react';
import {Note, Recycles, Icon} from '../note.jsx';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal, Block, Attack, overrideMoves} from '../move.jsx';
import {EX, First} from '../editions.jsx';
import {rankValue} from '../rank.js';

const normalAttack = mkNormal(0.6, {
    chip: (rank) => '(' + (rankValue(rank) - 1) + ')',
    notes: (rank) => <Note
        id={"Chip"+rank}
        text="Chip damage on *red* normals only"
        icon={
            <span>
                <Icon width={40}>
                    <Attack>{'\u2764'}</Attack>
                    /
                    <Attack>{'\u2666'}</Attack>
                </Icon>
                <Icon>{'\u21D2'}</Icon>
                <Icon><Block>{'\u26CA'}</Block></Icon>
            </span>
        }
    />,
});

const normalThrow = mkNormal(0.6, {
    damage: 7,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>K+++>6',
    maxDamage: 40,
    goodCombo: (rank) => 't' + rank + '>4>5>6',
    goodDamage: 22,
});

const recycle35 = <Recycles text='Card is likely to recycle from the discard once Jaina is below 35 life'/>;

export const jaina = {
    theme: {
        // primary: #FA4125
        text: 'linear-gradient(#fed4cd, #fed4cd)',
        headshot: require('../images/jaina.jpg'),
    },
    summary: {
        name: 'Jaina',
        fullName: 'Jaina Stormborne',
        title: 'Phoenix Archer',
        hitPoints: 85,
        maxCombo: 5,
        attackSpeed: <span>x.6 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.6 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 7,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [6, 7, 8, 9, 'T'],
        blocks: [7, 8, 9, 'T'],
        dodges: [2, 3, 4, 5],
        innateAbilities: [
            {
                name: 'Burning Vigor',
                text: <span>
                    At the end of combat, if you attacked, you may return
                    any of your combo cards to your hand other than Queens
                    or Aces. Take 3 damage for each card returned this way.
                </span>
            },
            {
                name: 'Burning Desperation',
                text: <span>
                    If you have 35 life or less, you may also return Queens
                    and Aces and take 4 damage for each.
                </span>
            },
        ],
        // quote: "You cross me and you get burned."
        cardAbilities: [
            {
                rank: 7,
                name: 'Unstable Power',
                timing: 'Draw Phase',
                text: <span>
                    Knocked down opponents stand up. You can't play Aces this
                    turn, but you can rotate your combat-revealed attack 180
                    degrees. If you hit the opponent this combat, search your
                    deck or discard pile for 2 Aces. Otherwise, take 7 damage.
                </span>
            },
            {
                rank: 'T',
                name: 'Smoldering Embers',
                timing: 'Combat Reveal',
                text: <span>
                    Whenever the opponent dodges while this card is in your
                    discard pile, they take 2 damage.
                    You can't power up with this card. <i>(It's too hot.)</i>
                </span>
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>K+++>AA', maxDamage: 47, goodCombo: '2>3>4>AA', goodDamage: 25}),
        normalAttack(3, {maxCombo: '3>K+++>AA', maxDamage: 48, goodCombo: '3>4>5>AA', goodDamage: 30}),
        normalAttack(4, {maxCombo: '4>K+++>AA', maxDamage: 49, goodCombo: '4>5>6>AA', goodDamage: 33}),
        normalAttack(5, {maxCombo: '5>K+++>AA', maxDamage: 50, goodCombo: '5>K+>5>6', goodDamage: 28}),
        normalAttack(6, {maxCombo: '6>K+++>AA', maxDamage: 51, goodCombo: '6>K+>4>5', goodDamage: 28}),
        {
            speed: 2.6, rank: 'J', name: 'Flame Arrow', damage: 6,
            chip: 5, comboType: <Ender/>, comboPts: 1,
        },
        {
            speed: 4.6, rank: 'J', name: 'Charged Shot', damage: 8,
            chip: 7, comboType: <Starter/>, comboPts: 2,
            maxCombo: 'J>K+++>6', maxDamage: 41, goodCombo: 'J>4>5>6', goodDamage: 24,
        },
        {
            speed: 0.2, rank: 'Q', name: 'Dragonheart', pumpWith: '+X',
            damage: 8, pump: 5, chip: 1, comboType: <Ender/>, comboPts: 3,
            maxCombo: 'Q+', maxDamage: 13, notes: recycle35,
        },
        {
            speed: 2.4, rank: 'K', name: 'Crossfire Kick', pumpWith: '+K+K+K',
            damage: 6, pump: 7, chip: 3, comboType: <Linker/>, comboPts: 2,
            maxCombo: 'K+++>6>AA', maxDamage: 51, goodCombo: 'K++>4>5>6', goodDamage: 35,
        },
        {
            speed: 0.8, rank: 'A', name: 'Red Dragon', pumpWith: '+A+A+A',
            damage: 10, pump: 9, chip: 2, comboType: <CantCombo/>, comboPts: null,
            maxCombo: 'A+++', maxDamage: 37, goodCombo: 'A++', goodDamage: 28, notes: recycle35,
        },
        {
            speed: 0.2, rank: 'AA', name: 'Letter J', damage: 18, chip: 4,
            comboType: <Ender/>, comboPts: 2, notes: recycle35,
        },
    ],
    throws: [
        {
            rank: 6, speed: 8.6, name: 'Knee Bash', pumpWith: '+X+X', damage: 7,
            pump: 4, comboType: <CantCombo/>, kd: false, comboPts: null,
            maxCombo: 't6++', maxDamage: 15, goodCombo: 't6+', goodDamage: 11,
        },
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
    ],
};

jaina.variants = {
    EX: Object.assign({}, jaina, {
        summary: Object.assign({}, jaina.summary, {
            name: <span>EX {jaina.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Overeager Vigor',
                    text: <span>
                        During combat, you may pay 3 life to make your attacks
                        deal double block damage or to get 2 more combo
                        points that combat. At the end of combat, you may
                        return any number of your combo cards to your hand
                        and pay 3 life for each card returned that way.
                    </span>
                },
            ],
            // quote: "I'll finish you even if it kills me."
            cardAbilities: jaina.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Phoenix Shots',
                    timing: 'During Combat',
                    text: <span>
                        High Phoenix beats even numbered dodges. Low Phoenix
                        beats odd numbered dodges and non-numbered dodges.
                        Whenever you deal damage with this card and it wasn't
                        blocked, you may combo into a Flame Arrow (Jack).
                    </span>
                },
            ]),
            attacks: jaina.summary.attacks.concat(['D']),
        }),
        attacks: jaina.attacks.concat([
            {
                speed: 2.2, rank: 'D', name: 'High Phoenix', damage: 8, chip: 3,
                comboPts: 1, comboType: <Ender/>, maxCombo: "D>J", maxDamage: 14
            },
            {
                speed: 2.0, rank: 'D', name: 'Low Phoenix', damage: 7, chip: 3,
                comboPts: 1, comboType: <Ender/>, maxCombo: "D>J", maxDamage: 13
            },
        ]),
    }),

    FirstEd: Object.assign({}, jaina, {
        summary: Object.assign({}, jaina.summary, {
            name: <span>1<sup>st</sup> Ed. {jaina.summary.name}</span>,
            edition: First,
            innateAbilities: [
                {
                    name: 'Burning Vigor',
                    text: <span>
                        At the end of combat, if you attacked, you may return
                        any number of your non-Joker combo cards to your hand.
                        For each numbered card, face card, and Ace card returned
                        this way, take 3, 4, and 5 damage, respectively.
                    </span>
                },
            ],
            // quote: "You think I'm hot? You have no idea..."
            cardAbilities: [
                {
                    rank: 7,
                    name: 'Unstable Power',
                    timing: null,
                    text: <span>
                        After combat cards are revealed, you may discard this card
                        and take 10 damage to rotate your combat card 180 degrees.
                    </span>
                },
                {
                    rank: 'T',
                    name: 'Smoldering Embers',
                    timing: null,
                    text: <span>
                        When combat cards are revealed, if the opponent revealed a
                        dodge and this card is in your discard pile, you may return
                        it to your hand and the opponent takes 2 damage.
                    </span>
                },
            ],
        }),
        attacks: overrideMoves(jaina.attacks, [
            {rank: 'J', name: 'Charged Shot', speed: 8.6, comboType: <CantCombo/>, comboPts: null,
             maxCombo: null, maxDamage: null, goodCombo: null, goodDamage: null},
            {rank: 2, chip: '(3)'},
            {rank: 3, chip: '(3)'},
            {rank: 4, chip: '(3)'},
            {rank: 5, chip: '(3)'},
            {rank: 6, chip: '(3)'},
        ]),
    }),
};
