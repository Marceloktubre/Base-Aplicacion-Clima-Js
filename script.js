let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "0fa7a06007f0732bc5a329a0f3f5bab8";
let difKelvin = 273.15; //diferencia del clima con celsius

document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response));
}

function mostrarDatosClima(response) {
  const divDatosClima = document.getElementById('datosClima');
  divDatosClima.innerHTML = '';

  const ciudadNombre = response.name;
  const paisNombre = response.sys.country;
  const temperatura = response.main.temp;
  const humedad = response.main.humidity;
  const descripcion = response.weather[0].description;
  const icono =response.weather[0].icon

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent =`${ciudadNombre}, ${paisNombre}` 

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es : ${Math.floor(temperatura-difKelvin)}°C`
  
  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La húmedad es : ${humedad}%`

  const iconoInfo=document.createElement('img')
  iconoInfo.textContent =`https://openweathermap.org/img/wn/10d@2x.png`

  const descripcionInfo = document.createElement('p')
  descripcionInfo.textContent = `La descripcion meteorológica es : ${descripcion}`

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(iconoInfo)
  divDatosClima.appendChild(descripcionInfo)
 
}
