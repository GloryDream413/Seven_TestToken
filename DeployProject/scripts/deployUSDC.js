const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployUSDC() {
    // await deployContract("USDC", []);
    await verifyContract("USDC", getDeployFilteredInfo("USDC").imple, "contracts/USDC.sol:USDC", []);
}

module.exports = deployUSDC