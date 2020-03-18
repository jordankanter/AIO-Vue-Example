/*  */
import config from './config.json'
import App from './App'

/* Here you can bootstrap your application and configure the integration with the Adobe Experience Cloud Shell */

// this piece of code is needed in case the Adobe Experience Cloud shell runtime is not yet loaded.
// if it is ready we bootstrap the app, otherwise we defer the bootstrapping to the exc runtime when it is ready.
if ('exc-module-runtime' in window) {
  bootstrap()
} else {
  // callback for the exc shell runtime, if not ready yet
  window.EXC_MR_READY = () => bootstrap()
}

function bootstrap () {
  // initializes the runtime object
  const Runtime = window['exc-module-runtime'].default
  const runtime = new Runtime({
    // this options allows the app to takeover 100% of the browser's viewport
    canTakeover: true
  })

  window.runtime = runtime
  // set the app name to the Shell header
  runtime.customEnvLabel = 'aio-vue'

  // render the actual react application and pass along the runtime object to make it available to the App
  //ReactDOM.render(<App runtime={runtime}/>, document.getElementById('root'))

  // use this to set a favicon
  // runtime.favicon = 'url-to-favicon'

  // use this to respond to clicks on the app-bar title
  // runtime.heroClick = () => window.alert('Did I ever tell you you\'re my hero?')

  // ready event brings in authentication/user info
  runtime.on('ready', ({ imsOrg, imsToken, imsProfile, locale }) => {
    console.log('Ready! received imsProfile:', imsProfile)
    window.imsProfile = imsProfile
  })

  // respond to history change events
  runtime.historyChange = path => {
    console.log('history changed :: ', path)
    // this.history.replace(path)
    // this.setState({currentPath: `/${path}`})
  }

  // set solution info, shortTitle is used when window is too small to dispay full title
  runtime.solution = {
    icon: 'AdobeExperienceCloud',
    title: 'aio-vue',
    shortTitle: 'JGR'
  }
  runtime.title = 'aio-vue'

  // tell the exc-runtime object we are done
  runtime.done()
}
