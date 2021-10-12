import { desaturate } from 'polished';

const baseColors = {
  red: 'hsl(348, 82%, 56%)',
  green: 'hsl(140, 82%, 56%)',
  orange: 'hsl(39, 82%, 56%)',
  blue: 'hsl(214, 100%, 54%)',
  purple: 'hsl(280, 67%, 28%)',
  yellow: 'hsl(60, 100%, 50%)',
  gold: 'hsl(51, 100%, 50%)',

  rosewater: '#F8C0C8',
  ivory: '#EFE7D3',
  lilac: '#D3BBDD',
  pewter: '#ECE3F0',
};

const theme = {
  colors: {
    // Grayscale Colors
    white: 'white',
    black: 'black',
    grey: 'grey',

    // Generic Colors
    danger: baseColors.red,
    warn: baseColors.orange,
    success: baseColors.green,
    primary: desaturate(0.2, baseColors.purple),
    accent: baseColors.blue,

    // Star Rating Colors
    yellow: baseColors.yellow,
    gold: baseColors.gold,

    // App Colors
    rosewater: baseColors.rosewater,
    ivory: baseColors.ivory,
    lilac: baseColors.lilac,
    pewter: baseColors.pewter,
  },
  padding: {
    horizontal: 'clamp(1em, 10%, 10em)',
  },
};

export default theme;
