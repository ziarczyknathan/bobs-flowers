// Import packages
import { initSwiper } from "./modules/swiper";
import { collapseFaqItems, handleSearchFAQ } from "./modules/faq";
import { editAccountAddresses } from "./modules/addresses";
import { addToCartWithVariants } from "./modules/addToCart";
import { showHideRecoverForm } from "./modules/loginRegister";
import { adjustBodyFooterPadding } from "./modules/footer";

// import styles
import "../scss/styles.scss";

(function () {
  initSwiper();
  collapseFaqItems();
  showHideRecoverForm();
  addToCartWithVariants();
  editAccountAddresses();
  handleSearchFAQ();
  adjustBodyFooterPadding();
})();
