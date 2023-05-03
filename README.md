# Hugs ERC-20 token

- Hugs token is OpenZeppelin v4.7.3 baed ERC-20 token
- The token is burnable
- The token and OpenZeppelin base ERC-20 contracts have been modified to allow metadata updates (name, symbol) 

# Deploy

The deployment is done using Alchemy API service and Etherscan.

Create deployment key with Python and web3:

```shell
python -c "from web3 import Web3; w3 = Web3(); acc = w3.eth.account.create(); print(f'private key={w3.to_hex(acc._private_key)}, account={acc.address}')"
```

Set up your environment:

```shell
export PRIVATE_KEY=0x....
export ALCHEMY_API_KEY=...
export ETHERSCAN_API_KEY=...
```

## Goerli testnet

Deploy to Goerli using Hardhat:

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
```

Verify the deployment:

```shell
DEPLOYED_CONTRACT_ADDRESS=
npx hardhat verify --network goerli --contract contracts/HugsToken.sol:HugsToken  $DEPLOYED_CONTRACT_ADDRESS
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
DEPLOYED_CONTRACT_ADDRESS=
npx hardhat verify --network mainnet --contract contracts/HugsToken.sol:HugsToken  $DEPLOYED_CONTRACT_ADDRESS
```

# Tests

To run tests:

```shell
export PRIVATE_KEY=0x`openssl rand -hex 32`
npx hardhat test
```