import React from 'react';

const knockdown = require('../images/knockdown.jpg');

function KD(props) {
    return <img className="combo-kd" src={knockdown} height="20" />;
}

export function ComboDetails(props) {
    return (
        <span className="combo-details">
            <ComboPoints count={props.points} max={props.max} />
            {props.type}
            {props.kd && <KD/>}
        </span>
    );
}

export function ComboPoints(props) {
    if (props.count == null) {
        return null;
    }
    const max = props.max || 6;
    const points = '\u25CF'.repeat(props.count) + '\u25CB'.repeat(max - props.count);

    return (
        <div className="combo-points">
            <div>{points.slice(0, 3)}</div>
            <div>{points.slice(3, 6)}</div>
        </div>
    );
}

function ComboType(props) {
    return <span className="combo-type full-name">{props.type}</span>;
}

export function Linker(props) {
    return <ComboType type="Linker"/>;
}

export function Ender(props) {
    return <ComboType type="Ender"/>;
}

export function Starter(props) {
    return <ComboType type="Starter"/>;
}

export function CantCombo(props) {
    return <ComboType type="Can't Combo"/>;
}
