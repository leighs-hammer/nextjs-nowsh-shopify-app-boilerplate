# NextJS + Now.sh + Shopify App + Boilerplate

Intentionaly empty, just gets the foundation in leaving state management, DB and all the rest up to you to choos what you will. 


## Getting Started

`Yarn install` -> duh.

1. Create and app in your partner portal: ( partners.shopify.com)
2. Copy the `sample.env` -> `.env`
3. Add the Params noting that for local dev you will need ngrok running. 
4. Add the scopes


## Fire it up

1. `yarn dev`
2. in a second terminal ( I am lazy so havent setup paralell) `yarn ngrok`

This will start up the next server local and proxy it with ngrok. 

NOTE: Remember to set your APP url in ENV and on partners.shopify

## SET Whitelisted routes

At a bare minimum, you will need the root `/` the `/api/auth` and the `/dashboard` paths off your ngrok white listed in partners to get it to install.

# Now

https://zeit.co/docs

You should be ablew to simply install the CLI linked it up and use the CLI or PR / Merge flow to deploy the app once on production. 

