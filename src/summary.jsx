import React from 'react';
import Table from 'react-bootstrap/lib/Table';

import {ComboPoints} from './combo.jsx';
import {CardAbility} from './ability.jsx';
import {Block, Throw, Dodge, Attack} from './move.jsx';

import styled from 'styled-components';

export const Title = styled.small`
    white-space: nowrap;
    color: #444444;
`;

const CharacterName = styled.h1`
    & .title {
        padding-left: 10px;
    }
    & .pre-title {
        padding-right: 10px;
    }
`;

export function CharacterSummary(props) {
    let abilities = [];
    props.char.innateAbilities.forEach((entry) => {
        abilities.push(<dt key={entry.name + '-name'}>{entry.name}</dt>);
        abilities.push(<dd key={entry.name + '-text'}>{entry.text}</dd>);
    });
    props.char.cardAbilities.forEach((entry) => abilities.push(...CardAbility(entry)));

    function hasAbility(rank) {
        const rankAbilities = props.char.cardAbilities.filter((ability) => ability.rank == rank);
        return rankAbilities.length > 0;
    }

    function formatMoves(moves) {
        return moves.map((rank) => hasAbility(rank) ? rank + '*' : rank).join(', ');
    }

    return (
        <section className={props.className + ' character-summary'} >
            <CharacterName>
                {props.char.preTitle && <Title className='pre-title'>{props.char.preTitle}</Title>}
                {props.char.fullName}
                {props.char.title && <Title className='title'>{props.char.title}</Title>}
            </CharacterName>
            <Table>
                <tbody>
                    <tr>
                        <th>Hit Points:</th>
                        <td>{props.char.hitPoints}</td>
                    </tr>
                    {props.char.maxHandSize && <tr>
                        <th>Max Hand Size:</th>
                        <td>{props.char.maxHandSize}</td>
                    </tr>}
                    {props.char.cardsPerTurn && <tr>
                        <th>Cards Drawn Per Turn:</th>
                        <td>{props.char.cardsPerTurn}</td>
                    </tr>}
                    <tr>
                        <th>Max Combo:</th>
                        <td><ComboPoints count={props.char.maxCombo} max={props.char.maxCombo} /></td>
                    </tr>
                    {props.char.attackSpeed &&
                        <tr>
                            <th><Attack>Normal attack speed</Attack>:</th>
                            <td>{props.char.attackSpeed}</td>
                        </tr>
                    }
                    {props.char.attackDamage &&
                        <tr>
                            <th><Attack>Normal attack damage</Attack>:</th>
                            <td>{props.char.attackDamage}</td>
                        </tr>
                    }
                    {props.char.throwSpeed &&
                        <tr>
                            <th><Throw>Normal throw speed</Throw>:</th>
                            <td>{props.char.throwSpeed}</td>
                        </tr>
                    }
                    {props.char.throwDamage &&
                        <tr>
                            <th><Throw>Normal throw damage</Throw>:</th>
                            <td>{props.char.throwDamage}</td>
                        </tr>
                    }
                    <tr>
                        <th><Attack>Attacks</Attack>:</th>
                        <td><Attack>{formatMoves(props.char.attacks)}</Attack></td>
                    </tr>
                    <tr>
                        <th><Throw>Throws</Throw>:</th>
                        <td><Throw>{formatMoves(props.char.throws)}</Throw></td>
                    </tr>
                    <tr>
                        <th><Block>Blocks</Block>:</th>
                        <td><Block>{formatMoves(props.char.blocks)}</Block></td>
                    </tr>
                    <tr>
                        <th><Dodge>Dodges</Dodge>:</th>
                        <td><Dodge>{formatMoves(props.char.dodges)}</Dodge></td>
                    </tr>
                </tbody>
            </Table>
            <dl>{abilities}</dl>
        </section>
    );
};