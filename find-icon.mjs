import * as SiIcons from "react-icons/si";

console.log("Searching for Visual Studio Code icons...");
const visualIcons = Object.keys(SiIcons).filter(
  (icon) =>
    icon.toLowerCase().includes("visual") ||
    icon.toLowerCase().includes("vscode") ||
    icon.toLowerCase().includes("code"),
);

console.log("Found icons:", visualIcons);
