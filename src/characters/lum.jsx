import React from 'react';
import {CantCombo, Ender, Linker, Starter} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {rankValue} from '../rank.js';

const normalThrow = mkNormal(0.4, {
    pumpWith: '+X+X+X',
    damage: (rank) => rankValue(rank),
    pump: 3,
    comboType: <CantCombo/>,
    kd: false,
    maxCombo: (rank) => 't' + rank + '+++',
    maxDamage: (rank) => rankValue(rank) + 9,
    goodCombo: (rank) => 't' + rank + '+',
    goodDamage: (rank) => rankValue(rank) + 3,
});

const normalAttack = mkNormal(0.4);

export const lum = {
    theme: {
        // primary: #FDFFF4
        text: '#FDFFF4',
        headshot: require('../../images/lum.jpg'),
    },
    summary: {
        name: 'Lum',
        fullName: 'Lum Bam-Foo',
        title: 'Gambling Panda',
        hitPoints: 90,
        maxCombo: 4,
        attackSpeed: <span>x.4 <i>(x = card rank)</i></span>,
        throwSpeed: <span>x.4 <CantCombo/></span>,
        throwDamage: <span>x+3 (+3 any)</span>,
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
                        <li>2-3: You gain 4 life -OR- draw the bottom card from your deck.</li>
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
                    a Joker, you take 2 damage.
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
        normalAttack(3, { maxCombo: '3>K+++', maxDamage: 33, goodCombo: '3>4>5>6', goodDamage: 18 }),
        normalAttack(4, { maxCombo: '4>K+++', maxDamage: 34, goodCombo: '4>5>6>7', goodDamage: 22 }),
        normalAttack(5, { maxCombo: '5>K+++', maxDamage: 35, goodCombo: '5>6>7>J', goodDamage: 22 }),
        normalAttack(6, { maxCombo: '6>K+++', maxDamage: 36, goodCombo: '6>7>J>5', goodDamage: 22 }),
        normalAttack(7, { maxCombo: '7>K+++', maxDamage: 37, goodCombo: '7>J>5>6', goodDamage: 22 }),
        {
            speed: 1.4, rank: 'J', name: 'Coin Toss',
            damage: 4, chip: 1, comboPts: 1, comboType: <Linker/>,
            maxCombo: 'J>K+++', maxDamage: 34, goodCombo: 'J>5>6>7', goodDamage: 22,
        },
        {
            speed: 0.4, rank: 'Q', name: 'Rolling Panda', pumpWith: '+Q',
            damage: 8, pump: 8, chip: 2, comboPts: 3, comboType: <Ender/>,
            maxCombo: 'Q+', maxDamage: 16,
        },
        {
            speed: 3.0, rank: 'K', name: 'Polar Cartwheel', pumpWith: '+K+K+K',
            damage: 6, pump: 8, chip: 3, comboPts: 3, comboType: <Ender/>,
            maxCombo: 'K+++', maxDamage: 30, goodCombo: 'K+', goodDamage: 14,
        },
        {
            speed: 0.8, rank: 'AA', name: 'Great Pandamonium', pumpWith: '+A+A',
            damage: 21, pump: 12, chip: 4, comboType: <CantCombo/>,
            maxCombo: 'AA++', maxDamage: 45, goodCombo: 'AA+', goodDamage: 33,
        },
    ],
    throws: [
        normalThrow(6),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T', {
            name: 'Extra Juice', pumpWith: '+X+X+X', damage: 10, pump: 4,
            maxCombo: 'tT+++', maxDamage: 22, goodCombo: 'tT+', goodDamage: 14,
        }),
    ],
};

