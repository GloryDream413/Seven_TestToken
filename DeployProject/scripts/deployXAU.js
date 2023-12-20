const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployXAU() {
    // await deployContract("XAU", []);
    await verifyContract("XAU", getDeployFilteredInfo("XAU").imple, "contracts/XAU.sol:XAU", []);
}

module.exports = deployXAU