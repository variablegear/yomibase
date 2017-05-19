
import Navbar from 'react-bootstrap/lib/Navbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Table from 'react-bootstrap/lib/Table';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import QueryString from 'query-string';

import React, {Component, PureComponent} from 'react';

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import styled from 'styled-components';

import characters from './characters.js';
import {CharacterSummary, Title} from './summary.jsx';
import {ComboDetails} from './combo.jsx';
import {CardAbility} from './ability.jsx';
import {rankValue} from './rank.js';
import {DropdownCharacterSelectorRow, ImageSelectorRow, VariantSelectorRow} from './selector.jsx';
import {Block, Attack, Throw} from './move.jsx';
import {defaultLeftTheme, defaultRightTheme} from './themes.js';

require('../_vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css');

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
            Found a bug, or have a suggestion about {props.char.summary.name}?
                Suggest a change <a href={
                'https://github.com/cpennington/yomibase/edit/master/src/characters/' +
                props.charKey +
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

class YomiBase extends Component {
    render() {
        const leftKey = this.props.match.params.left;
        const rightKey = this.props.match.params.right;
        const search = QueryString.parse(this.props.history.location.search);
        const leftVariantKey = search.vLeft || 'none';
        const rightVariantKey = search.vRight || 'none';

        const leftBase = characters[leftKey];
        const leftVariant = leftBase && (leftBase.variants || {})[leftVariantKey];
        const leftCharacter = leftVariant || leftBase;

        const rightBase = characters[rightKey];
        const rightVariant = rightBase && (rightBase.variants || {})[rightVariantKey];
        const rightCharacter = rightVariant || rightBase;

        const leftTheme = Object.assign(defaultLeftTheme, (leftCharacter || {}).theme);
        const rightTheme = Object.assign(defaultRightTheme, (rightCharacter || {}).theme);

        const history = this.props.history;
        const location = this.props.location;

        function goToChars(leftChar, rightChar, leftVariant, rightVariant) {
            const path = '/' + (leftChar || leftKey) + '/' + (rightChar || rightKey);
            const search = QueryString.stringify({
                vLeft: leftVariant || leftVariantKey,
                vRight: rightVariant || rightVariantKey,
            });
            history.push(
                Object.assign(
                    location,
                    {
                        pathname: path,
                        search: search,
                    }
                )
            );
        }

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
                        selectLeft={(char) => goToChars(char, null)}
                        selectRight={(char) => goToChars(null, char)}
                        resetLeft={() => goToChars('none', null)}
                        resetRight={() => goToChars(null, 'none')}
                        characters={characters}
                        left={leftKey}
                        right={rightKey}
                    />
                    <DropdownCharacterSelectorRow
                        smHidden mdHidden lgHidden
                        selectLeft={(char) => goToChars(char, null)}
                        selectRight={(char) => goToChars(null, char)}
                        resetLeft={() => goToChars('none', null)}
                        resetRight={() => goToChars(null, 'none')}
                        characters={characters}
                        left={leftKey}
                        right={rightKey}
                    />
                    {(leftKey || rightKey) && <VariantSelectorRow
                        selectLeft={(charKey, variantKey) => goToChars(charKey, null, variantKey, null)}
                        selectRight={(charKey, variantKey) => goToChars(null, charKey, null, variantKey)}
                        leftCharKey={leftKey}
                        leftVariantKey={leftVariantKey}
                        rightCharKey={rightKey}
                        rightVariantKey={rightVariantKey}
                    />}
                    <FlexRow>
                        {(leftCharacter) &&
                            <SummaryCol md={6} theme={leftTheme}>
                                <CharacterSummary char={(leftCharacter).summary} />
                            </SummaryCol>
                        }
                        {rightCharacter &&
                            <SummaryCol md={6} theme={rightTheme}>
                                <CharacterSummary char={rightCharacter.summary} />
                            </SummaryCol>
                        }
                    </FlexRow>
                    {(leftCharacter || rightCharacter) &&
                        [
                            <Row key="attacks-header"><Col md={12}><h2>Attacks</h2></Col></Row>,
                            <Row key="attacks-table" className="table-row">
                                <Col md={12}>
                                    <Attacks
                                        left={leftCharacter}
                                        leftKey={leftKey + leftVariantKey}
                                        right={rightCharacter}
                                        rightKey={rightKey + rightVariantKey}
                                    />
                                </Col>
                            </Row>,
                        ]
                    }
                    {(leftCharacter || rightCharacter) &&
                        [
                            <Row key="throws-header"><Col md={12}><h2>Throws</h2></Col></Row>,
                            <Row key="throws-table" className="table-row">
                                <Col md={12}>
                                    <Throws
                                        left={leftCharacter}
                                        leftKey={leftKey + leftVariantKey}
                                        right={rightCharacter}
                                        rightKey={rightKey + rightVariantKey}
                                    />
                                </Col>
                            </Row>,
                        ]
                    }
                    <Row>
                        {leftCharacter && <Col md={6}><EditLink char={leftCharacter} charKey={leftKey} /></Col>}
                        {rightCharacter && <Col md={6}><EditLink char={rightCharacter} charKey={rightKey} /></Col>}
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
    background: ${(props) => props.theme.text}, #dddddd;
    border-left: 5px solid ${(props) => props.theme.border};
    border-right: 5px solid ${(props) => props.theme.border};
    & > td {
        vertical-align: middle !important;
    };
    &:hover {
        background-blend-mode: multiply;
    }
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

    render() {
        const rows = this.sortedData().map((row) => (
            <SortableTableRow theme={row.theme} key={row.key}>
                {this.headers().map((header) => this.formatEntry(header, row))}
            </SortableTableRow>
        ));
        return (
            <Table condensed >
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

function withCharacter(characterKey, character, moveKey, defaultKey, defaultTheme) {
    return (character && character[moveKey].map((row) => Object.assign({
        key: characterKey + row.rank + row.name,
        theme: Object.assign(defaultTheme, character.theme),
        character: character.summary.name,
        abilities: character.summary.cardAbilities,
        maxComboPts: character.summary.maxCombo,
    }, character.summary[defaultKey], row))) || [];
}

function MoveTable(props) {
    const charHeader = <SortHeader name="Character" rowKey="character" sort={(row) => row.character} />;
    const speedHeader = <SortHeader
        sortDefault
        name="Speed" sort={(row) => parseFloat(row.speed)}
        format={(row) => parseFloat(row.speed).toFixed(1)}
    />;
    const rankHeader = <SortHeader
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
    const rangeHeader = <SortHeader name="Range" format={(row) => row.range} />;

    return <SortableTable data={props.moves} className={(row) => row.className} >
        {props.showCharacter && charHeader}
        {speedHeader}
        {!props.moves.every((row) => row.range == null) && rangeHeader}
        {rankHeader}
        {damageHeader}
        {comboHeader}
        {maxComboHeader}
        {goodComboHeader}
        {!props.moves.every((row) => row.notes == null) && notesHeader}
    </SortableTable>;
}

class Attacks extends PureComponent {
    render() {
        const leftAttacks = withCharacter(this.props.leftKey, this.props.left, 'attacks', 'attackDefaults', defaultLeftTheme);
        const rightAttacks = withCharacter(this.props.rightKey, this.props.right, 'attacks', 'attackDefaults', defaultRightTheme);
        const attacks = leftAttacks.concat(rightAttacks);

        return <MoveTable
            moves={attacks}
            showCharacter={this.props.left && this.props.right}
        />;
    }
};

class Throws extends PureComponent {

    render() {
        const leftThrows = withCharacter(this.props.leftKey, this.props.left, 'throws', 'throwDefaults', defaultLeftTheme);
        const rightThrows = withCharacter(this.props.rightKey, this.props.right, 'throws', 'throwDefaults', defaultRightTheme);
        const throws = leftThrows.concat(rightThrows);

        return <MoveTable
            moves={throws}
            throws={true}
            showCharacter={this.props.left && this.props.right}
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
