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
