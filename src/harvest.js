
import web3 from './web3';

const contractAddress = "0xC1b50fb8bbD1F7Ce8Ba47630DAd11b5D4DE8ef3b";

const abi = [{
    "inputs": [
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}]

// create an instance of the contract
export default new web3.eth.Contract(abi, contractAddress)