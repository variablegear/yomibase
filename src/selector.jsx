import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
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
        mask-image: linear-gradient(left, black, transparent);
    }
`;

const RightSelectButton = styled(SelectButton)`
    left: 48px;

    &:hover {
        mask-image: linear-gradient(right, black, transparent);
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

const SelectedBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.selected ? '80px' : '96px'};
    height: ${(props) => props.selected ? '90px' : '106px'};
    background-color: rbga(0, 0, 0, 0);
    border: ${(props) => props.selected ? '8px solid ' + props.theme.border : 'none'};
`;

const SelectorRow = styled.div`
    padding-bottom: 10px;
`;

const RightJustifyCol = styled(Col)`
    text-align: right;
`;

function ImageSelector(props) {
    let selectedTheme = {};
    if (props.selectedLeft) {
        selectedTheme = defaultLeftTheme;
    }
    if (props.selectedRight) {
        selectedTheme = defaultRightTheme;
    }

    return (
        <ImageSelect selected={props.selectedLeft || props.selectedRight}>
            <img src={characters[props.char].theme.headshot}/>
            {/*<ThemeProvider theme={selectedTheme}>
                <SelectedBorder selected={props.selectedLeft || props.selectedRight} />
            </ThemeProvider>*/}
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
            selectedLeft={char == props.left}
            selectedRight={char == props.right}
            {...props}
        />
    };
    return (
        <SelectorRow>
            <Row>
                <Col md={6} xsHidden>
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
                <RightJustifyCol md={6} xsHidden>
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
                        slot='left'
                        default='Pick a character...'
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
                                slot='right'
                                default='Match up against...'
                                onReset={props.resetRight}
                            />
                        </span>
                    }
                </Col>
            </Row>
        </SelectorRow>
    );
}