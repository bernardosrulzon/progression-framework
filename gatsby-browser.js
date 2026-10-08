import ReactGA from 'react-ga'

ReactGA.initialize('UA-25299114-21')
ReactGA.set({
  appName: 'Progression at GetNinjas',
})

export const onRouteUpdate = state => {
  if (state && state.location) {
    ReactGA.pageview(state.location.pathname)
  }
}
