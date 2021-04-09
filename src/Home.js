import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TENET/launch/1500x600_Hero-Tall_JPN._CB656241078_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="48575"
          title="Nokia 5310 Dual SIM Feature Phone with MP3 Player, Wireless FM Radio and Rear Camera"
          price={3249}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/4110ru1t4KL.jpg"
        />
        <Product
          id="85632"
          title="Savya Home® APEX Chairs™ Apollo Chrome Base HIGH Back Engineered Plastic Frame Office Chair (Apollo)"
          price={5399}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81qiwiIXVLL._SL1500_.jpg"
        />
        <Product
          id="85634"
          title="AVITA Essential NE14A2INC433-MB 14-inch Laptop (Celeron N4000/4GB/128GB SSD/Window 10 Home in S Mode/Integrated Graphics), Matt Black"
          price={17190}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61YdFkoR9dL._SL1000_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="74521"
          title="LifeDigital ZED AIR CX7 15.6 IPS FHD Screen Black Laptop (Intel Core i7, 8GB RAM, 512GB SSD, Windows 10)"
          price={32400}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tnnbggvrL._SL1500_.jpg"
        />
        <Product
          id="74598"
          title="Arvind Sanitary (Clear Batla Set) Glass Round Vessel/Table Top Wash Basin with Bowl, Self and Steel Stand (Clear)"
          price={5100}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41XFsikrN8L.jpg"
        />
        <Product
          id="96582"
          title="Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2XCR/HL, Camellia Purple, Base Stand with Drawer)"
          price={18050}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71DJffKcMZL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
      <Product
          id="12360"
          title="AOPEN Acer 24-inch (60.96 cm) Aopen Curve Gaming Monitor - 24HC1QR (Black)"
          price={25000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SL1500_.jpg"
        />
      </div>
      
    </div>
  );
}

export default Home;
