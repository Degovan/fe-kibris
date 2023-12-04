// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt 3",
            titleTemplate: "%s | Nuxt 3",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { hid: "description", name: "description", content: "Nuxt 3" },
                { charset: "utf-8" },
            ],
        },
    },
    devtools: { enabled: true },
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    modules: ["nuxt-icon"],
});
