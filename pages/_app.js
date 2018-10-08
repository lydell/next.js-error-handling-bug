import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    // Uncomment this and notice the difference compared to causing and error in
    // pages/index.js. Here, the server just responds with “Internal Server
    // Error”.
    // await Promise.reject(new Error("_app.js error"))

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
