const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployEUR() {
    // await deployContract("EUR", []);
    await verifyContract("EUR", getDeployFilteredInfo("EUR").imple, "contracts/EUR.sol:EUR", []);
}

module.exports = deployEUR