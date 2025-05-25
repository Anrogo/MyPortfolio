import { colors } from "@/constants/colors";

export const theme = {
    colors: colors,
    fonts: {
        main: "'Inter', sans-serif",
    },
    fontWeight: {
        light: 400,
        medium: 500,
        bold: 700
    },
    fontSize: {
        xs: '0.75rem',   // 12px
        sm: '0.875rem',  // 14px
        md: '1rem',      // 16px (base)
        lg: '1.125rem',  // 18px
        xl: '1.25rem',   // 20px
        xxl: '1.5rem',   // 24px
        jumbo: '2rem',   // 32px
        jumbo25: '2.5rem', // 40px
        giant: '3.5rem', // 48px

    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        giant: '40px',
    },
}