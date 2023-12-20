const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWBTC() {
    // await deployContract("WBTC", []);
    await verifyContract("WBTC", getDeployFilteredInfo("WBTC").imple, "contracts/WBTC.sol:WBTC", []);
}

module.exports = deployWBTC