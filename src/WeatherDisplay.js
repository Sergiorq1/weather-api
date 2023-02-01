function WeatherDisplay(props){
    const { temp, feelsLike, description} = props

    return(
        <div className="WeatherDisplay">
            <h1>{temp}</h1>
            <small>Feels Like: {feelsLike}</small>
            <p>{description}</p>
        </div>
    )
}
export default WeatherDisplay