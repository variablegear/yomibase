import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import styled from 'styled-components';


const headshots = {
    argagarg: require('../images/argagarg.jpg'),
    bbb: require('../images/bbb.jpg'),
    degrey: require('../images/degrey.jpg'),
    geiger: require('../images/geiger.jpg'),
    gloria: require('../images/gloria.jpg'),
    grave: require('../images/grave.jpg'),
    gwen: require('../images/gwen.jpg'),
    jaina: require('../images/jaina.jpg'),
    lum: require('../images/lum.jpg'),
    menelker: require('../images/menelker.jpg'),
    midori: require('../images/midori.jpg'),
    onimaru: require('../images/onimaru.jpg'),
    persephone: require('../images/persephone.jpg'),
    quince: require('../images/quince.jpg'),
    rook: require('../images/rook.jpg'),
    setsuki: require('../images/setsuki.jpg'),
    troq: require('../images/troq.jpg'),
    valerie: require('../images/valerie.jpg'),
    vendetta: require('../images/vendetta.jpg'),
    zane: require('../images/zane.jpg'),
};

const SelectButton = styled.button`
    width: 45px;
    height: 99px;
    background-repeat: no-repeat;
    background-size: 200%;
    border: none;
    &:hover {
        opacity: 0.8;
    }
    &.selected:hover {
        background-color: #CCCCCC;
        background-blend-mode: multiply;
    }
`;

const LeftSelectButton = styled(SelectButton)`
    background-position: ${props => props.selected ? '0px 100%' : '0px 0px'};
    &:hover {
        background-position: ${props => props.selected ? '0px 0px' : '0px 100%'};
    }
`;

const RightSelectButton = styled(SelectButton)`
    background-position: ${props => props.selected ? '100% 100%' : '100% 0'};
    &:hover {
        background-position: ${props => props.selected ? '100% 0' : '100% 100%'};
    }
`;

const ImageSelect = styled.div`
    white-space: nowrap;
    display: inline-block;
`;

const SelectorRow = styled.div`
    padding-bottom: 10px;
`;

const RightFloatCol = styled(Col)`
    float: right;
`;

const MissingCharacter = styled.div`
    width: 90px;
    height: 99px;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    font-size: 4em;
    border-style: solid;
    border-width: 5px;
    border-color: black;
    background-color: lightgray;
    color: black;
`;

function ImageSelector(props) {
    if (props.characters[props.char]) {
        return <ImageSelect>
            <LeftSelectButton
                style={{
                    backgroundImage: "url(" + headshots[props.char] + ")",
                }}
                onClick={() => {
                    if (props.selectedLeft) {
                        props.resetLeft();
                    } else {
                        props.selectLeft(props.char);
                    }
                }}
                selected={props.selectedLeft}
            />
            <RightSelectButton
                style={{
                    backgroundImage: "url(" + headshots[props.char] + ")",
                }}
                onClick={() => {
                    if (props.selectedRight) {
                        props.resetRight();
                    } else {
                        props.selectRight(props.char);
                    }
                }}
                selected={props.selectedRight}
            />
        </ImageSelect>
    } else {
        return <MissingCharacter>?</MissingCharacter>
    }
}

export function ImageSelectorRow(props) {
    function mkImageSelector(char) {
        return <ImageSelector
            char={char}
            selectedLeft={char == props.left}
            selectedRight={char == props.right}
            {...props}
        />
    };
    return (
        <SelectorRow>
            <Row>
                <Col md={5} xsHidden>
                    {mkImageSelector("grave")}
                    {mkImageSelector("midori")}
                    {mkImageSelector("rook")}
                    {mkImageSelector("valerie")}
                    {mkImageSelector("lum")}
                    {mkImageSelector("jaina")}
                    {mkImageSelector("setsuki")}
                    {mkImageSelector("degrey")}
                    {mkImageSelector("geiger")}
                    {mkImageSelector("argagarg")}
                </Col>
                <RightFloatCol md={5} xsHidden>
                    {mkImageSelector("quince")}
                    {mkImageSelector("bbb")}
                    {mkImageSelector("menelker")}
                    {mkImageSelector("gloria")}
                    {mkImageSelector("vendetta")}
                    {mkImageSelector("onimaru")}
                    {mkImageSelector("troq")}
                    {mkImageSelector("persephone")}
                    {mkImageSelector("gwen")}
                    {mkImageSelector("zane")}
                </RightFloatCol>
            </Row>
        </SelectorRow>
    );
}

export function DropDownSelector(props) {
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

export function DropdownSelectorRow(props) {
    return (
        <SelectorRow>
            <Row>
                <Col md={12} smHidden mdHidden lgHidden >
                    <DropDownSelector
                        onSelect={props.selectLeft}
                        characters={props.characters}
                        current={props.left}
                        slot="left"
                        default="Pick a character..."
                        onReset={props.resetLeft}
                    />
                    {props.left &&
                        <span style={{ float: 'right' }}>
                            <DropDownSelector
                                style={{ float: 'right' }}
                                onSelect={props.selectRight}
                                characters={props.characters}
                                current={props.right}
                                disabled={props.left}
                                slot="right"
                                default="Match up against..."
                                onReset={props.resetRight}
                            />
                        </span>
                    }
                </Col>
            </Row>
        </SelectorRow>
    );
}