export function getFileSize(bytes: number): string {
  let size = bytes;
  let unit = "B";

  for (const nextUnit of ["KB", "MB", "GB"]) {
    if (size < 1024) break;
    size /= 1024;
    unit = nextUnit;
  }

  return `${Number(size.toFixed(2))} ${unit}`;
}
