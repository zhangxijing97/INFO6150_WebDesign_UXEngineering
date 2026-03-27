export default function FoodPreferenceSection({
  preferredFood,
  error,
  onChange,
}) {
  return (
    <fieldset>
      <legend>Food Preference</legend>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="preferredFood"
            value="pizza"
            checked={preferredFood === "pizza"}
            onChange={onChange}
          />
          Pizza
        </label>

        <label>
          <input
            type="radio"
            name="preferredFood"
            value="salad"
            checked={preferredFood === "salad"}
            onChange={onChange}
          />
          Salad
        </label>

        <label>
          <input
            type="radio"
            name="preferredFood"
            value="neither"
            checked={preferredFood === "neither"}
            onChange={onChange}
          />
          Neither
        </label>
      </div>

      {error && <p className="error">{error}</p>}
    </fieldset>
  );
}