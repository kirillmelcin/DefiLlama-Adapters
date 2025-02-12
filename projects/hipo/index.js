const { call } = require('../helper/chain/ton')

module.exports = {
  timetravel: false,
  methodology: 'Actual amount of TON staked on Hipo',
  hallmarks: [
    [1698685200, 'Hipo Launch'],
  ],
  ton: {
    tvl: async () => {
      const result = await call({ target: 'EQBNo5qAG8I8J6IxGaz15SfQVB-kX98YhKV_mT36Xo5vYxUa', abi: 'get_treasury_state' })
      const currentlyStakedNano = BigInt(result.stack[0][1])
      return {
        'coingecko:the-open-network': currentlyStakedNano / 1e9,
      }
    },
  },
}
