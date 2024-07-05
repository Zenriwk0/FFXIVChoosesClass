function randomNumber () {
    return Math.floor(Math.random()*21) + 1;
}

function getJob() {
    switch (randomNumber()) {
        case 1:
            return "Paladin";
        case 2:
            return "Warrior";
        case 3:
            return "Dark Knight";
        case 4:
            return "Gunbreaker";
        case 5:
            return "White Mage";
        case 6:
            return "Scholar";
        case 7:
            return "Astrologian";
        case 8:
            return "Sage";
        case 9:
            return "Monk";
        case 10:
            return "Dragoon";
        case 11:
            return "Ninja";
        case 12:
            return "Samurai";
        case 13:
            return "Reaper";
        case 14:
            return "Bard";
        case 15:
            return "Machinist";
        case 16:
            return "Dancer";
        case 17:
            return "Black Mage";
        case 18:
            return "Summoner";
        case 19:
            return "Red Mage";
        case 20:
            return "Viper";
        case 21:
            return "Pictomancer";
    }
};

const getUniqueJob = (excludedClass) => {
    let nicheClass = getJob();
    if (nicheClass === excludedClass) {
        return getUniqueJob(excludedClass);
    }
    return nicheClass;
};

const getUniqueJobTwo = (nicheClass, Class) => {
    let deffNotClass = getJob();
    if (deffNotClass === nicheClass || deffNotClass === Class) {
        return getUniqueJobTwo(nicheClass, Class);
    }
    return deffNotClass;
};


let Class = getJob();
let nicheClass = getUniqueJob(Class);
let deffNotClass = getUniqueJobTwo(nicheClass, Class);
console.log("Ather tells me you should get " + Class + " or " + nicheClass + " but at any cost don't take " + deffNotClass);