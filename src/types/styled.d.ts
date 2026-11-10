import 'styled-components';
import type { AppTheme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: AppTheme['colors'];
    hoverColor: AppTheme['hoverColor'];
    backgroundOverlay: AppTheme['backgroundOverlay'];
    shadows: AppTheme['shadows'];
    fonts: AppTheme['fonts'];
    fontWeight: AppTheme['fontWeight'];
    fontSize: AppTheme['fontSize'];
    spacing: AppTheme['spacing'];
    lineHeight: AppTheme['lineHeight'];
  }
}
