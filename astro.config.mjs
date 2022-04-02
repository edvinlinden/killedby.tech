import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	buildOptions: {
		site: "https://killedby.tech",
	},
	integrations: [react()],
});
