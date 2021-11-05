import { ChainId } from '@pangolindex/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f',
  [ChainId.AVALANCHE]: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
  [ChainId.ROPSTEN]: '0xb0d1024283f5a8d2391f9D00583cD099546Cd26f'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
