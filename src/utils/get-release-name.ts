export function getReleaseName(name: string): string {
  const linuxRegex = /linux|Linux|Ubuntu/i;
  const windowsRegex = /windows|Windows/i;
  const macRegex = /mac|Mac|darwin/i;
  const extensionRegex = /\.(zip|tar\.gz|dmg|exe)$/i;
  const extName = name.split(extensionRegex)[0]; // Remove the extension from the name
  switch (true) {
    case linuxRegex.test(name):
      return "API-Caffeine-Linux";
    case windowsRegex.test(name):
      return "API-Caffeine-Windows";
    case macRegex.test(name):
      return "API-Caffeine-Mac";
    default:
      return "API-Caffeine-Unknown";
  }
}
