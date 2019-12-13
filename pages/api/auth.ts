import { NowRequest, NowResponse } from '@now/node'
import {merge} from 'ramda'
import checkHmacValidity from 'shopify-hmac-validation'


export default async (req: NowRequest, res: NowResponse) => {

  if(!req.body.query.shop || !req.body.state) {
    return res.json({
      status: 429,
      message: 'Unauthorized: Required Query or Shop missing.'
    })
  }
  
  const shopifyValidity = checkHmacValidity(process.env.SHOPIFY_APP_SECRET, req.body.query)


  if(!shopifyValidity) {
    return res.json({
      status: 429,
      message: 'Unauthorized: Invalid entrance detected'
    })
  }


  const buildInstallUrl = (shop, state) => (`https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${process.env.SHOPIFY_APP_SCOPES}&state=${state}&redirect_uri=${process.env.APP_URL}/dashboard`)

  const redirectTo = buildInstallUrl(req.body.query.shop, req.body.state)

  return res.json({
    status: 200,
    body: req.body,
    hmacValid: shopifyValidity,
    redirectTo: redirectTo
  })
}
