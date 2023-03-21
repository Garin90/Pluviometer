function RainGauge({ litres }) {
  if(litres === undefined){
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h4 className="text-center">{litres}</h4>
      <div className="progress" role="progressbar" aria-label="basic-example" aria-valuenow={litres} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: `${litres}%` }}></div>
      </div>
    </div>
  )
}

export default RainGauge;