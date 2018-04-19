import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import UncontrolledButtonDropdown from 'reactstrap/lib/UncontrolledButtonDropdown';
import styled, {ThemeProvider} from 'styled-components';
import {defaultLeftTheme, defaultRightTheme} from './themes.js';
import characters from './characters.js';

const SelectButton = styled.button`
    width: 48px;
    height: 106px;
    border: none;
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 20;

    &:hover, &.selected {
        background-repeat: no-repeat;
        background-image: url(${(props) => props.headshot});
        background-position: -8px -114px;
        background-size: 96px;
        width: 96px;
        border: 8px solid ${(props) => props.theme.border};
    }

    &:hover {
        z-index: 10;
        background-size: 96px;
    }

    &.selected {
        z-index: 30;
    }

    &.selected:hover {
        mask-image: none;
        background-color: #999999;
        background-blend-mode: multiply;
    }
`;

const LeftSelectButton = styled(SelectButton)`
    left: 0px;

    &:hover {
        mask-image: linear-gradient(to right, black, transparent);
    }
`;

const RightSelectButton = styled(SelectButton)`
    left: 48px;

    &:hover {
        mask-image: linear-gradient(to left, black, transparent);
    }

    &:hover, &.selected {
        left: 0;
    }
`;

const ImageSelect = styled.div`
    white-space: nowrap;
    display: inline-block;
    position: relative;

    & > img {
        width: 96px;
        height: 106px;
        display: inline-block;
        object-fit: cover;
        object-position: ${(props) => props.selected ? '0 100%' : '0 0'};
        z-index: 0;
    }
`;

const SelectorRow = styled.div`
    padding-bottom: 10px;
`;

const RightJustifyCol = styled(Col)`
    text-align: right;
`;

function ImageSelector(props) {
    return (
        <ImageSelect selected={props.selectedLeft || props.selectedRight}>
            <img src={characters[props.char].theme.headshot} alt={props.char}/>
            <ThemeProvider theme={defaultLeftTheme}>
                <LeftSelectButton
                    className={props.selectedLeft ? 'selected' : ''}
                    onClick={() => {
                        if (props.selectedLeft) {
                            props.resetLeft();
                        } else {
                            props.selectLeft(props.char);
                        }
                    }}
                    headshot={characters[props.char].theme.headshot}
                    selected={props.selectedLeft}
                />
            </ThemeProvider>
            <ThemeProvider theme={defaultRightTheme}>
                <RightSelectButton
                    className={props.selectedRight ? 'selected' : ''}
                    onClick={() => {
                        if (props.selectedRight) {
                            props.resetRight();
                        } else {
                            props.selectRight(props.char);
                        }
                    }}
                    headshot={characters[props.char].theme.headshot}
                    selected={props.selectedRight}
                />
            </ThemeProvider>
        </ImageSelect>
    );
}

export function ImageSelectorRow(props) {
    function mkImageSelector(char) {
        return <ImageSelector
            char={char}
            selectedLeft={char === props.left}
            selectedRight={char === props.right}
            {...props}
        />
    };
    return (
        <SelectorRow>
            <Row>
                <Col md={6} className="d-none d-sm-block">
                    {mkImageSelector('grave')}
                    {mkImageSelector('midori')}
                    {mkImageSelector('rook')}
                    {mkImageSelector('valerie')}
                    {mkImageSelector('lum')}
                    {mkImageSelector('jaina')}
                    {mkImageSelector('setsuki')}
                    {mkImageSelector('degrey')}
                    {mkImageSelector('geiger')}
                    {mkImageSelector('argagarg')}
                </Col>
                <RightJustifyCol md={6} className="d-none d-sm-block">
                    {mkImageSelector('quince')}
                    {mkImageSelector('bbb')}
                    {mkImageSelector('menelker')}
                    {mkImageSelector('gloria')}
                    {mkImageSelector('vendetta')}
                    {mkImageSelector('onimaru')}
                    {mkImageSelector('troq')}
                    {mkImageSelector('persephone')}
                    {mkImageSelector('gwen')}
                    {mkImageSelector('zane')}
                </RightJustifyCol>
            </Row>
        </SelectorRow>
    );
}

