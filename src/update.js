import store from './store'

const update = function (dt) {
  const loaded = store.state().loaded
  console.log('Toggling loaded', loaded)
  store.setState({
    loaded: !loaded
  })
}

export default update
