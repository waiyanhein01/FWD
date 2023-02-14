const fs = require ("fs")

fs.readFile("covidInfo.json", (err, data) => {
    if(err) {
        console.log(err)
    } else {
        const result = JSON.parse(data)
        const global = result.Global
        const allCountries = result.Countries
        const myanmar = allCountries.find( a => a.Country === "Myanmar")

        console.log("Global :", global, "Myanmar :", myanmar)
    }
})