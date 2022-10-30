## mobilemoney.js

## About

mobilemoney.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[MTN MOMO API](https://momodeveloper.mtn.com/).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the MTN MOMO API

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install mobilemoney.js
```


## Example usage

Interact with MTN OPEN API using function, easy & faster:

```js
const { Client } = require('mobilemoney.js');

(async()=>{
    let user = new Client();
    user.isSandbox();
    let subscriptionKey = "COLLECTION_OR_DISBURSEMENT_CREDENTIAL_MAKE_SURE_TO_REPLACE_IT_CORRECTLY";
    // creating uuid version 4 from the library
    let uuid = user.getReferenceId();
    console.log(`UUID : ${uuid}`)

    // Creating user in sandbox env
    let [done, ] = await user.createApiUser(uuid, subscriptionKey);
    if (done){
        console.log('Create successfully');
        console.log(done);   
    }

    let [, apiUser] = await user.getApiUser(uuid, subscriptionKey)
    console.log(`apiUser : `)
    console.log(apiUser)

    let [, data] = await user.createApiKey(uuid, subscriptionKey)

    // Convert to basic token from apiuser & apikey, Library do it for you
    let basicToken = user.basicToken(uuid, data.apiKey)
    console.log(`Basic Token : ${basicToken}`)
    // Getting collection product with credential
    let collection = user.collection(subscriptionKey)
    // Creating access token for collection product
    let [,accessToken] = await collection.createAccessToken(basicToken)
    accessToken = accessToken.access_token
    console.log(`AccessToken : ${accessToken}`)
    // Convert to bearer token from access token
    let bearerToken = user.bearerToken(accessToken)
    console.log(`Bearer Token : ${bearerToken}`)

    //request to pay
    let body = {
        "amount": "5",
        "currency": "EUR",
        "externalId": "45464546454",
        "payer": {
            "partyIdType": "MSISDN",
            "partyId": "87937389"
        },
        "payerMessage": "BUY THING",
        "payeeNote": "THANKS"
    }

    let [reqToPay,] = await collection.requestToPay(bearerToken, 
        user.getReferenceId(), 
        apiUser.targetEnvironment,
        body)

    console.log(`Request to Pay : ${reqToPay}`)

   
})()
```



## Links

- [Website][website]
- [Documentation][documentation]
- [rewriteapi Discord server][discord]
- [GitHub][source]
- [npm][npm]

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [rewriteapi Server][discord].

[website]: https://rewriteapi.cm/momo
[documentation]: https://momojs.rewriteapi.cm
[discord]: https://discord.gg/8hS3tvkfrF
[source]: https://github.com/rewriteapi/mobilemoney.js/
[npm]: https://www.npmjs.com/package/mobilemoney.js
