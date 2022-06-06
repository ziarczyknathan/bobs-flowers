export const addToCartWithVariants = () => {
  const $productOptionSelectors = document.querySelectorAll(
    ".product-option-selector"
  );
  const $selectedIdField = document.querySelector("input[name=id]");
  const $submitButton = document.querySelector("button[type=submit]");

  if (!window.product || !$productOptionSelectors) return;

  const disableAddToCart = () => {
    $submitButton.disabled = true;
    $submitButton.classList.add("disabled");
    $selectedIdField.value = "";
  };

  const equals = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  const getAllOptionValues = () => {
    const values = [];
    $productOptionSelectors.forEach((selector) => {
      values.push(selector.value);
    });
    return values;
  };

  const variants = window.product.variants;

  $productOptionSelectors.forEach((selector) => {
    selector.addEventListener("change", (e) => {
      const values = getAllOptionValues();
      const found = variants.find((variant) => {
        return equals(variant.options, values);
      });

      if (found) {
        var newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?variant=" +
          found.id;
        window.location.replace(newurl);
      } else {
        disableAddToCart();
      }
    });
  });
};
