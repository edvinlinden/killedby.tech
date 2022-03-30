import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	buildOptions: {
		site: "https://killedby.tech",
	},
	devOptions: {
		tailwindConfig: "./tailwind.config.js",
	},
	integrations: [react(), tailwind()],
});
