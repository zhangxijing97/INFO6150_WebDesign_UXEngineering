export function validateForm(formData) {
  const errors = {};
  const currentYear = new Date().getFullYear();

  const trimmedName = formData.name.trim();

  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!formData.birthYear.trim()) {
    errors.birthYear = "Year of birth is required.";
  } else if (!/^\d+$/.test(formData.birthYear.trim())) {
    errors.birthYear = "Year of birth must be a valid integer.";
  } else {
    const year = Number(formData.birthYear);

    if (year <= 1900 || year >= currentYear) {
      errors.birthYear = `Year of birth must be greater than 1900 and smaller than ${currentYear}.`;
    }
  }

  if (formData.livesInUS) {
    if (!formData.zipcode.trim()) {
      errors.zipcode =
        "Zipcode is required when living in the United States.";
    } else if (!/^\d{5}$/.test(formData.zipcode.trim())) {
      errors.zipcode = "Zipcode must be a 5-digit number.";
    }
  }

  if (!formData.password) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (!formData.preferredFood) {
    errors.preferredFood = "Please select a preferred food item.";
  }

  if (formData.preferredFood === "pizza") {
    if (formData.pizzaToppings.length < 1) {
      errors.pizzaToppings = "Please select at least 1 pizza topping.";
    } else if (formData.pizzaToppings.length > 5) {
      errors.pizzaToppings = "You can select up to 5 pizza toppings.";
    }
  }

  if (formData.preferredFood === "salad") {
    if (
      formData.saladIngredients.length < 3 ||
      formData.saladIngredients.length > 6
    ) {
      errors.saladIngredients =
        "Please select between 3 and 6 salad ingredients.";
    }

    if (!formData.dressing) {
      errors.dressing = "Please select exactly one dressing.";
    }
  }

  return errors;
}