# DAMEX ERC-20 token

work-in-progress

# Deploy

Create deployment key with Python and web3:

```shell
python -c "from web3 import Web3; w3 = Web3(); acc = w3.eth.account.create(); print(f'private key={w3.toHex(acc.privateKey)}, account={acc.address}')"
```

Set up your environment:

```shell
export PRIVATE_KEY=0x....
export ALCHEMY_API_KEY=...
export ETHERSCAN_API_KEY=...
```

## Goerli

Deploy to Goerli using Hardhat:

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
```

Verify the deployment:

```shell
DEPLOYED_CONTRACT_ADDRESS=0xdD68BAEef4BC26F8ef921A43d448cE5A1cDac800
npx hardhat verify --network rinkeby --contract contracts/DAMEXToken.sol:DAMEXToken  $DEPLOYED_CONTRACT_ADDRESS
```

## Mainnet

Deploy to Ethereum mainnet using Hardhat:

```
# Use mainnet API key
export ALCHEMY_API_KEY=...
npx hardhat compile
npx hardhat run scripts/deploy.js --network mainnet
```

Verify the deployment:

```shell
DEPLOYED_CONTRACT_ADDRESS=0x0aC7B3733cBeE5D87A80fbf331f4A0bD01f17386
npx hardhat verify --network mainnet --contract contracts/DAMEXToken.sol:DAMEXToken  $DEPLOYED_CONTRACT_ADDRESS
```
