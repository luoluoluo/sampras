import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import topLevelAwait from "vite-plugin-top-level-await";

// @see: https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);

  return {
    // base: "/",
    // alias config
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          // 	"primary-color": "#1DA57A",
          // },
          javascriptEnabled: true,
          additionalData: `@import "@/styles/var.less";`
        }
      }
    },
    // server config
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true
    },
    // plugins
    plugins: [
      react(),
      // * 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: i => `__tla_${i}`
      })
    ]
  };
});
