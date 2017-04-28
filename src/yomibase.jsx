
import Navbar from 'react-bootstrap/lib/Navbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Table from 'react-bootstrap/lib/Table';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import React, {PureComponent} from 'react';

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import characters from './characters.js';
import {CharacterSummary} from './summary.jsx';
import {ComboDetails} from './combo.jsx';
import {CardAbility} from './ability.jsx';
import {rankValue} from './rank.js';

import '../styles/index.scss';


function keyedSort(list, keyFn, reversed) {
    let keyed = list.map((el) => ({
        key: keyFn(el),
        value: el,
    }));

    keyed.sort((a, b) => (reversed ? -1 : 1) * (+(a.key > b.key) || +(a.key === b.key) - 1));

    return keyed.map((el) => el.value);
}

function Selector(props) {
    const current = props.characters[props.current];
    const characters = Object.keys(props.characters);
    characters.sort();

    const charSelectors = characters.map((char) => (
        <MenuItem key={char} onSelect={props.onSelect}
            eventKey={char}
            disabled={char == props.disabled}
        >{props.characters[char].summary.name}</MenuItem>
    ));

    return (
        <DropdownButton
            title={(current && current.summary.fullName) || props.default}
            id={props.slot + '-character-selector'}
        >
            {charSelectors}
            <MenuItem divider />
            <MenuItem onSelect={props.onReset}>Reset...</MenuItem>
        </DropdownButton>
    );
}

function EditLink(props) {
    return (
        <Well>
            Found a bug, or have a suggestion about {props.char.name}?
                Suggest a change <a href={
                'https://github.com/cpennington/yomibase/edit/master/src/characters/' +
                props.char.name.toLowerCase() +
                '.jsx'
            }>here</a>
        </Well>
    );
}

