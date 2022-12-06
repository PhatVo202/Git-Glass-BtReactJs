import React, { Component } from "react";
import data from "../data/dataGlasses.json";

export default class BaiTapGlass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayGlass: data[0],
    };
  }

  renderGlass = () => {
    return data.map((item) => {
      return (
        <div
          key={item.id}
          className="col-3"
          onClick={() => this.viewDetailGlass(item)}
        >
          <img
            className="mt-5 img-fluid border border-dark"
            src={item.url}
            alt="#"
            width={150}
            height={100}
          />
        </div>
      );
    });
  };

  viewDetailGlass = (item) => {
    this.setState({
      arrayGlass: item,
    });
  };

  render() {
    const styleGlass = {
      top: "80px",
      left: "336px",
      opacity: 0.7,
    };

    const styleDetailGlass = {
      top: "195px",
      width: "250px",
      left: "270px",
      textAlign: "left",
      opacity: 0.7,
      backgroundColor: "#f3c097",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            minHeight: "100vh",
          }}
        >
          <h2
            className="text-center text-white"
            style={{
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.6)",
              padding: "15px",
            }}
          >
            Try Glass App Online
          </h2>
          <div className="container-lg">
            <div className="row mt-5 text-center">
              <div className="col-6 ">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesImage/model.jpg"
                    alt="#"
                    width={250}
                  />
                  <img
                    className="position-absolute"
                    src={this.state.arrayGlass.url}
                    alt="#"
                    width={120}
                    height={50}
                    style={styleGlass}
                  />
                  <div className="position-relative" style={styleDetailGlass}>
                    <h4 style={{ color: "#8266bd", fontWeight: "bold" }}>
                      {this.state.arrayGlass.name}
                    </h4>
                    <p>{this.state.arrayGlass.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <img
                    className="img-fluid"
                    src="./glassesImage/model.jpg"
                    alt="#"
                    width={250}
                  />
                </div>
              </div>
            </div>
            <div
              className="row mt-5 text-center pb-5"
              style={{ backgroundColor: "white", cursor: "pointer" }}
            >
              {this.renderGlass()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
