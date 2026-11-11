import { colors } from '@/constants/colors';

export const defaultTheme = {
  colors,
  hoverColor: colors.blue1,
  backgroundOverlay: 'rgba(0, 0, 0, 0)',
  shadows: {
    panel: '0px 10px 15px -3px rgba(15, 23, 42, 0.35)',
  },
  fonts: {
    main: "'Inter', sans-serif, arial, 'Helvetica Neue', Helvetica",
  },
  fontWeight: {
    light: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px (base)
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
    jumbo: '2rem', // 32px
    jumbo25: '2.5rem', // 40px
    giant: '3.5rem', // 48px
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    jumbo: '28px',
    jumbo25: '32px',
    giant: '40px',
  },
  lineHeight: {
    md: '1rem', // 16px (base)
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
    jumbo: '2rem', // 32px
    jumbo25: '2.5rem', // 40px
    giant: '3.5rem', // 48px
  },
};

export const theme = defaultTheme;

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...colors,
    blue0: '#1E293B', // panel
    blue1: '#0F172A', // fondo
    blue2: '#A5B4FC', // acento
    blue4: '#E2E8F0', // texto
  },
  hoverColor: '#C4B5FD',
  backgroundOverlay: 'rgba(15, 23, 42, 0.68)',
  shadows: {
    panel: '0px 4px 15px 2px rgba(0, 0, 0, 0.35), 0px 0px 24px 2px rgba(165, 180, 252, 0.35)',
  },
};

export type AppTheme = typeof defaultTheme;
