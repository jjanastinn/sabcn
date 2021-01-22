const size = {
  mobileSmall: '400px',
  mobile: '630px',
  desktop: '631px'
};

export const device = {
  mobileSmall: `(max-width: ${size.mobileSmall})`,
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`
};