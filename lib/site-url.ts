function toAbsoluteUrl(value: string | undefined): URL | null {
  if (!value) {
    return null;
  }

  const normalized = value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

  try {
    const url = new URL(normalized);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function getSiteUrlCandidates(): string[] {
  return [
    process.env.APP_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    "http://localhost:3000",
  ].filter((value): value is string => Boolean(value));
}

export function getSiteUrl(): string {
  for (const candidate of getSiteUrlCandidates()) {
    const url = toAbsoluteUrl(candidate);
    if (url) {
      return url.origin;
    }
  }

  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  for (const candidate of getSiteUrlCandidates()) {
    const url = toAbsoluteUrl(candidate);
    if (url) {
      return url;
    }
  }

  return new URL("http://localhost:3000");
}
