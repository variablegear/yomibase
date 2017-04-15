import React from 'react';
import Note from '../note.jsx';

export const troq = {
    summary: {
        name: 'Troq',
        fullName: 'Troq Bashar',
        title: 'Well-meaning Beast',
        hitPoints: 95,
        maxCombo: 3,
        attackDefaults: {
            speedOffset: 0.8,
        },
        throwDefaults: {
            speedOffset: 0.0,
            damage: 8,
            comboPts: 2,
            comboType: 'Starter',
            kd: true,
        },
        attacks: [4, 5, 6, 7, 8, 'J', 'Q', 'A'],
        throws: [2, 3, 4, , 5, 9, 'T', 'K', 'A'],
        blocks: [2, 3, 6, 7, 8],
        dodges: [9, 'T'],
        innateAbilities: [
            {
                name: 'Giant Growth',
                text: 'Whenever you block an attack or Joker, attach your block card to your character card, or discard it if two cards are already attached. Your normal attacks and normal throws do +1 damage for each attached card. (You still draw a card from blocking, as usual.)',
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 'T',
                name: 'War Stomp',
                timing: 'Draw Phase',
                text: 'If you are not knocked down, knock the opponent down, draw a card, and the opponent discards a card.',
            },
            {
                rank: 'J',
                name: 'Troq Armor',
                timing: 'During Combat',
                text: 'Neither side of this Jack can be interrupted by normal attacks. (If it\'s hit by a faster normal attack, the opponent can\'t combo. This hits afterwards and wins combat.)',
            },
            {
                rank: 'K',
                name: 'Lockhorn Skewer',
                timing: 'During Combat',
                text: 'This beats normal attacks with speed 5.0 or faster, but you still take damage from the normal attack.',
            },
            {
                rank: 'AAA',
                name: 'Beast Unleashed',
                timing: 'During Combat',
                text: 'When you attempt Beast Unleashed, return your attached block cards to your hand.',
            },
        ],
    },
    attacks: [
        {rank: 4, maxCombo: '4>AA', maxDamage: 24, goodCombo: '4>5>6', goodDamage: 15},
        {rank: 5, maxCombo: '5>AA', maxDamage: 25, goodCombo: '5>6>7', goodDamage: 18},
        {rank: 6, maxCombo: '6>AA', maxDamage: 26, goodCombo: '6>7>8', goodDamage: 21},
        {rank: 7, maxCombo: '7>AA', maxDamage: 27, goodCombo: '7>8>J', goodDamage: 22},
        {rank: 8, maxCombo: '8>AA', maxDamage: 28, goodCombo: '8>J', goodDamage: 18},
        {
            speed: 2.2, rank: 'J', name: 'Bull Rush',
            damage: 7, chip: 2, comboPts: 1, comboType: 'Ender',
        },
        {
            speed: 3.4, rank: 'J', name: 'Bull Charge',
            damage: 10, chip: 3, comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 0.8, rank: 'Q', name: 'Up Hawk',
            damage: 9, chip: '2', comboPts: 2, comboType: 'Ender',
        },
        {
            speed: 1.0, rank: 'AA', name: 'Eagle Totem',
            damage: 20, chip: 2, comboPts: 2, comboType: 'Ender',
        },
    ],
    throws: [
        {rank: 2, maxCombo: 't2>8', maxDamage: 16, goodCombo: 't2>6', goodDamage: 14},
        {rank: 3, maxCombo: 't3>8', maxDamage: 16, goodCombo: 't3>6', goodDamage: 14},
        {rank: 4, maxCombo: 't4>8', maxDamage: 16, goodCombo: 't4>6', goodDamage: 14},
        {rank: 5, maxCombo: 't5>8', maxDamage: 16, goodCombo: 't5>6', goodDamage: 14},
        {rank: 9, maxCombo: 't9>8', maxDamage: 16, goodCombo: 't9>6', goodDamage: 14},
        {rank: 'T', maxCombo: 'tT>8', maxDamage: 16, goodCombo: 'tT>6', goodDamage: 14},
        {
            speed: 2.4, rank: 'K', name: 'Lockhorn Skewer',
            damage: 15, comboPts: null, comboType: 'Can\'t Combo',
        },
        {
            speed: 0.0, rank: 'AAA', name: 'Beast Unleashed',
            damage: 45, comboPts: null, comboType: 'Can\'t Combo',
            notes: <Note text="Requires 2 attached blocks" icon={<span className='yomi-block'>{'+\u26CA >= 2'}</span>} />,
        },
    ],
};
