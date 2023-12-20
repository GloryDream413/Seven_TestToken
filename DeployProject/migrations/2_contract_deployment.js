const WAVAX = artifacts.require("WAVAX");
const WBTC = artifacts.require("WBTC");
const WETH = artifacts.require("WETH");
const USDC = artifacts.require("USDC");

module.exports = async function (deployer) {
  await deployer.deploy(WAVAX);
  const WAVAXDeployed = await WAVAX.deployed();

  await deployer.deploy(WBTC);
  const WBTCDeployed = await WBTC.deployed();

  await deployer.deploy(WETH);
  const WETHDeployed = await WETH.deployed();

  await deployer.deploy(USDC);
  const USDCDeployed = await USDC.deployed();
};