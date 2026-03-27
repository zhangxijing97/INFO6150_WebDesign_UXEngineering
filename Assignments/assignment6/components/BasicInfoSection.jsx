export default function BasicInfoSection({ formData, errors, onChange }) {
  return (
    <fieldset>
      <legend>Basic Information</legend>

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="birthYear">Year of Birth *</label>
        <input
          id="birthYear"
          name="birthYear"
          type="text"
          inputMode="numeric"
          value={formData.birthYear}
          onChange={onChange}
        />
        {errors.birthYear && <p className="error">{errors.birthYear}</p>}
      </div>

      <div className="checkbox-row">
        <input
          id="livesInUS"
          name="livesInUS"
          type="checkbox"
          checked={formData.livesInUS}
          onChange={onChange}
        />
        <label htmlFor="livesInUS">Do you live in the United States?</label>
      </div>

      {formData.livesInUS && (
        <div className="form-group">
          <label htmlFor="zipcode">Zipcode *</label>
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            inputMode="numeric"
            value={formData.zipcode}
            onChange={onChange}
          />
          {errors.zipcode && <p className="error">{errors.zipcode}</p>}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={onChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
    </fieldset>
  );
}