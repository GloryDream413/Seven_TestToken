const WMATIC = artifacts.require("WMATIC");
const WBNB = artifacts.require("WBNB");
const WETH = artifacts.require("WETH");
const LINK = artifacts.require("LINK");
const TRX = artifacts.require("TRX");
const A = artifacts.require("A");
const USDT = artifacts.require("USDT");

module.exports = async function (deployer) {
  await deployer.deploy(WMATIC);
  await WMATIC.deployed();

  await deployer.deploy(WBNB);
  await WBNB.deployed();

  await deployer.deploy(WETH);
  await WETH.deployed();

  await deployer.deploy(LINK);
  await LINK.deployed();

  await deployer.deploy(TRX);
  await TRX.deployed();

  await deployer.deploy(A);
  await A.deployed();

  await deployer.deploy(USDT);
  await USDT.deployed();
};