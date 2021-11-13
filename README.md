# Tasks Run remaining: 

                       1.Make API for lists of supported tokens and supported farms
                       2.Add addresses for router and factory on optimism mainnet
                       3.Implemet Lending page



## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to your JSON-RPC provider 

Note that the interface only works on testnets where both 
[Pangolin](https://github.com/pangolindex/exchange-contracts) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Attribution
This code was adapted from this Uniswap repo: [uniswap-interface](https://github.com/Uniswap/uniswap-interface).
