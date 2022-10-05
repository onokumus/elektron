// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  dir?: "ltr" | "rtl";
  elkAppClasses?: string;
  elkMainClasses?: string;
  elkHeaderClasses?: string;
  elkFooterClasses?: string;
  elkSideClasses?: string;
  elkSideHeaderClasses?: string;
  elkSideContentClasses?: string;
  elkSideFooterClasses?: string;

  hasElkHeader?: boolean;
  hasElkFooter?: boolean;
};
