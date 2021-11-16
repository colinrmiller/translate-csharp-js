console.log("Do you believe in magic?");
console.log("------------------------");

class SpellBook {
    constructor(title, spells) {
        this.title = title;
        this.spells = spells;
    }
}

class Spell {
    constructor(name, isEvil, energyReqired) {
        this.name = name;
        this.isEvil = isEvil;
        this.energyReqired = energyReqired;
    }
}

const getAllSpells = () => {
    let allSpells = [
        new Spell("Turn enemy into a newt", true, 5.1),
        new Spell("Conjure some gold for a local charity", false, 2.99),
        new Spell("Give a deaf person the ability to heal", false, 12.2),
        new Spell("Make yourself emperor of the universe", true, 100.0),
        new Spell(
            "Convince your relatives your political views are correct",
            false,
            2921.5
        ),
    ];
    return allSpells;
};

const makeGoodSpellBook = () => {
    return new SpellBook(
        "Good Book",
        allSpells.filter((spell) => !spell.isEvil)
    );
};

const makeEvilSpellBook = () => {
    return new SpellBook(
        "Evil Book",
        allSpells.filter((spell) => spell.isEvil)
    );
};

const displaySpellBook = (spellBook) => {
    console.log(spellBook.title);
    // console.log(spellBook.spells);

    spellBook.spells.forEach((spell) => {
        console.log(`  ${spell.name}`);
    });
    debugger;
};

const allSpells = getAllSpells();
const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
console.log();
displaySpellBook(evilBook);
