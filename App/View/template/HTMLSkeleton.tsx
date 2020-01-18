import React, { Component } from 'react'

interface PropsType {
  title?: string
}

export default class Index extends Component<PropsType, {}> {
  render () {
    return(
      <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>{this.props.title || 'Document'}</title>
      </head>
      <body>
        {this.props.children}
      </body>
      </html>
    )
  }
}