class YomiBase extends PureComponent {
    render() {
        const leftKey = this.props.match.params.left;
        const rightKey = this.props.match.params.right;
        const leftCharacter = characters[leftKey];
        const rightCharacter = characters[rightKey];

        return (
            <div className="base">
                <Navbar staticTop componentClass="header" className="bs-docs-nav" role="banner">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">YomiBase</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    {Object.keys(characters) &&
                        <Row className="selectors" key="selectors">
                            <Col md={12}>
                                <Selector
                                    onSelect={(c) => this.props.history.push('/' + c)}
                                    characters={characters}
                                    current={leftKey}
                                    slot="left"
                                    default="Pick a character..."
                                    onReset={() => this.props.history.push('/')}
                                />
                                {leftKey &&
                                    <span style={{ float: 'right' }}>
                                        <Selector
                                            style={{ float: 'right' }}
                                            onSelect={(c) => this.props.history.push('/' + leftKey + '/' + c)}
                                            characters={characters}
                                            current={rightKey}
                                            disabled={leftKey}
                                            slot="right"
                                            default="Match up against..."
                                            onReset={(c) => this.props.history.push('/' + leftKey)}
                                        />
                                    </span>
                                }
                            </Col>
                        </Row>
                    }
                    <Row className="summary-row">
                        {leftCharacter &&
                            <Col className="left summary-col" md={6}><CharacterSummary char={leftCharacter.summary} /></Col>
                        }
                        {rightCharacter &&
                            <Col className="right summary-col" md={6}><CharacterSummary char={rightCharacter.summary} /></Col>
                        }
                    </Row>
                    {(leftCharacter || rightCharacter) &&
                        [
                            <Row key="attacks-header"><Col md={12}><h2>Attacks</h2></Col></Row>,
                            <Row key="attacks-table" className="table-row">
                                <Col md={12}><Attacks left={leftCharacter} right={rightCharacter} /></Col>
                            </Row>,
                        ]
                    }
                    {(leftCharacter || rightCharacter) &&
                        [
                            <Row key="throws-header"><Col md={12}><h2>Throws</h2></Col></Row>,
                            <Row key="throws-table" className="table-row">
                                <Col md={12}><Throws left={leftCharacter} right={rightCharacter} /></Col>
                            </Row>,
                        ]
                    }
                    <Row>
                        {leftCharacter && <Col md={6}><EditLink char={leftCharacter.summary} /></Col>}
                        {rightCharacter && <Col md={6}><EditLink char={rightCharacter.summary} /></Col>}
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Well>
                                Missing your favorite character?{'\u00A0'}
                                <a href="https://github.com/cpennington/yomibase/new/master/src/characters">Add them!</a>{'\u00A0'}
                                (you can copy <a href="https://github.com/cpennington/yomibase/blob/master/src/characters/template.jsx">this template</a> to start out)
                                </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};


function SortingHeader(props) {
    let sortGlyph = null;
    if (props.header.props.sort) {
        if (props.current.sortHeader != props.name) {
            sortGlyph = <Glyphicon glyph="sort" />;
        } else if (props.current.reversed) {
            sortGlyph = <Glyphicon glyph="sort-by-attributes-alt" />;
        } else {
            sortGlyph = <Glyphicon glyph="sort-by-attributes" />;
        }
    }
    return (
        <th
            key={props.header.props.name}
            onClick={props.onClick}
        >
            {props.header.props.name}
            <small className="sort-icon">{sortGlyph}</small>
        </th>
    );
};

class SortHeader extends PureComponent { };

class SortableTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sortHeader: this.headers().find((header) => header.props.sortDefault).props.name,
            reversed: false,
        };
    }

    onSort(sortHeader, event) {
        event.preventDefault();
        if (sortHeader == this.state.sortHeader) {
            this.setState({ reversed: !this.state.reversed });
        } else {
            this.setState({
                sortHeader: sortHeader,
                reversed: false,
            });
        }
    }

    headers() {
        return this.props.children.filter((header) => header);
    }

    sortedData() {
        if (this.state.sortHeader != null) {
            const sortHeader = this.headers().find((header) => header.props.name == this.state.sortHeader);
            let data = this.props.data.slice();
            return keyedSort(data, sortHeader.props.sort, this.state.reversed);
        } else {
            return this.props.data;
        }
    }

    formatEntry(header, row) {
        return (
            <td key={header.props.name}>{
                (header.props.format && header.props.format(row)) || row[header.props.rowKey]
            }</td>
        );
    }

    formatKey(header, row) {
        return (typeof header.props.isKey == 'function' && header.props.isKey(row)) || row[header.props.rowKey];
    }

    render() {
        const rows = this.sortedData().map((row) => (
            <tr className={this.props.className(row)} key={
                this.headers().filter(
                    (header) => header.props.isKey
                ).map(
                    (header) => this.formatKey(header, row)
                    )
            }>
                {this.headers().map((header) => this.formatEntry(header, row))}
            </tr>
        ));
        return (
            <Table condensed hover responsive >
                <thead>
                    <tr>
                        {this.headers().map((header, idx) => (
                            <SortingHeader
                                key={header.props.name}
                                name={header.props.name}
                                header={header}
                                current={this.state}
                                onClick={(e) => this.onSort(header.props.name, e)}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
};

function speedValue(row) {
    if (row.speed == null) {
        return rankValue(row.rank) + row.speedOffset;
    } else {
        return parseFloat(row.speed);
    }
}

function Move(props) {
    const abilities = props.abilities.filter((ability) => ability.rank == props.rank);
    let rank;
    if (abilities.length > 0) {
        const tooltip = (
            <Tooltip
                id={props.rank.toString().concat(abilities.map((ability) => ability.name))}
            >
                <dl>{abilities.map((ability) => CardAbility(ability, true))}</dl>
            </Tooltip>
        );

        rank = (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <span>{props.rank}*</span>
            </OverlayTrigger>
        );
    } else {
        rank = props.rank;
    }

    return (
        <div>
            {rank}
            <span className="text-muted">{props.pump}</span>
            {props.name && <div><small className="full-name">{props.name}</small></div>}
        </div>
    );
}

function Damage(props) {
    return (
        <span>
            {props.damage}
            {props.chip && <sub className="yomi-block">{props.chip}</sub>}
            {props.pump && <span className="text-muted">+{props.pump}</span>}
        </span>
    );
}


function Combo(props) {
    const combo = props.combo.toString();
    return <span className={(props.className || '') + ' combo'}>
        <span className="damage">{props.damage}</span>
        <br />
        <small className="moves">
            {combo && combo.split('>').map((move, idx) => [
                idx > 0 ? '\u27A7' : null,
                move.startsWith('t')
                    ? <span className="yomi-throw">{move.replace('t', '')}</span>
                    : <span className="yomi-attack">{move}</span>,
            ])}
        </small>
    </span>;
}

function mkComboHeader(prefix, throws) {
    const lowerPrefix = prefix.toLowerCase();
    return <SortHeader
        name={prefix + ' Combo'}
        sort={(row) => parseFloat(row[lowerPrefix + 'Damage']) || row.damage}
        format={(row) => {
            const damage = row[lowerPrefix + 'Damage'] || row.damage;
            const combo = row[lowerPrefix + 'Combo'] || (throws ? 't' : '') + row.rank;
            const className = row[lowerPrefix + 'Combo'] ? '' : 'combo-default';
            return <Combo combo={combo} damage={damage} className={className} />;
        }}
    />;
}

function withCharacter(className, character, moveKey, defaultKey) {
    return (character && character[moveKey].map((row) => Object.assign({
        'className': className,
        'character': character.summary.name,
        'abilities': character.summary.cardAbilities,
        'maxComboPts': character.summary.maxCombo,
    }, character.summary[defaultKey], row))) || [];
}

function MoveTable(props) {
    const charHeader = <SortHeader isKey name="Character" rowKey="character" sort={(row) => row.character} />;
    const speedHeader = <SortHeader
        sortDefault
        name="Speed" sort={(row) => parseFloat(row.speed)}
        format={(row) => parseFloat(row.speed).toFixed(1)}
    />;
    const rankHeader = <SortHeader
        isKey={(row) => row.rank.toString().concat(row.name)}
        name="Rank"
        sort={(row) => rankValue(row.rank)}
        format={(row) => (
            <Move abilities={row.abilities} rank={row.rank} pump={row.pumpWith} name={row.name} />
        )}
    />;
    const damageHeader = <SortHeader
        name="Damage"
        sort={(row) => row.damage}
        format={(row) => (
            <Damage damage={row.damage} chip={row.chip} pump={row.pump} />
        )}
    />;
    const comboHeader = <SortHeader
        name="Combo"
        format={(row) => (
            <ComboDetails points={row.comboPts} max={row.maxComboPts} type={row.comboType} kd={row.kd} />
        )}
    />;
    const maxComboHeader = mkComboHeader('Max', props.throws);
    const goodComboHeader = mkComboHeader('Good', props.throws);
    const notesHeader = <SortHeader name="Notes" format={(row) => row.notes} />;

    return <SortableTable data={props.moves} className={(row) => row.className} >
        {props.showCharacter && charHeader}
        {speedHeader}
        {rankHeader}
        {damageHeader}
        {props.showComboDetails && comboHeader}
        {maxComboHeader}
        {goodComboHeader}
        {!props.moves.every((row) => row.notes == null) && notesHeader}
    </SortableTable>;
}

class Attacks extends PureComponent {
    render() {
        const leftAttacks = withCharacter('left', this.props.left, 'attacks', 'attackDefaults');
        const rightAttacks = withCharacter('right', this.props.right, 'attacks', 'attackDefaults');
        const attacks = leftAttacks.concat(rightAttacks);

        return <MoveTable
            moves={attacks}
            showCharacter={this.props.left && this.props.right}
            showComboDetails={!this.props.left != !this.props.right}
        />;
    }
};

class Throws extends PureComponent {

    render() {
        const leftThrows = withCharacter('left', this.props.left, 'throws', 'throwDefaults');
        const rightThrows = withCharacter('right', this.props.right, 'throws', 'throwDefaults');
        const throws = leftThrows.concat(rightThrows);

        return <MoveTable
            moves={throws}
            throws={true}
            showCharacter={this.props.left && this.props.right}
            showComboDetails={!this.props.left != !this.props.right}
        />;
    }
};

export default class App extends PureComponent {
    render() {
        return <Router>
            <div>
                <Route path="/:left?/:right?" component={YomiBase} />
            </div>
        </Router>;
    }
}
