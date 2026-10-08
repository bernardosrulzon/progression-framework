import * as React from 'react'
import animationData from './json/lowFunds.json'

// `lottie-react` pulls in `lottie-web`, which touches the DOM. We load it
// lazily on the client so server-side rendering during `gatsby build` is safe.
export default class LowFundsAnimation extends React.Component {
  state = { Lottie: null }

  componentDidMount() {
    import('lottie-react').then(mod => {
      this.setState({ Lottie: mod.default })
    })
  }

  render() {
    const { Lottie } = this.state

    return (
      <div aria-hidden="true">
        {Lottie ? <Lottie animationData={animationData} loop autoplay /> : null}
      </div>
    )
  }
}