function DropDownCharacterSelector(props) {
    if (props.characters === null) {
        return null;
    }

    const current = props.characters[props.current];
    const characters = Object.keys(props.characters);
    characters.sort();

    const charSelectors = characters.map((char) => (
        <DropdownItem
            key={char}
            onClick={() => props.onSelect(char)}
            disabled={char === props.disabled}
        >{props.characters[char].summary.name}</DropdownItem>
    ));

    return (
        <UncontrolledButtonDropdown
            id={props.slot + '-character-selector'}
        >
            <DropdownToggle caret>
                {(current && current.summary.fullName) || props.default}
            </DropdownToggle>
            <DropdownMenu>
                {charSelectors}
                <DropdownItem divider />
                <DropdownItem onClick={props.onReset}>Reset...</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
}

export function DropdownCharacterSelectorRow(props) {
    return (
        <SelectorRow>
            <Row>
                <Col md={12} className={props.className}>
                    <DropDownCharacterSelector
                        onSelect={props.selectLeft}
                        characters={props.leftCharacters || props.characters}
                        current={props.left}
                        slot='left'
                        default={props.leftDefault || 'Pick a character...'}
                        onReset={props.resetLeft}
                    />
                    <span style={{ float: 'right' }}>
                        <DropDownCharacterSelector
                            style={{ float: 'right' }}
                            onSelect={props.selectRight}
                            characters={props.rightCharacters || props.characters}
                            current={props.right}
                            disabled={props.left}
                            slot='right'
                            default={props.rightDefault || 'Match up against...'}
                            onReset={props.resetRight}
                        />
                    </span>
                </Col>
            </Row>
        </SelectorRow>
    );
}


function VariantSelector(props) {
    const leftChar = characters[props.leftCharKey];
    const rightChar = characters[props.rightCharKey];
    const current = props.slot === 'left' ? (
        (leftChar && leftChar.variants[props.leftVariantKey]) || leftChar
    ) : (
        (rightChar && rightChar.variants[props.rightVariantKey]) || rightChar
    );

    function variantItems(char, charKey, disabledKey) {
        return [
            <DropdownItem header key={char.summary.name + '-header'}>
                {char.summary.name}
            </DropdownItem>,
            <DropdownItem
                key={char.summary.name + '-primary'}
                onClick={() => props.onSelect(charKey, 'none')}
                disabled={disabledKey === 'none'}
            >
                {char.summary.name}
            </DropdownItem>
        ].concat(Object.entries(char.variants).map(([key, variant]) => (
            <DropdownItem
                key={char.summary.name + key}
                onClick={() => props.onSelect(charKey, key)}
                disabled={key === disabledKey}
            >
                {variant.summary.name}
            </DropdownItem>
        )));
    }
    var leftItems, rightItems;

    if (leftChar && (props.slot === 'right' || props.leftCharKey !== props.rightCharKey)) {
        leftItems = variantItems(
            leftChar,
            props.leftCharKey,
            props.slot === 'right' && props.leftVariantKey
        );
    } else {
        leftItems = [];
    }

    if (rightChar && (props.slot === 'left' || props.leftCharKey !== props.rightCharKey)) {
        rightItems = variantItems(
            rightChar,
            props.rightCharKey,
            props.slot === 'left' && props.rightVariantKey
        );
    } else {
        rightItems = [];
    }

    if (leftItems.length > 0 || rightItems.length > 0) {
        return (
            <UncontrolledButtonDropdown
                id={props.slot + '-variant-selector'}
            >
                <DropdownToggle caret>
                    {(current && current.summary.name) || 'Select mirror matchup...'}
                </DropdownToggle>
                <DropdownMenu>
                    {
                        leftItems.concat(rightItems)
                    }
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        );
    } else {
        return null;
    }
}

export function VariantSelectorRow(props) {
    return (
        <SelectorRow>
            <Row>
                <Col md={12} {...props}>
                    <VariantSelector
                        onSelect={props.selectLeft}
                        leftCharKey={props.leftCharKey}
                        leftVariantKey={props.leftVariantKey}
                        rightCharKey={props.rightCharKey}
                        rightVariantKey={props.rightVariantKey}
                        slot='left'
                    />
                    <span style={{ float: 'right' }}>
                        <VariantSelector
                            style={{ float: 'right' }}
                            onSelect={props.selectRight}
                            leftCharKey={props.leftCharKey}
                            leftVariantKey={props.leftVariantKey}
                            rightCharKey={props.rightCharKey}
                            rightVariantKey={props.rightVariantKey}
                            slot='right'
                        />
                    </span>
                </Col>
            </Row>
        </SelectorRow>
    );
}
