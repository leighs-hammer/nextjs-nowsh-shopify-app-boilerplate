import React, {useEffect, useState} from "react"
import Head from 'next/head'
import qs from 'query-string'
import axios from 'axios'

// probably not needed, will tie these into call back auth flow down the line.
const nonce = require('nonce')()
const state = nonce()


export interface IHomeProps {
  props: any, // Add next types dependent on HOC
}

const Home: React.FC<IHomeProps> = (props): React.ReactElement => {
    // SSR Render nothing

    // page context params
    useEffect(() => {
      const query = qs.parse(window.location.search)
      if(typeof window !== 'undefined' && window.location) {
        
        axios.post('/api/auth', {
          query: query,
          state: state
        })
        .then(response => {
          console.log(response.data)
          if(response.data.redirectTo) {
            window.location.href = response.data.redirectTo
            }
          })
      }
    }, [])


    return (
        <div>
          <Head>
            <title>Silent Tools - Application</title>
            <link rel="icon" href="/static/favicon.ico" />
          </Head>
          Authenticating......
          Add your pre auth content or status components here. 
          Statemanagement excluded.
        </div>
    )
}

export default Home
