function DateSelector ({ selectedDate, onDateChange }) {
  const options = ['Today', '7 days', 'Month'];
  
  return (
  <div className="row border p-3">
    {options.map((option) => (
      <div 
      onClick={() => onDateChange(option)}
      key={option} 
      className={`col text-center ${selectedDate === option ? "text-primary" : ""}`} 
      >
      {option}
      </div>
    ))}
    
  </div>
  )
}

DateSelector.defaultProps = {
  onDateChange: () => {},
}

export default DateSelector;