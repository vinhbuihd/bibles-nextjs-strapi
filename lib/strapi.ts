// Strapi API Configuration

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  populate?: string | string[] | Record<string, unknown>;
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

function buildQueryString(options: FetchOptions): string {
  const params = new URLSearchParams();

  if (options.populate) {
    if (typeof options.populate === "string") {
      params.append("populate", options.populate);
    } else if (Array.isArray(options.populate)) {
      options.populate.forEach((p) => params.append("populate", p));
    } else {
      params.append("populate", JSON.stringify(options.populate));
    }
  }

  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value as Record<string, unknown>).forEach(([op, val]) => {
          params.append(`filters[${key}][${op}]`, String(val));
        });
      } else {
        params.append(`filters[${key}]`, String(value));
      }
    });
  }

  if (options.sort) {
    if (Array.isArray(options.sort)) {
      options.sort.forEach((s) => params.append("sort", s));
    } else {
      params.append("sort", options.sort);
    }
  }

  if (options.pagination) {
    if (options.pagination.page) {
      params.append("pagination[page]", String(options.pagination.page));
    }
    if (options.pagination.pageSize) {
      params.append("pagination[pageSize]", String(options.pagination.pageSize));
    }
  }

  return params.toString();
}

export async function fetchStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const queryString = buildQueryString(options);
  const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ""}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export function getStrapiURL(path: string = ""): string {
  return `${STRAPI_URL}${path}`;
}

export function getStrapiMedia(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}
