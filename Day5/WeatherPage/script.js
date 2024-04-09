const WEATHER_API_KEY = `CUXYVM2EVSQUN6SMZJGRWKRZ7`
const LOCATION_API_KEY = `e2b3aefd4b104180b64a482f73b35241`


// check the unit selected and change accordingly
const unitSelect = document.querySelector("#unit")
let units = unitSelect.value === "C" ? "uk" : "us"

unitSelect.addEventListener("change", () => {
    units = unitSelect.value === "C" ? "uk" : "us"
    getLocation()
})

// function to get current location based on the IP address
async function getLocation() {
    await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${LOCATION_API_KEY}`)
        .then(res => res.json())
        .then(data => fetchDetails(data.city.name))
}


// get the location from the user and fetch the weather details
const btn = document.getElementById("sub")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let loc = document.getElementById("loc").value
    fetchDetails(loc)
})

// function to fetch the weather details
function fetchDetails(location) {
    document.getElementById("city").innerText = location
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${WEATHER_API_KEY}&contentType=json`)
        .then(res => res.json())
        .then(data => renderUI(data))
}

// function to render the UI
const root = document.getElementById("root")

function renderUI(data) {
    document.querySelector("#val").innerText = data.currentConditions.temp
    document.querySelector(".unit").innerText = unitSelect.value
    root.innerHTML = ""
    const days = data.days;
    const row = document.createElement("tr")

    const headings = ["Date", "Maximum Temperature", "Minimum Temperature"]
    headings.forEach((heading) => {
        let cell = document.createElement("th")
        cell.innerText = heading
        row.appendChild(cell)
    })

    root.appendChild(row)

    days.forEach(day => {
        let date = new Date(day.datetime).toDateString()
        let min = day.tempmin
        let max = day.tempmax
        let dataArr = [date, min, max]

        let row = document.createElement("tr")
        dataArr.forEach((dataCell) => {
            let cell = document.createElement("td")
            cell.innerText = dataCell
            row.appendChild(cell)
        })
        root.append(row)
    })

}

// get the location on load
document.addEventListener("load", getLocation())
