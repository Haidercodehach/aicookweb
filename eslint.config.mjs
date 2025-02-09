import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Convert the current module URL into a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file
const __dirname = dirname(__filename);

// Create a new FlatCompat instance with the current directory as the base
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the configuration using Next.js's recommended ESLint settings for core web vitals and TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
