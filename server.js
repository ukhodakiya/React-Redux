const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/products", (req,res) => {
   res.send([
       {
           "productId": 1,
           "productName": "Leaf Rake",
           "productCode": "GDN-0011",
           "releaseDate": "March 19, 2016",
           "description": "Leaf rake with 48-inch wooden handle.",
           "price": 19.95,
           "starRating": 3.2,
           "imageUrl": "https://cdn.pixabay.com/photo/2012/04/01/19/37/rake-24250_960_720.png"
       },
       {
           "productId": 2,
           "productName": "Garden Cart",
           "productCode": "GDN-0023",
           "releaseDate": "March 18, 2016",
           "description": "15 gallon capacity rolling garden cart",
           "price": 32.99,
           "starRating": 4.2,
           "imageUrl": "https://cdn.pixabay.com/photo/2012/04/01/19/37/rake-24250_960_720.png"
       },
       {
           "productId": 5,
           "productName": "Hammer",
           "productCode": "TBX-0048",
           "releaseDate": "May 21, 2016",
           "description": "Curved claw steel hammer",
           "price": 8.9,
           "starRating": 4.8,
           "imageUrl": "https://cdn.pixabay.com/photo/2012/04/01/19/37/rake-24250_960_720.png"
       },
       {
           "productId": 8,
           "productName": "Saw",
           "productCode": "TBX-0022",
           "releaseDate": "May 15, 2016",
           "description": "15-inch steel blade hand saw",
           "price": 11.55,
           "starRating": 3.7,
           "imageUrl": "https://cdn.pixabay.com/photo/2012/04/01/19/37/rake-24250_960_720.png"
       },
       {
           "productId": 10,
           "productName": "Video Game Controller",
           "productCode": "GMG-0042",
           "releaseDate": "October 15, 2015",
           "description": "Standard two-button video game controller",
           "price": 35.95,
           "starRating": 4.6,
           "imageUrl": "https://cdn.pixabay.com/photo/2012/04/01/19/37/rake-24250_960_720.png"
       }
   ]);
});

app.listen(4000,() => {
   console.log("Server running @localhost: 4000");
});