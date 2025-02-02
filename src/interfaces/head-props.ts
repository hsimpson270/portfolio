export interface HeadProps {
  /** The description of the page shown in search engine results. */
  description: string;

  /** Link to the image to be shown within open graph links. */
  ogImageUrl?: string;

  /** The title to be shown within open graph links. */
  ogTitle?: string;

  /** The title to be shown within the browser tab. */
  tabTitle: string;
}
