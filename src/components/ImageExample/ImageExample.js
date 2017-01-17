/* @flow */
'use strict'

import React, { Component } from 'react'


type Props = {
  // props
}

type State = {
  // state
}


class ImageExample extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const ImageExample = (this: any)
    // ImageExample.onEvent = this.onEvent.bind(this)
  }

  /// Mounting
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    return (
      <div className="ImageExample">
        <img src="assets/images/404.jpg" alt="404" title="404" />
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default ImageExample
