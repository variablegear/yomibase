import {rankValue} from './rank.js';

import styled from 'styled-components';

export const Block = styled.span`
    color: #2369db;
    font-weight: bold;
`;

export const Attack = styled.span`
    color: #bf1515;
    font-weight: bold;
`;

export const Dodge = styled.span`
    color: #670d9b;
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
