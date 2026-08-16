// ─── Typography ───────────────────────────────────────────────────────────────

export const fontFamily = {
  regular: 'System',
  medium: 'System',
  semiBold: 'System',
  bold: 'System',
};

export const fontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 34,
  '5xl': 40,
};

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
  extraBold: '800' as const,
};

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.7,
  loose: 2.0,
};

export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
  widest: 2,
};
