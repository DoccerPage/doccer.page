import { defineConfig } from "astro/config";

import compress from "astro-compress";
import critters from "astro-critters";
import prefetch from "@astrojs/prefetch";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	integrations: [sitemap(), critters(), prefetch(), rome(), compress()],
});
