import { checkVAT, belgium } from "jsvat";
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
  const companyNameInput = document.querySelector("input[id=comp_name]");

  if (!registerVatInput) return;

  registerVatInput.addEventListener("blur", (e) => {
    const res = checkVAT(e.target.value, [belgium]);
    console.log(res);
  });
};

function disable_form(form) {
  var inputs = form.getElementsByTagName("input"),
    textareas = form.getElementsByTagName("textarea"),
    buttons = form.getElementsByTagName("button"),
    selects = form.getElementsByTagName("select");

  disable_elements(inputs);
  disable_elements(textareas);
  disable_elements(buttons);
  disable_elements(selects);
}
function disable_elements(elements) {
  var length = elements.length;
  while (length--) {
    elements[length].disabled = true;
  }
}

export const toggleVatForm = () => {
  const vatNumberDisplay = document.querySelector(".vat-number-display");
  const vatNumberForm = document.querySelector(".vat-number-form");
  const vatInput = document.querySelector(
    ".vat-number-form input[id=vat_reg_no]"
  );
  const companyName = document.querySelector(
    ".vat-number-form input[id=comp_name]"
  );
  const customerId = document.querySelector(
    ".vat-number-form input#customer_id"
  )?.value;

  const vatEditButton = document.querySelector(
    ".vat-number-display .vat-edit-button"
  );

  if (!vatNumberDisplay || !vatNumberForm || !vatEditButton) return;

  vatEditButton.addEventListener("click", (e) => {
    vatNumberDisplay.classList.add("d-none");
    vatNumberForm.classList.remove("d-none");
  });

  vatNumberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const vatNrKey = vatInput.attributes.name.value;
    const vatNrValue = vatInput.value;
    const companyNameKey = companyName.attributes.name.value;
    const companyNameValue = companyName.value;

    const body = {
      metafields: {
        [vatNrKey]: vatNrValue,
        [companyNameKey]: companyNameValue,
      },
      customer_id: customerId,
    };
    disable_form(vatNumberForm);
    fetch("/apps/customer_notes_to_metafields/update-preferences/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Cache-Control": "max-age=0",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .finally(() => window.location.reload());
  });
};

export const toggleDeliveryForm = () => {
  const deliveryDisplay = document.querySelector(".delivery-display");
  const deliveryForm = document.querySelector(".delivery-form");
  const deliveryInput = document.querySelector(
    ".delivery-form select#alternatieve-leveringslocatie"
  );
  const remarksInput = document.querySelector(
    ".delivery-form textarea#extra-opmerkingen"
  );
  const customerId = document.querySelector(
    ".delivery-form input#customer_id"
  )?.value;

  const deliveryEditButton = document.querySelector(
    ".delivery-display .delivery-edit-button"
  );

  console.log(deliveryInput, remarksInput);

  if (!deliveryDisplay || !deliveryForm || !deliveryEditButton) return;

  deliveryEditButton.addEventListener("click", (e) => {
    deliveryDisplay.classList.add("d-none");
    deliveryForm.classList.remove("d-none");
  });

  deliveryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const delivery = deliveryInput.attributes.name.value;
    const deliveryValue = deliveryInput.value;
    const remarksKey = remarksInput.attributes.name.value;
    const remarksValue = remarksInput.value;

    const body = {
      metafields: {
        [delivery]: deliveryValue,
        [remarksKey]: remarksValue,
      },
      customer_id: customerId,
    };
    disable_form(deliveryForm);
    fetch("/apps/customer_notes_to_metafields/update-preferences/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Cache-Control": "max-age=0",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .finally(() => window.location.reload());
  });
};

export const collapseCompanyInfo = () => {
  const companyInfoForm = document.querySelector(
    "form#create_customer .field-group.collapsable"
  );
  const toggle = document.querySelector(
    "form#create_customer .field-group.collapsable h3"
  );

  if (!toggle || !companyInfoForm) return false;

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    companyInfoForm.classList.toggle("collapsed");
  });
};