lum.variants = {
    EX: Object.assign({}, lum, {
        summary: Object.assign({}, lum.summary, {
            name: <span>EX {lum.summary.name}</span>,
            fullName: <span>EX {lum.summary.fullName}</span>,
            innateAbilities: [
                {
                    name: 'Roll the Loaded Dice',
                    text: <div>
                          At the end of combat, if you dealt damage or block damage with an attack
                          this turn, you may discard the top card of your deck and consult the table:
                          <ul>
                              <li>2-3: You gain 7 life -OR- draw the bottom card from your deck.</li>
                              <li>4-10: Knock down the opponent and fetch a non-Joker card from your discard pile.</li>
                              <li>J,Q,K: Draw 3 cards and your opponent's attacks and throws are 4 speed slower next turn.</li>
                              <li>A: Search your deck or discard pile for an Ace and trigger the Blackjack effect.</li>
                              <li>Joker: You lose the game.</li>
                          </ul>
                    </div>
                },
            ],
            cardAbilities: lum.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Item Toss',
                    timing: 'During Combat',
                    text: <div>
                        Whenever you play this in combat (even in a combo or after
                        a dodge), play a random card from your item sidedeck, then
                        return that card to your sidedeck.
                        <ul>
                            <li>Crash Potato:
                                You take 5 damage, then the
                                opponent takes 5 damage and
                                can't continue their combo.</li>
                            <li>Tiny Lum:
                                Discard the top card of your
                                deck and use it to trigger your
                                character innate.</li>
                            <li>Tiny Rook:
                                The opponent takes 10 damage,
                                is knocked down,
                                and can't continue their combo.</li>
                            <li>Bamboo Shaft:
                                Take some time to eat!
                                Gain 3 life. Your attacks and throws
                                are 3 speed slower next combat.</li>
                            <li>Gear:
                                If Item Toss hit, Gear deals 8 damage.
                                If Item Toss was normal blocked, the
                                opponent can't activate innate abilities
                                from blocking, and you may throw them.
                                (Play a throw card from your hand. The
                                opponent doesn't draw a card from blocking.)</li>
                            <li>Rain of Dice:
                                Choose three different effects
                                from your character innate.</li>
                            <li>Possibly Poison:
                                The opponent chooses one:
                                they take 5 damage now -OR- take
                                10 damage if they don't win next
                                combat, but 0 damage if they do.</li>
                        </ul>
                    </div>
                },
            ]),
            attacks: lum.summary.attacks.concat(['D']),
        }),
        attacks: lum.attacks.concat([
            {
                speed: 2.6, rank: 'D', name: 'Item Toss', damage: 0,
                comboPts: 1, comboType: <Ender/>
            },
        ]),
    }),
    gPanda: Object.assign({}, lum, {
        summary: Object.assign({}, lum.summary, {
            name: <span>G. Panda</span>,
            fullName: <span>G. Panda</span>,
            title: null,
            innateAbilities: [
                {
                    name: 'Any Challenge?',
                    text: <span>
                        Before combat-reveal, if you took damage last turn,
                        you can say what your combat card is. If your opponent
                        doesn't challenge it, it's what you said until end of
                        combat. If they challenge and you lied, it's no-card
                        and you take 5 damage. If they challenge and you told
                        the truth, they take 5 damage and you get a panda coin.
                    </span>
                },
            ],
            cardAbilities: [
                {
                    rank: 2,
                    name: 'want to fold?',
                    timing: 'While Combat Cards Facedown',
                    text: <div>
                        Discard a 2 to name attack, block. throw or dodge, then
                        the opponent can fold to cancel combat. If they do, you
                        get a panda coin. If they don't and they combat-reveal
                        what you named, they take 7 damage and are knocked down.
                        (Discard all combat cards if they fold.)
                    </div>
                },
                {
                    rank: 6,
                    name: 'sleight of paw',
                    timing: 'After Combat Reveal',
                    text: <div>
                        Discard a 6 and spend a panda coin to replace your combat
                        card with the top card of your deck. (Choos the side of
                        the new card before revealing it).
                    </div>
                },
                {
                    rank: 'T',
                    name: 'pay to play',
                    timing: 'End of Combat',
                    text: <div>
                        Reveal a 10 and spend a panda coin -OR- discard a 10 to
                        return all face cards you played this turn to your hand.
                        (Aces are not face cards).
                    </div>
                }
            ],
            dodges: [2, 3, 4],
        }),
        attacks: [
            normalAttack(3, { maxCombo: '3>K+++', maxDamage: 33, goodCombo: '3>4>5>6', goodDamage: 18 }),
            normalAttack(4, { maxCombo: '4>K+++', maxDamage: 34, goodCombo: '4>5>6>7', goodDamage: 22 }),
            normalAttack(5, { maxCombo: '5>K+++', maxDamage: 35, goodCombo: '5>6>7>J', goodDamage: 22 }),
            normalAttack(6, { maxCombo: '6>K+++', maxDamage: 36, goodCombo: '6>7>J>5', goodDamage: 22 }),
            normalAttack(7, { maxCombo: '7>K+++', maxDamage: 37, goodCombo: '7>J>5>6', goodDamage: 22 }),
            {
                speed: 1.4, rank: 'J', damage: 4, chip: 1, comboPts: 1, comboType: <Linker/>,
                maxCombo: 'J>K+++', maxDamage: 34, goodCombo: 'J>5>6>7', goodDamage: 22,
            },
            {
                speed: 0.4, rank: 'Q', pumpWith: '+Q', damage: 8, pump: 8, chip: 1,
                comboPts: 3, comboType: <Ender/>, maxCombo: 'Q+', maxDamage: 16,
            },
            {
                speed: 3.0, rank: 'K', pumpWith: '+K+K+K', damage: 6, pump: 8, chip: 3,
                comboPts: 3, comboType: <Ender/>, maxCombo: 'K++++', maxDamage: 38,
                goodCombo: 'K+', goodDamage: 14,
            },
            {
                speed: 0.8, rank: 'A', pumpWith: '+A+A', damage: 10, pump: 12, chip: 2,
                comboType: <CantCombo/>, maxCombo: 'A++', maxDamage: 34,
                goodCombo: 'A+', goodDamage: 22,
            },
            {
                speed: 1.0, rank: 'AA', damage: 21, chip: 4, comboType: <CantCombo/>,
            },
        ],
        throws: [
            normalThrow(6),
            normalThrow(8),
            normalThrow(9),
            normalThrow('T'),
        ],
    }),
};
