/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    const n = plants.length;
    let alice = 0, bob = n - 1;
    let aliceTimes = 0, bobTimes = 0;
    let aliceRemaining = capacityA, bobRemaining = capacityB;
    while (alice <= bob) {
        const currentA = plants[alice];
        const currentB = plants[bob];
        if (alice === bob && aliceRemaining >= bobRemaining) {
            if (aliceRemaining >= currentA) {
                aliceRemaining = aliceRemaining - currentA;
            } else {
                aliceRemaining = capacityA;
                aliceRemaining -= currentA;
                aliceTimes++;
            }
        } else if (alice === bob && aliceRemaining < bobRemaining) {
            if (bobRemaining >= currentB) {
                bobRemaining = bobRemaining - currentB;
            } else {
                bobRemaining = capacityB;
                bobRemaining -= currentB;
                bobTimes++;
            }
        } else {
            if (aliceRemaining >= currentA) {
                aliceRemaining = aliceRemaining - currentA;
            } else {
                aliceRemaining = capacityA;
                aliceRemaining -= currentA;
                aliceTimes++;
            }
            if (bobRemaining >= currentB) {
                bobRemaining = bobRemaining - currentB;
            } else {
                bobRemaining = capacityB;
                bobRemaining -= currentB;
                bobTimes++;
            }
        }
        alice++;
        bob--;
    }
    return aliceTimes + bobTimes;
};

const plants = [1,2,4,4,5], capacityA = 6, capacityB = 5;
console.log(minimumRefill(plants, capacityA, capacityB));
