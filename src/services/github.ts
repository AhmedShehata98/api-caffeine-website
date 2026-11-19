export interface ReleaseAsset {
  id: number;
  name: string;
  size: number;
  content_type: string;
  browser_download_url: string;
  download_count: number;
  digest: string | null;
  label: string | null;
}

export interface GitHubRelease {
  tag_name: string;
  published_at: string;
  assets: ReleaseAsset[];
}

export async function getLatestRelease(): Promise<GitHubRelease> {
  const response = await fetch(
    `https://api.github.com/repos/AhmedShehata98/api-caffeine/releases/latest`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}
