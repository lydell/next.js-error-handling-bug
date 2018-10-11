import React from 'react'
import App, { Container } from 'next/app'
import ErrorComponent from './_error'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Do as little as possible when rendering the error page, in case something
    // in this `getInitialProps` function fails. We don't want to error on the
    // error page, so to speak.
    if (Component === ErrorComponent) {
      return { pageProps }
    }

    // Imagine doing an API request here: If that fails, we don't want that to
    // fail the error page from rendering too. Besides, we probably don't want
    // to make the API call on the error page in the first place.
    await Promise.reject(new Error("_app.js error"))


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
