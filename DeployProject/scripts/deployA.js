const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployA() {
    // await deployContract("A", []);
    await verifyContract("A", getDeployFilteredInfo("A").imple, "contracts/A.sol:A", []);
}

module.exports = deployA