const express = require("express");
const data = require("./dataStore/data.json");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    const { city, brand, product } = req.query;
    
    if (!city || !brand || !product) {
        return res.status(400).json({ error: "Missing query parameters: city, brand, or product" });
    }

    if (!data["data"]?.[city]) {
        return res.status(404).json({ error: "City not found" });
    }

    if (!data["data"][city]?.[brand]) {
        return res.status(404).json({ error: "Brand not found in the city" });
    }

    if (!data["data"][city][brand]?.[product]) {
        return res.status(404).json({ error: "Product not found under this brand" });
    }

    return res.status(200).json(data["data"][city][brand][product]);
});

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
