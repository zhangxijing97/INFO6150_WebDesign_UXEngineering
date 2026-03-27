export default function SaladOptions({
  ingredients,
  dressings,
  selectedIngredients,
  selectedDressing,
  onIngredientToggle,
  onDressingChange,
  ingredientError,
  dressingError,
}) {
  return (
    <fieldset>
      <legend>Salad Customization</legend>

      <section className="subsection">
        <h3>Ingredients</h3>
        <p className="hint">Select between 3 and 6 ingredients.</p>

        <div className="options-grid">
          {ingredients.map((item) => (
            <label key={item} className="option-item">
              <input
                type="checkbox"
                checked={selectedIngredients.includes(item)}
                onChange={() => onIngredientToggle("saladIngredients", item)}
              />
              {item}
            </label>
          ))}
        </div>

        {ingredientError && <p className="error">{ingredientError}</p>}
      </section>

      <section className="subsection">
        <h3>Dressing</h3>
        <div className="radio-group">
          {dressings.map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="dressing"
                value={item}
                checked={selectedDressing === item}
                onChange={onDressingChange}
              />
              {item}
            </label>
          ))}
        </div>

        {dressingError && <p className="error">{dressingError}</p>}
      </section>
    </fieldset>
  );
}