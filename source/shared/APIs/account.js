const {
  SigningCosmWasmClient,
  Secp256k1Pen,
  pubkeyToAddress,
  encodeSecp256k1Pubkey,
  CosmWasmClient
} = require('secretjs')
const fs = require('fs')

const {
  Snip20GetBalance,
  Snip20SetViewingKey,
  GetSnip20Params
} = require('./snip20')

require('unfetch')
const { Bip39, Random } = require('@iov/crypto');

const encodeMnenomic = () => Bip39.encode(Random.getBytes(16)).toString()

export const createKeypair = async (mnemonic = encodeMnenomic()) => {
    const keypairResponse = await Secp256k1Pen.fromMnemonic(mnemonic)
    return keypairResponse
}


const createAccount = async (mnemonic = encodeMnenomic()) => {
  // Create random address and mnemonic
  const mnemonic = Bip39.encode(Random.getBytes(16)).toString()

  // This wraps a single keypair and allows for signing.
  const signingPen = await Secp256k1Pen.fromMnemonic(mnemonic)

  // Get the public key
  const pubkey = encodeSecp256k1Pubkey(signingPen.pubkey)

  // Get the wallet address
  const accAddress = pubkeyToAddress(pubkey, 'secret')

  // Query the account
  const client = new CosmWasmClient(process.env.SECRET_REST_URL)
  const account = await client.getAccount(accAddress)

  console.log('mnemonic: ', mnemonic)
  console.log('address: ', accAddress)
  console.log('account: ', account)

  return [mnemonic, accAddress, account]
}
