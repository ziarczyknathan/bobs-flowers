import { checkVAT, belgium, austria } from "jsvat";
export const showHideRecoverForm = () => {
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
};

export const validateVat = () => {
  const registerVatInput = document.querySelector("input[id=vat_reg_no]");

  if (!registerVatInput) return;

  registerVatInput.addEventListener("blur", (e) => {
    const { isValid } = checkVAT(e.target.value, [belgium]);
  });
};

export const toggleVatForm = () => {
  const vatNumberDisplay = document.querySelector(".vat-number-display");
  const vatNumberForm = document.querySelector(".vat-number-form");

  if (!vatNumberDisplay || !vatNumberForm) return;

  const vatEditButton = document.querySelector(
    ".vat-number-display .vat-edit-button"
  );

  vatEditButton.addEventListener("click", (e) => {
    console.log(e);
    vatNumberDisplay.classList.add("d-none");
    vatNumberForm.classList.remove("d-none");
  });
};
