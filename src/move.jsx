import {rankValue} from './rank.js';

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
