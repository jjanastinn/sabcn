export const size = {
  mobileSmall: '400px',
  mobile: '630px',
  desktop: '631px',
  desktopLarge: '1500px'
};

export const device = {
  mobileSmall: `(max-width: ${size.mobileSmall})`,
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`
};