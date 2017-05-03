import React from 'react';
import {Note, Icon} from '../note.jsx';
import {Ender, Linker, Starter, ComboDetails, CantCombo} from '../combo.jsx';
import {mkNormal, Attack, Block, Dodge} from '../move.jsx';

import styled from 'styled-components';

const Inverse = styled(Icon)`
    background-color: black;
    color: white;
`;

function RangeGiving(props) {
    return <Note
        text='When this is blocked or wins combat, set range next turn'
        icon={<Inverse>{'\u2316'}</Inverse>}
    />;
}

function Speed1AtRange(props) {
    return <Note
        text='Speed 1.0 when at range'
        icon={<span><RangeLegal/>{'\u21D2'}<Icon>{'\uD83C\uDFC3'}</Icon>1.0</span>}
    />;
}

function AnyRange(props) {
    return <Green>both</Green>;
}

function RangeLegal(props) {
    return <Icon>{'\u2316'}</Icon>;
}

const Green = styled.span`
    color: green;
    font-weight: bold;
`;

const Orange = styled.span`
    color: orange;
    font-weight: bold;
`;

const Brown = styled.span`
    color: brown;
    font-weight: bold;
`;


function CloseRange(props) {
    return <Brown>close</Brown>;
}

function RangeOnly(props) {
    return <Orange>range</Orange>
}

const normalAttack = mkNormal(0.8, {
    notes: <span>
        <RangeGiving/>, <Speed1AtRange/>
    </span>,
    range: <AnyRange/>,
});

const normalThrow = mkNormal(0.4, {
    damage: 7,
    comboPts: 1,
    comboType: <Starter/>,
    kd: false,
    maxCombo: (rank) => 't' + rank + '>Q++',
    maxDamage: 22,
    goodCombo: (rank) => 't' + rank + '>6',
    goodDamage: 13,
});

export const bbb = {
    theme: {
        // primary: #E4A85F, #F6DD0E
        text: 'linear-gradient(#f8e8d3, #fdf8ce)',
    },
    summary: {
        name: 'BBB',
        fullName: 'Bal-Bas-Beta',
        title: '',
        hitPoints: 80,
        maxCombo: 2,
        attackSpeed: <span>x.8 <RangeGiving/><i>(gives range)</i></span>,
        throwSpeed: <span>x.4  <ComboDetails points={1} max={1} kd={false}/><i>(x = card rank)</i></span>,
        throwDamage: 7,
        attacks: [2, 3, 4, 6, 7, 'J', 'Q', 'A'],
        throws: [7, 8, 9, 'T', 'K'],
        blocks: [2, 3, 4, 5, 6, 8, 9],
        dodges: [5, 10],
        innateAbilities: [
            {
                name: 'Long Range',
                text: <span>
                    Whenever your <RangeGiving/> moves are blocked or wins combat,
                    set combat to ranged next turn. At range, during combat:
                    <ul>
                        <li>
                            Non-<RangeLegal/> moves become Enders, can't be pumped,
                            and don't deal <Attack>damage</Attack> or <Block>block damage</Block>.
                        </li>
                        <li>
                            Players can't play throws, except <RangeLegal/> throws.
                        </li>
                        <li>
                            Return the first face card you play each combat to your hand.
                        </li>
                        <li>
                            Your <Attack>normal attacks</Attack> are speed 1.0.
                        </li>
                    </ul>
                    Lose range at the end of a turn in which both players <Block>blocked</Block> or
                    you got hit by a non-<RangeLegal/> move.

                    <i>(In 2v2 and 2v1, cancel range if there are no BBBs on the battlefield.)</i>
                </span>
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Robo Headbutt',
                timing: 'During Combat',
                text: 'If you combat-reveal Robo Headbutt and it wins combat, you may play another full combo.',
            },
            {
                rank: '8',
                name: 'Overdrive',
                timing: 'Draw Phase',
                text: <span>
                    This turn, your face cards deal +3 damage, and your:
                    <ul>
                        <li>Long Arm (Jack) can't be interrupted except by knockdowns</li>
                        <li>Junkshot (Queen) is unblockable</li>
                        <li>
                            Extensor Grab (King) sets combat to ranged even if you hit
                            with it after a <Dodge>dodge</Dodge>.
                        </li>
                    </ul>
                </span>
            },
        ],
    },
    attacks: [
        normalAttack(2),
        normalAttack(3),
        normalAttack(4),
        normalAttack(6),
        {
            rank: 7, name: 'Robo Headbutt', speed: 2.8, damage: 10, chip: 2,
            comboType: <CantCombo/>, range: <CloseRange/>
        },
        {
            speed: 3.0, rank: 'J', name: 'Long Arm',
            damage: 7, chip: 2, comboPts: 1, comboType: <Linker/>, kd: false,
            maxCombo: 'J>Q++', maxDamage: 22, goodCombo: 'J>6', goodDamage: 13,
            range: <AnyRange/>,
        },
        {
            speed: 2.4, rank: 'J', name: 'Cog Shot',
            damage: 8, chip: 2, comboPts: 1, comboType: <Starter/>, kd: false,
            maxCombo: 'J>Q++', maxDamage: 23, goodCombo: 'J>6', goodDamage: 14,
            range: <AnyRange/>,
        },
        {
            speed: 4.0, rank: 'Q', name: 'Gyro Spin', pumpWith: '+X+X',
            damage: 5, pump: 5, chip: 3, comboPts: 1, comboType: <Linker/>, kd: false,
            maxCombo: 'Q++>A', maxDamage: 26, goodCombo: 'Q+>6', goodDamage: 16,
            range: <CloseRange/>,
        },
        {
            speed: 2.2, rank: 'Q', name: 'Junk Shot',
            damage: 13, chip: 13, comboType: <CantCombo/>, kd: false,
            range: <RangeOnly/>,
        },
        {
            speed: 1.4, rank: 'A', name: 'Beta Thrust',
            damage: 11, chip: 2, comboPts: 1, comboType: <Ender/>, kd: false,
            range: <AnyRange/>,
        },
        {
            speed: 0.2, rank: 'AA', name: 'Piston Hurricane', pumpWith: '+A+A',
            damage: 21, pump: 7, chip: 3, comboType: <CantCombo/>, kd: false,
            range: <CloseRange/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 8.6, rank: 'K', name: 'Extensor Grab',
            damage: 8, comboType: <CantCombo/>, kd: true,
            range: <AnyRange/>, notes: <RangeGiving/>,
        },
    ],
};

// Individual Cards:

// J:
// Long Arm, Attack, 3.0 speed, 7(2) damage, <RangeLegal/>, 1 CP Linker
// Cog Shot, Attack, 2.4 speed, 8(2) damage, <RangeLegal/>, 1 CP Starter, Knocksdown
// Q:
// Junkshot, Attack, 2.2 speed, 13(13) damage, <RangeLegal/>, Can't Combo, *Requires Long Range*
// Gyro Spin, Attack, 4.0 speed, 5+5(3) damage, 1 CP Linker, *Can't Play at Long Range*
// K: Extensor Grab, Throw, 8.6 speed, 8 damage, <RangeLegal/>, gives range, Can't Combo, Knocksdown
// A:
// A: Beta Thrust, Attack, 1.4 speed, 11(2) damage, <RangeLegal/>, 1 CP Ender
// AA: Piston Hurricane, Attack, +A+A, 0.2 speed, 21+7(3) damage, Can't Combo, *Can't Play at Long Range*
