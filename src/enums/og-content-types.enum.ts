export const OgContentTypes = {
  Article: 'article',
  Website: 'website',
} as const;

export type OgContentType =
  (typeof OgContentTypes)[keyof typeof OgContentTypes];
