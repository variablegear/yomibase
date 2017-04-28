import React from 'react';
import Table from 'react-bootstrap/lib/Table';

import {ComboPoints} from './combo.jsx';
import {CardAbility} from './ability.jsx';

export function CharacterSummary(props) {
    let abilities = [];
    props.char.innateAbilities.forEach((entry) => {
        abilities.push(<dt key={entry.name + '-name'}>{entry.name}</dt>);
        abilities.push(<dd key={entry.name + '-text'}>{entry.text}</dd>);
    });
    props.char.cardAbilities.forEach((entry) => abilities.push(...CardAbility(entry)));

    return (
        <section className={props.className + ' character-summary'} >
            <h1>{props.char.fullName} <small className="full-name">{props.char.title}</small></h1>
            <Table>
                <tbody>
                    <tr>
                        <th>Hit Points:</th>
                        <td>{props.char.hitPoints}</td>
                    </tr>
                    <tr>
                        <th>Max Combo:</th>
                        <td><ComboPoints count={props.char.maxCombo} max={props.char.maxCombo} /></td>
                    </tr>
                    {props.char.attackSpeed &&
                        <tr>
                            <th><span className="yomi-attack">Normal attack speed</span>:</th>
                            <td>{props.char.attackSpeed}</td>
                        </tr>
                    }
                    {props.char.attackDamage &&
                        <tr>
                            <th><span className="yomi-attack">Normal attack damage</span>:</th>
                            <td>{props.char.attackDamage}</td>
                        </tr>
                    }
                    {props.char.throwSpeed &&
                        <tr>
                            <th><span className="yomi-throw">Normal throw speed</span>:</th>
                            <td>{props.char.throwSpeed}</td>
                        </tr>
                    }
                    {props.char.throwDamage &&
                        <tr>
                            <th><span className="yomi-throw">Normal throw damage</span>:</th>
                            <td>{props.char.throwDamage}</td>
                        </tr>
                    }
                    <tr>
                        <th><span className="yomi-attack">Attacks</span>:</th>
                        <td className="yomi-attack">{props.char.attacks.join(', ')}</td>
                    </tr>
                    <tr>
                        <th><span className="yomi-throw">Throws</span>:</th>
                        <td className="yomi-throw">{props.char.throws.join(', ')}</td>
                    </tr>
                    <tr>
                        <th><span className="yomi-block">Blocks</span>:</th>
                        <td className="yomi-block">{props.char.blocks.join(', ')}</td>
                    </tr>
                    <tr>
                        <th><span className="yomi-dodge">Dodges</span>:</th>
                        <td className="yomi-dodge">{props.char.dodges.join(', ')}</td>
                    </tr>
                </tbody>
            </Table>
            <dl>{abilities}</dl>
        </section>
    );
};