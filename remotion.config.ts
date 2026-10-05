import { Config } from "@remotion/cli/config";

// 在不能自动下载浏览器的环境里，用 REMOTION_BROWSER_EXECUTABLE 指定本地的 headless shell
if (process.env.REMOTION_BROWSER_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER_EXECUTABLE);
}
