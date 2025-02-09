import { Rozha_One } from "@next/font/google";

export const RozhaOne = Rozha_One({
  weight: "400", // or weights: ['400'] if you want to support multiple weights
  subsets: ["latin"], // Adjust subsets as needed (e.g., 'latin', 'cyrillic')
  display: "swap", // Recommended to avoid layout shift
});
