import Center from '../src/components/Center/Center'
import { addDecorator } from '@storybook/react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'
import { deepOrange, green, teal } from '@material-ui/core/colors'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator((story) => <Center>{story()}</Center>)

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
})

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  ),
]
