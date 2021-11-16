function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

class Die {
    constructor(value) {
        this.value = value;
    }

    toString = () => {
        let dieString = "Unkown";

        switch (this.value) {
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }
        return dieString;
    };
}

const roll = () => {
    const dieValue = getRandomInt(1, 6);
    const die = new Die(dieValue);
    return die;
};

for (let i = 0; i < 10; i++) {
    const die1 = roll();
    const die2 = roll();

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`;
    if (die1.value == die2.value) {
        message += " DOUBLES!";
    }

    console.log(message);
}
