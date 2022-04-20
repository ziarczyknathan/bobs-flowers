(function () {
  initSwiper();
  collapseFaqItems();
  showHideRecoverForm();
  addToCartWithVariants();
  editAccountAddresses();

  // ----------Functions----------

  // Slider
  function initSwiper() {
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
  }

  // FAQ
  function collapseFaqItems() {
    const faqItems = document.querySelectorAll(".faq-wrapper .items .item");
    if (!faqItems) return;
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("collapsed");
      });
    });
  }

  // Login
  function showHideRecoverForm() {
    const loginForm = document.querySelector(".form__login");
    const recoverForm = document.querySelector(".form__recover");

    if (!recoverForm || !loginForm) return;

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

    handleUrlChanged();

    window.addEventListener("hashchange", function () {
      handleUrlChanged();
    });
  }

  // Add to cart
  function addToCartWithVariants() {
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
  }

  // Account addresses
  function editAccountAddresses() {
    const $accountTemplate = document.querySelector(".addresses-wrapper");
    const $addAddressForm = document.querySelector("#AddAddress");
    const $addAddressToggle = document.querySelector("#AddAddressToggle");

    if (!$accountTemplate || !$addAddressForm || !$addAddressToggle) return;

    $addAddressToggle.addEventListener("click", () => {
      $addAddressForm.classList.toggle("d-none");
    });
  }
})();
