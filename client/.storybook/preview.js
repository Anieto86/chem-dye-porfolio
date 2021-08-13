import { muiTheme } from "storybook-addon-material-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  //This object is for order the histories in alphabetical order
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [muiTheme()];
