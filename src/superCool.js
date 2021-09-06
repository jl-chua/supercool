
import web3 from './web3';

const contractAddress = "0xe46302afbae91c8129fc7693b8a2470a24c31ddd";

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