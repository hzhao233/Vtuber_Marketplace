var VtuberNFT = artifacts.require("VtuberNFT");
var Marketplace = artifacts.require("Marketplace");

module.exports = async function(deployer) {
  await deployer.deploy(Marketplace);
  const marketplace = await Marketplace.deployed();
  await deployer.deploy(VtuberNFT, marketplace.address);
}