import React from "react";
import "./Merch.css";
import { Container, Row, Col } from "react-bootstrap";

const MerchImages = [
  {
    name: "CD: Forgotten",
    cost: 2.33,
    sales_price: 9.0,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://www.youthonrecord.org/sites/default/files/2018-09/Nordic%20Daughter%20Sticker%20-%20Nordic%20Daughter.jpg",
    current_stock: "100",
  },
  {
    name: "CD: The Path",
    cost: 2.33,
    sales_price: 10.0,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://resources.tidal.com/images/67a4a7d1/5d80/40c5/8119/3c58ee482092/640x640.jpg",
    current_stock: "100",
  },
  {
    name: "Hoodie",
    cost: 15.0,
    sales_price: 50.0,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://mockup-api.teespring.com/v3/image/dlnkK9vxd2EVaHxTsZQrmx1G3nk/800/800.jpg",
    current_stock: "50",
  },
  {
    name: "Shot Glass",
    cost: 1.54,
    sales_price: 8.0,
    order_link: "https://www.uprinting.com",
    image_file: "href",
    current_stock: "100",
  },
  {
    name: "Drinking Horn",
    cost: 9.67,
    sales_price: 40,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://cdn.shopify.com/s/files/1/1408/0936/products/1_Custom_a8af9004-1730-4f6a-b530-4800c71b96ee_750x750.jpg?v=1625414418",
    current_stock: "200",
  },
  {
    name: "Rune Set",
    cost: 3.15,
    sales_price: 25.0,
    order_link: "https://www.uprinting.com",
    image_file: "https://m.media-amazon.com/images/I/51ORlClkXYL._AC_.jpg",
    current_stock: "25",
  },
  {
    name: "Chainmail Necklace",
    cost: 15,
    sales_price: 40,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://i.etsystatic.com/34181806/c/3000/2384/0/615/il/e93680/3927535904/il_680x540.3927535904_lx5c.jpg",
    current_stock: "10",
  },
  {
    name: "Guitar Pic Earrings",
    cost: 1.35,
    sales_price: 20.0,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://i.etsystatic.com/24335123/r/il/2e7e0a/3118902789/il_1588xN.3118902789_1wue.jpg",
    current_stock: "100",
  },
  {
    name: "TShirt: Forgotten",
    cost: 10.35,
    sales_price: 35,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://metaunisex.com/wp-content/uploads/2021/12/Vegvisir2Bviking2Bcompass2Brune2Bprotection2Bsymbol2BCelts2BNordic2BT-Shirt_1_Basic-lBPZ5.jpg",
    current_stock: "100",
  },
  {
    name: "TShirt: The Path",
    cost: 10.35,
    sales_price: 35,
    order_link: "https://www.uprinting.com",
    image_file:
      "https://ih1.redbubble.net/image.438277287.8721/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u5.jpg",
    current_stock: "100",
  },
];

export function Merch() {
  return (
    <section className="merchBack">
      <Container id="projects-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Merchandise </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 projectItemsBrowse">
          {MerchImages.map((data, i) => {
            return (
              <div key={i} className="projectItem">
                <img src={data.image_file} alt="" />
                <div className="content">
                  <p>{data.name}</p>
                  <a href={data.order_link} target="_blank">
                    purchase
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Merch;
