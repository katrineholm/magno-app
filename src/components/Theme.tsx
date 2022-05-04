import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = {
    palette: {
        primary: {
            main: '#2A646D',
        },
        secondary: {
            main: '#448894',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text:{
            primary: "#33373A"
        }
    },
    sidebarWidth: 240
} as const;

type CustomTheme = {
    [Key in keyof typeof theme]: typeof theme[Key]
}

export default createTheme(theme);
