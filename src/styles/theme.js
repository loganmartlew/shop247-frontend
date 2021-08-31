import Color from 'color';

const baseColors = {
  red: Color('hsl(348, 82%, 56%)'),
  green: Color('hsl(140, 82%, 56%)'),
  orange: Color('hsl(39, 82%, 56%)'),
};

const theme = {
  colors: {
    white: 'white',
    danger: baseColors.red,
    warn: baseColors.orange,
    success: baseColors.green,
  },
};

export default theme;
