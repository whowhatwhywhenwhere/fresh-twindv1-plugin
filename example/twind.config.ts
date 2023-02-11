import { Options } from "fresh-twind-plugin";
import { defineConfig } from "@twind/core";
// twind preset
import presetTailwindForms from "@twind/preset-tailwind-forms";
import presetTypography from "@twind/preset-typography";

export default {
  ...[defineConfig({
    presets: [presetTailwindForms(), presetTypography()],
  })],
  selfURL: import.meta.url,
} as Options;
