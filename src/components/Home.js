import React from "react";
import { Parallax } from "react-parallax";
import Sliders from "./Sliders";

const image1 =
  "https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const styles = {
  position: "absolute",
  padding: "20px",
  left: "50%",
  top: "50%",
  background: "white",
  transform: "translate(-50%,-50%)",
  opacity: "0.6",
};

export default function Home() {
  return (
    <div className="home-page">
      <Parallax bgImage={image1} strength={300}>
        <div style={{ height: "500px" }}>
          <div style={styles}>
            <h1 className="heading-style">Home</h1>
            <p className="para-style lg-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et urna cursus dolor efficitur tincidunt. Phasellus molestie
              molestie justo ut pulvinar. Phasellus molestie dolor eget diam
              laoreet ultricies.
            </p>
          </div>
        </div>
      </Parallax>
      <Sliders />
    </div>
  );
}
