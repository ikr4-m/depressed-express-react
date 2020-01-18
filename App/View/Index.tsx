import React, { Component } from 'react'
import HTML from '@app/View/template/HTMLSkeleton'

interface PropsType {
  anjay: string
}

export default class Index extends Component<PropsType, {}> {
  render() {
    return (
      <HTML title="Test Judul dinamis">
        <h1>Anjay {this.props.anjay}</h1>
      </HTML>
    )
  }
}
