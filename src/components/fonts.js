import { Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Garamond-italic',
  src: 'fonts/EBGaramond-Italic-VariableFont_wght.ttf',
});

Font.register({
  family: 'Garamond',
  src: 'fonts/EBGaramond-VariableFont_wght.ttf',
});

Font.register({
  family: 'Garamond-extrabold',
  src: 'fonts/static/EBGaramond-ExtraBold.ttf',
});

Font.register({
  family: 'Garamond-extrabolditalic',
  src: 'fonts/static/EBGaramond-ExtraBoldItalic.ttf',
});

Font.register({
  family: 'Garamond-bold',
  src: 'fonts/static/EBGaramond-Bold.ttf',
});

Font.register({
  family: 'Garamond-semibold',
  src: 'fonts/static/EBGaramond-SemiBold.ttf',
});
