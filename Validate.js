const form = document.querySelector("form");
const inputTitle = document.getElementById("title");
const titleError = document.querySelector("#title + span.error");

class Validate {
  constructor() {
    //empty
  }

  ValidateField(element, elementError) {
    element.addEventListener("input", (event) => {
      // Each time the user types something, we check if the
      // form fields are valid.

      if (element.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        elementError.textContent = ""; // Reset the content of the message
        elementError.className = "error"; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        this.showError(element, elementError);
      }
    });

    form.addEventListener("submit", (event) => {
      // if the field is valid, we let the form submit
      if (!element.validity.valid) {
        // If it isn't, we display an appropriate error message
        this.showError(element, elementError)
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
    });
  }

  showError(element, elementError) {
    if (element.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      elementError.textContent = "This input can't be empty!";
    } else if (element.validity.typeMismatch) {
      // If the field doesn't contain the expected data,
      // display the following error message.
      elementError.textContent = "Wrong data type!";
    } else if (element.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      elementError.textContent = `Name should be at least ${element.minLength} characters; you entered ${element.value.length}.`;
    }

    // Set the styling appropriately
    elementError.className = "error active";
  }
}

(()=>{
  const Validator = new  Validate()
  Validator.ValidateField(inputTitle,titleError)
})();