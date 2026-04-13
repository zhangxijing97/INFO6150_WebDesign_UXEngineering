import { useEffect, useMemo, useState } from "react";

type Country = {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  population: number;
  flags: {
    png: string;
  };
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries.");
        }

        const data: Country[] = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch (err) {
        setError("Something went wrong while loading the countries.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    const visibleCountries = countries.slice(1);

    if (!keyword) {
      return visibleCountries;
    }

    return visibleCountries.filter((country) => {
      const commonName = country.name.common.toLowerCase();
      const officialName = country.name.official.toLowerCase();
      const capital = country.capital?.[0]?.toLowerCase() || "";
      const region = country.region.toLowerCase();

      return (
        commonName.includes(keyword) ||
        officialName.includes(keyword) ||
        capital.includes(keyword) ||
        region.includes(keyword)
      );
    });
  }, [countries, searchTerm]);

  return (
    <>
      <header className="site-header">
        <h1>Countries Explorer</h1>
        <p>Browse countries, search by name, and view detailed information.</p>
      </header>

      <main className="page-content">
        {!selectedCountry ? (
          <section aria-labelledby="country-list-heading">
            <div className="section-top">
              <h2 id="country-list-heading">Country List</h2>

              <form
                className="search-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <label htmlFor="country-search" className="search-label">
                  Search countries
                </label>
                <input
                  id="country-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by country, capital, or region"
                  className="search-input"
                />
              </form>
            </div>

            {loading && (
              <p className="status-message" role="status">
                Loading countries...
              </p>
            )}

            {error && (
              <p className="status-message error-message" role="alert">
                {error}
              </p>
            )}

            {!loading && !error && filteredCountries.length === 0 && (
              <p className="status-message" role="status">
                No countries matched your search.
              </p>
            )}

            {!loading && !error && filteredCountries.length > 0 && (
              <section className="country-grid" aria-label="Countries">
                {filteredCountries.map((country) => (
                  <article key={country.name.common} className="country-card">
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      className="country-image"
                    />

                    <div className="card-content">
                      <h3>{country.name.common}</h3>
                      <p>
                        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                      </p>
                      <p>
                        <strong>Region:</strong> {country.region}
                      </p>
                      <p>
                        <strong>Population:</strong>{" "}
                        {country.population.toLocaleString()}
                      </p>

                      <button
                        type="button"
                        className="detail-button"
                        onClick={() => setSelectedCountry(country)}
                      >
                        View Details
                      </button>
                    </div>
                  </article>
                ))}
              </section>
            )}
          </section>
        ) : (
          <section aria-labelledby="country-detail-heading">
            <button
              type="button"
              className="back-button"
              onClick={() => setSelectedCountry(null)}
            >
              ← Back to List
            </button>

            <article className="detail-card">
              <img
                src={selectedCountry.flags.png}
                alt={`Flag of ${selectedCountry.name.common}`}
                className="detail-image"
              />

              <div className="detail-content">
                <h2 id="country-detail-heading">{selectedCountry.name.common}</h2>
                <p>
                  <strong>Official Name:</strong>{" "}
                  {selectedCountry.name.official}
                </p>
                <p>
                  <strong>Capital:</strong>{" "}
                  {selectedCountry.capital?.[0] || "N/A"}
                </p>
                <p>
                  <strong>Region:</strong> {selectedCountry.region}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {selectedCountry.population.toLocaleString()}
                </p>
              </div>
            </article>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>Data from REST Countries API</p>
      </footer>
    </>
  );
}

export default App;