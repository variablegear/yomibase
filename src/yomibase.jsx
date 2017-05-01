
import Navbar from 'react-bootstrap/lib/Navbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
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

import styled, {ThemeProvider} from 'styled-components';

import characters from './characters.js';
import {CharacterSummary, Title} from './summary.jsx';
import {ComboDetails} from './combo.jsx';
import {CardAbility} from './ability.jsx';
import {rankValue} from './rank.js';
import {DropdownSelectorRow, ImageSelectorRow} from './selector.jsx';
import {Block, Attack, Throw} from './move.jsx';
import {defaultLeftTheme, defaultRightTheme} from './themes.js';

function keyedSort(list, keyFn, reversed) {
    let keyed = list.map((el) => ({
        key: keyFn(el),
        value: el,
    }));

    keyed.sort((a, b) => (reversed ? -1 : 1) * (+(a.key > b.key) || +(a.key === b.key) - 1));

    return keyed.map((el) => el.value);
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

const SummaryCol = styled(Col)`
    background: ${(props) => props.theme.text};
    border-top: 5px solid ${(props) => props.theme.border};
    border-bottom: 5px solid ${(props) => props.theme.border};
`;

const FlexRow =  styled(Row)`
    display: flex;
    flex-wrap: wrap;

    & > [class*='col-'] {
        display: flex;
        flex-direction: column;
    }
`;

const Brand = styled(Navbar.Brand)`
    color: #000000 !important;
`;

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
                        <Brand>
                            <Link to="/">YomiBase</Link>
                        </Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <ImageSelectorRow
                        selectLeft={(char) => this.props.history.push('/' + char + '/' + (rightKey || 'none'))}
                        selectRight={(char) => this.props.history.push('/' + leftKey + '/' + char)}
                        resetLeft={() => this.props.history.push('/none/' + rightKey)}
                        resetRight={() => this.props.history.push('/' + leftKey)}
                        characters={characters}
                        left={leftKey}
                        right={rightKey}
                    />
                    <DropdownSelectorRow
                        selectLeft={(char) => this.props.history.push('/' + char)}
                        selectRight={(char) => this.props.history.push('/' + leftKey + '/' + char)}
                        resetLeft={() => this.props.history.push('/')}
                        resetRight={() => this.props.history.push('/' + leftKey)}
                        characters={characters}
                        left={leftKey}
                        right={rightKey}
                    />
                    <FlexRow>
                        {leftCharacter &&
                            <ThemeProvider theme={Object.assign(defaultLeftTheme, leftCharacter.theme)}>
                                <SummaryCol md={6}>
                                    <CharacterSummary char={leftCharacter.summary} />
                                </SummaryCol>
                            </ThemeProvider>
                        }
                        {rightCharacter &&
                            <ThemeProvider theme={Object.assign(defaultRightTheme, rightCharacter.theme)}>
                                <SummaryCol md={6}>
                                    <CharacterSummary char={rightCharacter.summary} />
                                </SummaryCol>
                            </ThemeProvider>
                        }
                    </FlexRow>
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


const SortIcon = styled.small`
    padding-left: 2px;
`;


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
            <SortIcon>{sortGlyph}</SortIcon>
        </th>
    );
};

class SortHeader extends PureComponent { };

const SortableTableRow = styled.tr`
    background: ${(props) => props.theme.text};
    border-left: 5px solid ${(props) => props.theme.border};
    border-right: 5px solid ${(props) => props.theme.border};
    & > td {
        vertical-align: middle !important;
    };
`;

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
            <ThemeProvider theme={row.theme}>
                <SortableTableRow key={
                    this.headers().filter(
                        (header) => header.props.isKey
                    ).map(
                        (header) => this.formatKey(header, row)
                    )
                }>
                    {this.headers().map((header) => this.formatEntry(header, row))}
                </SortableTableRow>
            </ThemeProvider>
        ));
        return (
            <Table condensed hover >
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

const Pump = styled.span`
    font-size: 90%;
`;

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
            <Pump>{props.pump}</Pump>
            {props.name && <div><Title>{props.name}</Title></div>}
        </div>
    );
}

function Damage(props) {
    return (
        <span>
            {props.damage}
            {props.chip && <sub><Block>{props.chip}</Block></sub>}
            {props.pump && <Pump>+{props.pump}</Pump>}
        </span>
    );
}


const ComboWrapper = styled.span`
    opacity: ${props => props.default ? .8 : 1};
    font-size: ${props => props.default ? '80%' : '100%'};
`;


function Combo(props) {
    const combo = props.combo.toString();
    return <ComboWrapper default={props.default}>
        <span className="damage">{props.damage}</span>
        <br />
        <small className="moves">
            {combo && combo.split('>').map((move, idx) => [
                idx > 0 ? '\u27A7' : null,
                move.startsWith('t')
                    ? <Throw>{move.replace('t', '')}</Throw>
                    : <Attack>{move}</Attack>,
            ])}
        </small>
    </ComboWrapper>;
}

function mkComboHeader(prefix, throws) {
    const lowerPrefix = prefix.toLowerCase();
    return <SortHeader
        name={prefix + ' Combo'}
        sort={(row) => parseFloat(row[lowerPrefix + 'Damage']) || row.damage}
        format={(row) => {
            const damage = row[lowerPrefix + 'Damage'] || row.damage;
            const combo = row[lowerPrefix + 'Combo'] || (throws ? 't' : '') + row.rank;
            const comboDefault = row[lowerPrefix + 'Combo'] == null;
            return <Combo combo={combo} damage={damage} default={comboDefault} />;
        }}
    />;
}

function withCharacter(character, moveKey, defaultKey, defaultTheme) {
    return (character && character[moveKey].map((row) => Object.assign({
        theme: Object.assign(defaultTheme, character.theme),
        character: character.summary.name,
        abilities: character.summary.cardAbilities,
        maxComboPts: character.summary.maxCombo,
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
            <Move abilities={row.abilities} rank={row.rankDisplay || row.rank} pump={row.pumpWith} name={row.name} />
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
        const leftAttacks = withCharacter(this.props.left, 'attacks', 'attackDefaults', defaultLeftTheme);
        const rightAttacks = withCharacter(this.props.right, 'attacks', 'attackDefaults', defaultRightTheme);
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
        const leftThrows = withCharacter(this.props.left, 'throws', 'throwDefaults', defaultLeftTheme);
        const rightThrows = withCharacter(this.props.right, 'throws', 'throwDefaults', defaultRightTheme);
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
