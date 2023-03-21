function CitySelector({ cities, selectedCity, onChangeCity }) {
  function handleChange(event) {
    onChangeCity(event.target.value);
  }

  return (
  <select className="form-select" value={selectedCity} onChange={handleChange}>
      {cities.map((city) => 
        <option key={city}> {city} </option>
      )}
    </select>
  )
}

CitySelector.defaultProps = {
  selectedCity: 'Madrid',
  onChangeCity: () => { }
}

export default CitySelector;