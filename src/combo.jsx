import React from 'react';
import styled from 'styled-components';

const knockdown = require('./images/knockdown.jpg');

export function KD(props) {
    return <img className="combo-kd" src={knockdown} height="20" alt="knocks down"/>;
}

const DetailEntry = styled.span`
    display: table-cell;
    vertical-align: middle;
`;

const DetailWrapper = styled.span`
    display: inline-table;
    border-spacing: 3px 0px;
    border-collapse: separate;
    vertical-align: text-bottom;
`;

export function ComboDetails(props) {
    return (
        <DetailWrapper>
            <DetailEntry><ComboPoints count={props.points} max={props.max} /></DetailEntry>
            <DetailEntry>{props.type}</DetailEntry>
            <DetailEntry>{props.kd && <KD/>}</DetailEntry>
        </DetailWrapper>
    );
}

const PointsWrapper = styled.div`
    line-height: 0.75;
`;

export function ComboPoints(props) {
    if (props.count == null) {
        return null;
    }
    const max = props.max || 6;
    const perRow = Math.ceil(Math.max(max, 6) / 2);
    const points = '\u25CF'.repeat(props.count) + '\u25CB'.repeat(max - props.count);

    return (
        <PointsWrapper>
            <div>{points.slice(0, perRow)}</div>
            <div>{points.slice(perRow, perRow*2)}</div>
        </PointsWrapper>
    );
}

const ComboType = styled.span`
    white-space: nowrap;
    background: white;
    padding-left: 2px;
    padding-right: 2px;
    border: black;
    border-style: solid;
    border-width: 1px;
`;

export function Linker(props) {
    return <ComboType>Linker</ComboType>;
}

export function Ender(props) {
    return <ComboType>Ender</ComboType>;
}

export function Starter(props) {
    return <ComboType>Starter</ComboType>;
}

export function CantCombo(props) {
    return <ComboType>Can't Combo</ComboType>;
}
