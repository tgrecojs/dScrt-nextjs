import { call } from "@redux-saga/core/effects";
import { createKeypair } from "../../shared/APIs/account"



const createPublicKey = (keypair) =>encodeSecp256k1Pubkey(keypair.pubkey)

const createAccountAddress = (publicKey) =>pubkeyToAddress(publicKey, 'secret');

function* handleCreateAccountSaga () {
    try {
        const accountResponse = yield call(() => 'hiii');
        const formatResponse = yield createPublicKey(accountResponse)
    } catch(error) {

    }
}