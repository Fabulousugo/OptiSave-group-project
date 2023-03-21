async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const SmartSaver = await ethers.getContractFactory("SmartSaver");
  const smartSaver = await SmartSaver.deploy();

  console.log("SmartSaver address:", smartSaver.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });