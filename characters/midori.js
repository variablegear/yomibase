if (window.characters == null) {
    window.characters = {};
}

(function (characters) {
    characters.midori = {
        summary: {
            name: "Midori",
            fullName: "Master Midori",
            title: "Mentor Dragon",
            hitPoints: 90,
            maxCombo: 3,
            attackDefaults: {
                speedOffset: 0.2
            },
            throwDefaults: {
                speedOffset: 0.8,
                damage: 8,
                comboPts: 2,
                comboType: "Starter",
                kd: true
            },
            attacks: [4, 5, 6, 7, 8, "J", "Q", "A"],
            throws: ["2*", 3, 4, 5, 9, "T", "K", "A"],
            blocks: ["2*", 3, 6, 7, 8],
            dodges: [9, "T"],
            innateAbilities: [
                {
                    name: "Aspect of the Dragon",
                    text: "Your Dragon attacks can not be dodged by normal dodges. Whenever you block an attack or Joker while in Dragon Form, you may return a non-Joker card from your discard pile to your hand instead of drawing a card. (You can only play Dragon moves while in Dragon Form.)"
                },
                {
                    name: "Defense Mastery",
                    text: "Opponents don't draw when you block their normal attacks."
                }
            ],
            cardAbilities: [
                {
                    rank: 2,
                    name: "Dragon Form",
                    timing: "Draw Phase",
                    text: "Ongoing. You can play Dragon moves. Discard this if you get thrown or you combat-reveal a non-Dragon attack/throw."
                },
                {
                    rank: "T",
                    name: "Glimpse of the Dragon",
                    timing: "Combat Reveal",
                    text: "If you combat-revealed a face card while not in Dragon Form, rotate it 180 degrees to play the Dragon Form version of your move. (Aces aren't face cards.)"
                }
            ]
        },
        attacks: [
            { rank: 4 },
            { rank: 5 },
            { rank: 6 },
            { rank: 7 },
            { rank: 8 },
            { speed: 2.4, rank: "J", pumpWith: "+J", name: "Whirlwind", damage: 8, pump: 8, chip: 2 },
            { speed: 2.4, rank: "J", name: "Toxic Breath", damage: 9, chip: 2, notes: "Requires Dragon Form" },
            { speed: 1.2, rank: "Q", name: "Rising Mountain", damage: 10, chip: 1 },
            { speed: 0.6, rank: "Q", name: "Dragon Mountain", damage: 14, chip: 2, notes: "Requires Dragon Form" },
            { speed: 1.2, rank: "AA", name: "Wrath of Earth", damage: 20, chip: 2 }
        ],
        throws: [
            { rank: 2 },
            { rank: 3 },
            { rank: 4 },
            { rank: 5 },
            { rank: 9 },
            { rank: "T" },
            { speed: 4.4, rank: "K", name: "Rushing River", damage: 12 },
            { speed: 1.8, rank: "K", name: "Talon Swoop", damage: 17, notes: "Requires Dragon Form" },
            { speed: 0.0, rank: "AA", pumpWith: "+A+A", name: "Final Dragon Buster", damage: 20, pump: 16, notes: "Requires Dragon Form" }
        ]
    }
})(window.characters);
