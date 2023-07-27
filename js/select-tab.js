class SelectTab {
  constructor() {
    this.selectButtons = document.querySelectorAll(".btn-select");
    this.keyboardItems = document.querySelectorAll(".keyboard-item");

    this.attachEventListeners();
  }

  attachEventListeners() {
    this.selectButtons.forEach((button) => {
      button.addEventListener("click", () => this.handleButtonClick(button));
    });
  }

  handleButtonClick(selectedButton) {
    const itemId = selectedButton.getAttribute("data-btn");
    const currentItem = document.querySelector(itemId);

    this.selectButtons.forEach((button) => {
      button.classList.remove("active");
    });

    this.keyboardItems.forEach((item) => {
      item.classList.remove("active");
    });

    selectedButton.classList.add("active");
    currentItem.classList.add("active");
  }
}

export default SelectTab;
