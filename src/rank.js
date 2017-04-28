
export function rankValue(rank) {
    rank = typeof rank === 'string' ? rank[0] : rank;
    const ranks = {
        T: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    };
    return (ranks[rank] || rank);
}