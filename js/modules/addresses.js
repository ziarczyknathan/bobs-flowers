export const editAccountAddresses = () => {
  const $accountTemplate = document.querySelector(".addresses-wrapper");
  const $addAddressForm = document.querySelector("#AddAddress");
  const $addAddressToggle = document.querySelector("#AddAddressToggle");
  const $editAddressToggles = document.querySelectorAll(".EditFormButton");

  const $closeFormButton = document.querySelectorAll(
    ".addresses-wrapper button[type=reset]"
  );
  const $deleteAddress = document.querySelectorAll(
    ".addresses-wrapper button.delete-address"
  );

  if (!$accountTemplate || !$addAddressForm || !$addAddressToggle) return;

  $closeFormButton.forEach((button) => {
    button.addEventListener("click", () => {
      const formId = button.dataset.form;
      const form = document.getElementById(formId);
      if (!form) return;
      form.classList.add("d-none");
    });
  });

  $deleteAddress.forEach((button) => {
    button.addEventListener("click", async () => {
      const target = button.dataset.target;
      if (!confirm(button.dataset.confirmmessage)) return;

      await fetch(target, {
        method: "DELETE",
      }).then(async (res) => await res.json());
      window.location.replace(window.location.href);
    });
  });

  $addAddressToggle.addEventListener("click", () => {
    $addAddressForm.classList.toggle("d-none");
  });

  $editAddressToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const addressId = button.dataset.addressid;
      const form = document.getElementById(`EditAddress_${addressId}`);
      if (!form) return;
      form.classList.toggle("d-none");
    });
  });
};
