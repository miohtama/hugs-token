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
export ALCHEMY_API_KEY=7...
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
DEPLOYED_CONTRACT_ADDRESS=0x0aC7B3733cBeE5D87A80fbf331f4A0bD01f17386
npx hardhat verify --network rinkeby --contract contracts/DAMEXToken.sol:DAMEXToken  $DEPLOYED_CONTRACT_ADDRESS
```

