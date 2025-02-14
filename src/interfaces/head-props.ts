import type { OgContentTypes } from '@enums/og-content-types.enum';

export interface HeadProps {
  /** The description of the page shown in search engine results. */
  description: string;

  /**
   * The og:type value to be set in the header.
   * Should be either 'article' or 'website' and defaults to 'website'.
   */
  ogContent?: OgContentTypes;

  /** Link to the image to be shown within open graph links. */
  ogImageUrl?: string;

  /** The title to be shown within open graph links. */
  ogTitle?: string;

  /** The title to be shown within the browser tab. */
  tabTitle: string;
}
