/**
 * CoolMicrosite
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "formdata-polyfill";
import "../polyfills/object.fromentries";

export default class extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>CoolMicrosite</title>
          <script src={"https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver%2Cfetch"}/>
        </Head>
        <Container>
          <Component/>
        </Container>
      </>
    )
  }
}