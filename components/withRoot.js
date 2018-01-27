import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import wrapDisplayName from 'recompose/wrapDisplayName'
import getContext from '../styles/getContext'

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    body: {
      margin: 0
    }
  }
})

let AppWrapper = props => props.children

AppWrapper = withStyles(styles)(AppWrapper)

function withRoot (BaseComponenet) {
  class WithRoot extends Component {
    static getInitialProps (ctx) {
      if (BaseComponenet.getInitialProps) {
        return BaseComponenet.getInitialProps(ctx)
      }

      return {}
    }

    componentWillMount () {
      this.styleContext = getContext()
    }

    componentDidMount () {
      // REmove server side injected css
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      return (
        <MuiThemeProvider
          theme={this.styleContext.theme}
          sheetsManager={this.styleContext.sheetsManager}
        >
          <AppWrapper>
            <BaseComponenet {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponenet, 'withRoot')
  }

  return WithRoot
}

export default withRoot
