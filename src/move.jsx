import {rankValue} from './rank.js';

import styled from 'styled-components';

export const Block = styled.span`
    color: #15516b;
    font-weight: bold;
`;

export const Attack = styled.span`
    color: #861713;
    font-weight: bold;
`;

export const Dodge = styled.span`
    color: #552a55;
    font-weight: bold;
`;

export const Throw = styled.span`
    color: black;
    font-weight: bold;
`;


export function mkNormal(speedOffset, defaults) {
    function normal(rank, specific) {
        let move = {
            rank: rank,
            damage: rankValue(rank),
            speed: rankValue(rank) + speedOffset,
        };
        Object.entries(defaults || {}).forEach((item) => {
            const key = item[0];
            const value = item[1];

            if (typeof value === 'function') {
                move[key] = value(rank);
            } else {
                move[key] = value;
            }
        });
        return Object.assign(move, specific);
    };
    return normal;
};

export function overrideMoves(baseMoves, overrides) {
    return baseMoves.map((move) => Object.assign(
        {},
        move,
        overrides.find(
            (override) => (
                move.rank == override.rank
                && move.name == override.name
            )
        )
    ));
}
