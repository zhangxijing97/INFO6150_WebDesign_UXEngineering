export default function PizzaOptions({
  options,
  selected,
  onToggle,
  error,
}) {
  return (
    <fieldset>
      <legend>Pizza Customization</legend>
      <p className="hint">Select at least 1 and up to 5 toppings.</p>

      <div className="options-grid">
        {options.map((item) => (
          <label key={item} className="option-item">
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => onToggle("pizzaToppings", item)}
            />
            {item}
          </label>
        ))}
      </div>

      {error && <p className="error">{error}</p>}
    </fieldset>
  );
}