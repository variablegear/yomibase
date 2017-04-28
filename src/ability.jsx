import React from 'react';

export function CardAbility(entry, multiline) {
    return [
        <dt key={entry.rank + '-rank'}>{entry.rank} - {entry.name}{multiline ? <br /> : ' '}[{entry.timing}]</dt>,
        <dd key={entry.rank + '-text'}>{entry.text}</dd>,
    ];
}