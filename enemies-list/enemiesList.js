console.log("My Enemies List!");
console.log("----------------");

class Enemy {
    constructor(firstName, lastName, offenses, isReallyHated) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isReallyHated = isReallyHated;
        this.offenses = offenses;
    }
}

const GetEnemies = () => {
    const enemies = [
        new Enemy(
            "Joshua",
            "Flowers",
            [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school",
            ],
            true
        ),
        new Enemy(
            "Darth",
            "Vader",
            [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices",
            ],
            false
        ),
        new Enemy(
            "Betty",
            "Rudelady",
            [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist",
            ],
            true
        ),
        new Enemy("Leon", "Peck", ["Keeps giving me a hotplate"], false),
    ];
    return enemies;
};

const enemies = GetEnemies();
enemies.forEach((enemy) => {
    debugger;
    if (enemy.isReallyHated)
        console.log(
            `${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`
        );
    else console.log(`${enemy.firstName} ${enemy.lastName}`);
});
