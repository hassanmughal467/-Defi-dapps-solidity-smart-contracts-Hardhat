
import { ethers } from "hardhat";
import { SolidityTest, SolidityTest__factory } from "../typechain";
async function main() {

  const SolidityTest:SolidityTest__factory= await ethers.getContractFactory("SolidityTest");
  const solidityTest = await SolidityTest.deploy();

  await solidityTest.deployed();

  console.log("Greeter deployed to:", solidityTest.address);

  const result=await solidityTest.getResult();
  console.log("This is result : ",result.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
