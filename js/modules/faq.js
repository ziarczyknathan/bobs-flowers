// FAQ
export const collapseFaqItems = () => {
  const faqItems = document.querySelectorAll(".faq-wrapper .items .item");
  if (!faqItems) return;
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("collapsed");
    });
  });
};

export const handleSearchFAQ = () => {
  const searchInput = document.querySelector("#search-faq input");
  const allQuestions = document.querySelectorAll(".faq-wrapper .items .item");
  const nothingFoundItem = document.querySelector(
    ".faq-wrapper .item--nothing-found"
  );
  const resetSearchButton = document.querySelector(
    ".faq-wrapper .item--nothing-found button"
  );

  if (!searchInput || !allQuestions || !nothingFoundItem) return;

  function findQuestions() {
    const query = searchInput.value;
    nothingFoundItem.classList.add("d-none");

    const matchingQuestions = [...allQuestions].filter((question) => {
      const questionText = question.querySelector("h3").innerText;
      const answerText = question.querySelector(".answer").innerText;
      const toMatch = `${questionText} ${answerText}`;

      if (toMatch.toLowerCase().includes(query.toLowerCase())) {
        question.classList.remove("d-none");
      } else {
        question.classList.add("d-none");
      }
      return toMatch.toLowerCase().includes(query.toLowerCase());
    });

    if (matchingQuestions.length === 0) {
      nothingFoundItem.classList.remove("d-none");
    }
  }

  resetSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    findQuestions();
  });

  searchInput.addEventListener("keyup", (e) => {
    findQuestions();
  });
};
