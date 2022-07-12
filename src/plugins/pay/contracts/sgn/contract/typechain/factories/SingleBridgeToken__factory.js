"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SingleBridgeToken__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string"
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8"
            },
            {
                internalType: "address",
                name: "bridge_",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "bridge",
                type: "address"
            },
        ],
        name: "BridgeUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "bridge",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "burn",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_bridge",
                type: "address"
            },
        ],
        name: "updateBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b50604051620013893803806200138983398101604081905262000034916200027a565b8351849084906200004d90600390602085019062000107565b5080516200006390600490602084019062000107565b505050620000806200007a620000b160201b60201c565b620000b5565b60ff91909116608052600680546001600160a01b0319166001600160a01b03909216919091179055506200035b9050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b82805462000115906200031e565b90600052602060002090601f01602090048101928262000139576000855562000184565b82601f106200015457805160ff191683800117855562000184565b8280016001018555821562000184579182015b828111156200018457825182559160200191906001019062000167565b506200019292915062000196565b5090565b5b8082111562000192576000815560010162000197565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001d557600080fd5b81516001600160401b0380821115620001f257620001f2620001ad565b604051601f8301601f19908116603f011681019082821181831017156200021d576200021d620001ad565b816040528381526020925086838588010111156200023a57600080fd5b600091505b838210156200025e57858201830151818301840152908201906200023f565b83821115620002705760008385830101525b9695505050505050565b600080600080608085870312156200029157600080fd5b84516001600160401b0380821115620002a957600080fd5b620002b788838901620001c3565b95506020870151915080821115620002ce57600080fd5b50620002dd87828801620001c3565b935050604085015160ff81168114620002f557600080fd5b60608601519092506001600160a01b03811681146200031357600080fd5b939692955090935050565b600181811c908216806200033357607f821691505b602082108114156200035557634e487b7160e01b600052602260045260246000fd5b50919050565b6080516110126200037760003960006101c301526110126000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063a457c2d711610081578063dd62ed3e11610066578063dd62ed3e146102cb578063e78cea9214610304578063f2fde38b1461031757600080fd5b8063a457c2d7146102a5578063a9059cbb146102b857600080fd5b80638da5cb5b116100b25780638da5cb5b1461027957806395d89b411461028a5780639dc29fac1461029257600080fd5b8063715018a614610251578063893d20e81461025957600080fd5b8063313ce5671161012457806340c10f191161010957806340c10f19146102005780636eb382121461021357806370a082311461022857600080fd5b8063313ce567146101bc57806339509351146101ed57600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61032a565b60405161016b9190610e30565b60405180910390f35b610187610182366004610ea1565b6103bc565b604051901515815260200161016b565b6002545b60405190815260200161016b565b6101876101b7366004610ecb565b6103d2565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b6101876101fb366004610ea1565b610496565b61018761020e366004610ea1565b6104d2565b610226610221366004610f07565b610539565b005b61019b610236366004610f07565b6001600160a01b031660009081526020819052604090205490565b6102266105f4565b61026161065a565b6040516001600160a01b03909116815260200161016b565b6005546001600160a01b0316610261565b61015e610673565b6101876102a0366004610ea1565b610682565b6101876102b3366004610ea1565b6106e9565b6101876102c6366004610ea1565b61079a565b61019b6102d9366004610f29565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600654610261906001600160a01b031681565b610226610325366004610f07565b6107a7565b60606003805461033990610f5c565b80601f016020809104026020016040519081016040528092919081815260200182805461036590610f5c565b80156103b25780601f10610387576101008083540402835291602001916103b2565b820191906000526020600020905b81548152906001019060200180831161039557829003601f168201915b5050505050905090565b60006103c9338484610889565b50600192915050565b60006103df8484846109ae565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561047e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61048b8533858403610889565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103c99185906104cd908690610fad565b610889565b6006546000906001600160a01b0316331461052f5760405162461bcd60e51b815260206004820152601460248201527f63616c6c6572206973206e6f74206272696467650000000000000000000000006044820152606401610475565b6103c98383610bac565b6005546001600160a01b031633146105935760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610475565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a9060200160405180910390a150565b6005546001600160a01b0316331461064e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610475565b6106586000610c8b565b565b600061066e6005546001600160a01b031690565b905090565b60606004805461033990610f5c565b6006546000906001600160a01b031633146106df5760405162461bcd60e51b815260206004820152601460248201527f63616c6c6572206973206e6f74206272696467650000000000000000000000006044820152606401610475565b6103c98383610cea565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156107835760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610475565b6107903385858403610889565b5060019392505050565b60006103c93384846109ae565b6005546001600160a01b031633146108015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610475565b6001600160a01b03811661087d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610475565b61088681610c8b565b50565b6001600160a01b0383166108eb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610475565b6001600160a01b03821661094c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610475565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610a2a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610475565b6001600160a01b038216610a8c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610475565b6001600160a01b03831660009081526020819052604090205481811015610b1b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610475565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b52908490610fad565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9e91815260200190565b60405180910390a350505050565b6001600160a01b038216610c025760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610475565b8060026000828254610c149190610fad565b90915550506001600160a01b03821660009081526020819052604081208054839290610c41908490610fad565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610d4a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610475565b6001600160a01b03821660009081526020819052604090205481811015610dbe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610475565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ded908490610fc5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016109a1565b600060208083528351808285015260005b81811015610e5d57858101830151858201604001528201610e41565b81811115610e6f576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610e9c57600080fd5b919050565b60008060408385031215610eb457600080fd5b610ebd83610e85565b946020939093013593505050565b600080600060608486031215610ee057600080fd5b610ee984610e85565b9250610ef760208501610e85565b9150604084013590509250925092565b600060208284031215610f1957600080fd5b610f2282610e85565b9392505050565b60008060408385031215610f3c57600080fd5b610f4583610e85565b9150610f5360208401610e85565b90509250929050565b600181811c90821680610f7057607f821691505b60208210811415610f9157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fc057610fc0610f97565b500190565b600082821015610fd757610fd7610f97565b50039056fea2646970667358221220985e7d9c0d6925ddea892fa60ab6a44f7c74d71700118d8308e54b5ada64f41a64736f6c63430008090033";
var SingleBridgeToken__factory = /** @class */ (function (_super) {
    __extends(SingleBridgeToken__factory, _super);
    function SingleBridgeToken__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    SingleBridgeToken__factory.prototype.deploy = function (name_, symbol_, decimals_, bridge_, overrides) {
        return _super.prototype.deploy.call(this, name_, symbol_, decimals_, bridge_, overrides || {});
    };
    SingleBridgeToken__factory.prototype.getDeployTransaction = function (name_, symbol_, decimals_, bridge_, overrides) {
        return _super.prototype.getDeployTransaction.call(this, name_, symbol_, decimals_, bridge_, overrides || {});
    };
    SingleBridgeToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SingleBridgeToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SingleBridgeToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SingleBridgeToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SingleBridgeToken__factory.bytecode = _bytecode;
    SingleBridgeToken__factory.abi = _abi;
    return SingleBridgeToken__factory;
}(ethers_1.ContractFactory));
exports.SingleBridgeToken__factory = SingleBridgeToken__factory;