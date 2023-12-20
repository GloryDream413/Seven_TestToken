const deployWBTC = require("../deployWBTC.js");
const deployWETH = require("../deployWETH.js");
const deployEUR = require("../deployEUR.js");
const deployXAU = require("../deployXAU.js");
const deployUSDC = require("../deployUSDC.js");

const deploy_core = async () => {
    await deployEUR();
    // await deployXAU();
    // await deployWETH();
    // await deployWBTC();
    // await deployUSDC();
}

module.exports = { deploy_core };