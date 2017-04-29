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

const SelectorRow = styled.div`
    padding-bottom: 10px;
`;

function ImageSelector(props) {
    if (props.characters[props.char]) {
        return <div className='image-select'>
            <button
                className={'select-left' + (props.selectedLeft ? ' selected' : '')}
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
            />
            <button
                className={'select-right' + (props.selectedRight ? ' selected' : '')}
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
            />
        </div>
    } else {
        return <div className='missing-character'>?</div>
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
                <Col md={5} className="normal-characters" xsHidden>
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
                <Col md={5} className="shadow-characters" xsHidden>
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
                </Col>
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