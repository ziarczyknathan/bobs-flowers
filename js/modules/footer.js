export const adjustBodyFooterPadding = () => {
  const footer = document.querySelector("footer");
  const footerHeight = footer.offsetHeight;

  const body = document.querySelector("body");
  body.style.paddingBottom = footerHeight + "px";
};
