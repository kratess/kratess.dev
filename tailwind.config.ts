import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const fixesPlugin = plugin(function ({ addUtilities }: PluginAPI) {
  const newUtilities = {
    ".flex-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".absolute-center": {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    ".z-index": {
      zIndex: "99999",
    },
    ".top": {
      top: "0px",
    },
    ".right": {
      right: "0px",
    },
    ".bottom": {
      bottom: "0px",
    },
    ".left": {
      left: "0px",
    },
    ".capitalize-first:first-letter": {
      textTransform: "uppercase",
    },
  };
  addUtilities(newUtilities);
});

const containerPlugin = plugin(function ({ addComponents }: PluginAPI) {
  const newComponents = {
    ".container": {
      width: "100%",
      maxWidth: "462px",
      /*'@screen xs': {
        maxWidth: '428px',
      },*/
      "@screen sm": {
        maxWidth: "556px",
      },
      "@screen md": {
        maxWidth: "748px",
      },
      "@screen lg": {
        maxWidth: "1004px",
      },
      "@screen xl": {
        maxWidth: "1264px",
      },
    },
  };

  addComponents(newComponents);
});

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "100": "100%",
      },
      width: {
        "100": "100%",
      },
      maxHeight: {
        "100": "100%",
      },
      height: {
        "100": "100%",
      },
      flexDirection: {
        column: "column",
        "column-reverse": "column-reverse",
      },
      fontFamily: {
        firaMono: ["FiraMono"],
        openSans: ["OpenSans"],
      },
      zIndex: {
        '1': '1',
      }
    },
    screens: {
      //xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    colors: {
      white: "#F5F5F5",
      black: "#121212",
      gray: "#A6A6A6",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        //xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "32px",
        xl: "32px",
      },
    },
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      64: "64px",
      96: "96px",
      128: "128px",
    },
    fontSize: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      46: "46px",
      48: "48px",
      50: "50px",
      52: "52px",
      54: "54px",
      56: "56px",
      58: "58px",
      60: "60px",
      62: "62px",
      64: "64px",
      96: "96px",
      128: "128px",
    },
    lineHeight: {
      "1.0": "1.0",
      "1.1": "1.1",
      "1.2": "1.2",
      "1.25": "1.25",
      "1.3": "1.3",
      "1.4": "1.4",
      "1.5": "1.5",
    },
    borderRadius: {
      "0": "0px",
      DEFAULT: "9999px",
      "16": "16px",
      "32": "32px"
    },
  },
  plugins: [fixesPlugin, containerPlugin],
};

export default config;
