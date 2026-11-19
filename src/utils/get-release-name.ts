export function getReleaseName(name: string): string {
  const extension = name.match(/\.(zip|tar\.gz|dmg|exe)$/i)?.[0] ?? "";
  return `API-Caffeine-${getReleasePlatform(name)}${extension}`;
}

export function getReleasePlatform(name: string) {
  const linuxRegex = /linux|ubuntu/i;
  const windowsRegex = /windows/i;
  const macRegex = /mac|darwin/i;
  switch (true) {
    case linuxRegex.test(name):
      return "Linux";
    case windowsRegex.test(name):
      return "Windows";
    case macRegex.test(name):
      return "Mac";
    default:
      return "Unknown";
  }
}
