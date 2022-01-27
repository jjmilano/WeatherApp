
window.addEventListener('load', ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion= document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')
    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
           lon=posicion.coords.longitude
           lat=posicion.coords.latitude

           const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=`
           console.log(url)

           fetch(url)
           .then( response =>{return response.json()})
           .then(data =>{
               console.log(data)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent=`${temp}  ºC`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent= data.name
                vientoVelocidad.textContent=`Wind Speed🍃 ${data.wind.speed} m/s`
                

                switch(data.weather[0].main){
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        break;
                        case 'Clouds':
                            iconoAnimado.src='animated/cloudy.svg'
                            break;
                            case 'Thunderstorm':
                                iconoAnimado.src='animated/thunder.svg'
                                break;
                                case 'Drizzle':
                                    iconoAnimado.src='animated/rainy-7.svg'
                                    break;
                                    case 'Snow':
                                    iconoAnimado.src='animated/snowy-6.svg'
                                    break;
                                    case 'Atmosphere':
                                    iconoAnimado.src='animated/weather.svg'
                                    break
                                    case 'Rain':
                                        iconoAnimado.src='animated/cloudy-day-1.svg'
                                        default:
                                            iconoAnimado.src='animated/weather.svg'
                }

           })
           .catch( error=>{
               console.log(error)
           })
        })
    }
})
