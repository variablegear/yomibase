import React from 'react';

function normalThrow(rank) {
    return {
        speed: rank + 0.4, rank: rank, pumpWith: '+X+X+X',
        damage: rank, pump: 3,
        comboType: "Can't Combo", kd: false,
        maxCombo: 't' + rank + '+++', maxDamage: rank + 9, goodCombo: 't' + rank + '+', goodDamage: rank + 3,
    };
};

export const lum = {
    summary: {
        name: 'Lum',
        fullName: 'Lum Bam-Foo',
        title: 'Gambling Panda',
        hitPoints: 90,
        maxCombo: 4,
        attackDefaults: {
            speedOffset: 0.4,
        },
        throwDefaults: {
            speedOffset: 0.4,
            comboType: "Can't Combo",
            kd: false,
        },
        attacks: [3, 4, 5, 6, 7, 8, 'J', 'Q', 'K', 'A'],
        throws: [6, 8, 9, 'T'],
        blocks: [2, 5, 7, 9, 'T'],
        dodges: [2, 3, 4, 'A'],
        innateAbilities: [
            {
                name: 'Roll the Dice',
                text: <div>
                    At the end of combat, if you dealt damage or block damage with an attack
                    this turn, you may discard the top card of your deck and consult the table:
                    <ul>
                        <li>2-3: Gain 4 life -OR- draw the bottom card from your deck.</li>
                        <li>4-10: Knock down opponent until end of combat next turn -OR-
                            return all face cards you played to your hand.</li>
                        <li>J,Q,K: Opponent's attacks and throws are 4 speed slower next turn.</li>
                        <li>A: Draw 3 cards then peek at the bottom card of your deck.</li>
                        <li>Joker: You take 1 damage.</li>
                    </ul>
                </div>
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Jackpot',
                timing: 'Draw Phase',
                text: <div>
                    Draw a card then the opponent reveals a card from their hand at random.
                    If it's an Ace, they take 7 damage and you draw another card. If it's
                    a Joker, you take 2 damage.',
                </div>
            },
            {
                rank: 'T',
                name: 'Poker Flourish',
                timing: 'End of turn',
                text: <div>
                    Make a poker hand using the top 2 cards of your discard pile and up
                    to 3 cards from your hand, then Discard this card to get the effect:
                    <ul>
                       <li>Straight: Search your deck for any card.</li>
                       <li>Flush: Draw 3 cards.</li>
                       <li>Full House: Deal 7 damage.</li>
                       <li>4-of-a-kind: Discard an Ace for Blackjack effect.</li>
                       <li>Straight Flush: Any two of the above.</li>
                    </ul>
                </div>
            },
            {
                rank: 'A',
                name: 'Blackjack',
                timing: 'During Combat',
                text: <div>
                    If you dodge an attack or Joker with this card, discard cards from
                    the top of your deck until they total more than 21 or you decide to
                    stop. Deal that much damage unless you go over 21. If you deal exactly
                    21, also put the cards in your hand. (Jokers count as 21.)
                </div>
            }
        ],
    },
    attacks: [
        { rank: 3, maxCombo: '3>K+++', maxDamage: 33, goodCombo: '3>4>5>6', goodDamage: 18 },
        { rank: 4, maxCombo: '4>K+++', maxDamage: 34, goodCombo: '4>5>6>7', goodDamage: 22 },
        { rank: 5, maxCombo: '5>K+++', maxDamage: 35, goodCombo: '5>6>7>J', goodDamage: 22 },
        { rank: 6, maxCombo: '6>K+++', maxDamage: 36, goodCombo: '6>7>J>5', goodDamage: 22 },
        { rank: 7, maxCombo: '7>K+++', maxDamage: 37, goodCombo: '7>J>5>6', goodDamage: 22 },
        {
            speed: 1.4, rank: 'J', name: 'Coin Toss',
            damage: 4, chip: 1, comboPts: 1, comboType: 'Linker',
            maxCombo: 'J>K+++', maxDamage: 34, goodCombo: 'J>5>6>7', goodDamage: 22,
        },
        {
            speed: 0.4, rank: 'Q', name: 'Rolling Panda', pumpWith: '+Q',
            damage: 8, pump: 8, chip: 2, comboPts: 3, comboType: 'Ender',
            maxCombo: 'Q+', maxDamage: 16,
        },
        {
            speed: 3.0, rank: 'K', name: 'Polar Cartwheel', pumpWith: '+K+K+K',
            damage: 6, pump: 8, chip: 3, comboPts: 3, comboType: 'Ender',
            maxCombo: 'K+++', maxDamage: 30, goodCombo: 'K+', goodDamage: 14,
        },
        {
            speed: 0.8, rank: 'AA', name: 'Great Pandamonium', pumpWith: '+A+A',
            damage: 21, pump: 12, chip: 4, comboType: "Can't Combo",
            maxCombo: 'AA++', maxDamage: 45, goodCombo: 'AA+', goodDamage: 33,
        },
    ],
    throws: [
        normalThrow(6),
        normalThrow(8),
        normalThrow(9),
        {
            rank: 'T', name: 'Extra Juice', pumpWith: '+X+X+X', speed: 10.4,
            damage: 10, pump: 4,
            maxCombo: 'tT+++', maxDamage: 22, goodCombo: 'tT+', goodDamage: 14,
        },
    ],
};
