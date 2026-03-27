"use client";

import { useState } from "react";
import BasicInfoSection from "./BasicInfoSection";
import FoodPreferenceSection from "./FoodPreferenceSection";
import PizzaOptions from "./PizzaOptions";
import SaladOptions from "./SaladOptions";
import { validateForm } from "../utils/validation";

// Static data for options (kept outside component to avoid re-creation)
const pizzaToppingsList = [
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Sausage",
  "Bacon",
  "Extra Cheese",
  "Black Olives",
  "Green Peppers",
  "Pineapple",
  "Spinach",
  "Ham",
  "Chicken",
  "Tomatoes",
  "Jalapenos",
  "Garlic",
];

const saladIngredientsList = [
  "Lettuce",
  "Tomato",
  "Cucumber",
  "Carrot",
  "Corn",
  "Olives",
  "Onion",
  "Avocado",
  "Chickpeas",
  "Croutons",
];

const dressingList = ["Ranch", "Caesar", "Vinaigrette"];

export default function RegistrationForm() {
  // Main form state (all input values)
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    livesInUS: false,
    zipcode: "",
    password: "",
    preferredFood: "",
    pizzaToppings: [],
    saladIngredients: [],
    dressing: "",
  });

  // Stores validation errors
  const [errors, setErrors] = useState({});

  // Controls success message display
  const [accepted, setAccepted] = useState(false);

  // Handles input changes (text, checkbox, radio)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Reset success message when user edits form
    setAccepted(false);
  };

  // Handles multi-select fields (pizza toppings, salad ingredients)
  const handleMultiSelect = (groupName, item) => {
    setFormData((prev) => {
      const exists = prev[groupName].includes(item);

      return {
        ...prev,
        [groupName]: exists
          ? prev[groupName].filter((value) => value !== item)
          : [...prev[groupName], item],
      };
    });

    setAccepted(false);
  };

  // Handles form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If no errors → show success message
    if (Object.keys(validationErrors).length === 0) {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Basic user information */}
      <BasicInfoSection
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />

      {/* Food selection (pizza / salad / neither) */}
      <FoodPreferenceSection
        preferredFood={formData.preferredFood}
        error={errors.preferredFood}
        onChange={handleChange}
      />

      {/* Conditional rendering: show pizza options only if selected */}
      {formData.preferredFood === "pizza" && (
        <PizzaOptions
          options={pizzaToppingsList}
          selected={formData.pizzaToppings}
          onToggle={handleMultiSelect}
          error={errors.pizzaToppings}
        />
      )}

      {/* Conditional rendering: show salad options only if selected */}
      {formData.preferredFood === "salad" && (
        <SaladOptions
          ingredients={saladIngredientsList}
          dressings={dressingList}
          selectedIngredients={formData.saladIngredients}
          selectedDressing={formData.dressing}
          onIngredientToggle={handleMultiSelect}
          onDressingChange={handleChange}
          ingredientError={errors.saladIngredients}
          dressingError={errors.dressing}
        />
      )}

      {/* Submit button */}
      <button type="submit" className="submit-btn">
        Submit
      </button>

      {/* Success message */}
      {accepted && <p className="success">Accepted</p>}
    </form>
  );
}