const fs = require ("fs");
const https = require ("https")

https.get("https://api.covid19api.com/summary", res => {
    let data = "";

    res.on("data", chunk => {
        data += chunk;
    })

    res.on("end", () => {
        fs.writeFile("covidInfo.json", data, () => {
            console.log("Completed")
        })
    })
})