export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Latest News 24/7';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'A Decade of Leadership: Harshit Mehul Propels Horizon Unlimited with Groundbreaking Cost-Saving Product Launch';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'This is a fake website and with fictional content..';

  return {
    name,
    blogTitle,
    footerText,
  };
};
