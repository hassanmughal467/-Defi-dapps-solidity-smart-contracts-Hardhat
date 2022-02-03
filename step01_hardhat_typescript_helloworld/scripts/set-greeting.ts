
import { ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain";

async function main() {
  
  const Greeter: Greeter__factory= await ethers.getContractFactory("Greeter");
  const greeter: Greeter = await Greeter.attach("0xc3A0A049F2625757a197BEbb37F86593d7c92a2b");

  await greeter.deployed();

  console.log("Greeter deployed at:", greeter.address);

  const result:ContractTransaction=await greeter.setGreeting("Hello bootcampers!");
  console.log("This is result = ",result);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
