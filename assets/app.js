(function () {
  // Slider
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    speed: 15000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  // FAQ
  const faqItems = document.querySelectorAll(".faq-wrapper .items .item");
  if (faqItems) {
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("collapsed");
      });
    });
  }

  // Login
  const loginForm = document.querySelector(".form__login");
  const recoverForm = document.querySelector(".form__recover");

  const handleUrlChanged = () => {
    const anchor = document.URL.split("#")[1];
    if (!anchor || anchor === "login") {
      recoverForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    } else if (anchor === "recover") {
      recoverForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    }
  };

  if (recoverForm && loginForm) {
    handleUrlChanged();

    window.addEventListener("hashchange", function () {
      handleUrlChanged();
    });
  }

  // Add to cart
  const $productOptionSelectors = document.querySelectorAll(
    ".product-option-selector"
  );
  const $selectedIdField = document.querySelector("input[name=id]");
  const $submitButton = document.querySelector("button[type=submit]");

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

  if (window.product && $productOptionSelectors) {
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
  }
})();
