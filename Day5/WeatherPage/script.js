const API_KEY = `CUXYVM2EVSQUN6SMZJGRWKRZ7`

const btn = document.getElementById("sub")
btn.addEventListener("click", () => {
    let loc = document.getElementById("loc").value
    fetchDetails(loc)
})

function fetchDetails(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${API_KEY}&contentType=json`)
        .then(res => res.json())
        .then(data => renderUI(data))
}

const root = document.getElementById("root")

function renderUI(data) {
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
        let date = day.datetime
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

