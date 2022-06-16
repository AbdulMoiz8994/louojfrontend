import React from "react";
import "./scss/index.scss";
import { Header } from "../../layout";
import { InputField } from "../../components";
import shirt from "../../assests/images/shirt.svg";
import kurti from "../../assests/images/kurti.svg";
import dressshirt from "../../assests/images/image6.png";
import { MainSection } from "./main-section";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="main-dashboard h-auto">
        <div className="nested-dashbaord">
          <div className="heading-portion">
            {/* <h1> */}
            <span> Choose Your</span>{" "}
            <span className="show-heading">Own Styles With Your Designers</span>{" "}
            <span>We love to help people feel great about how they look</span>{" "}
            {/* </h1> */}
          </div>
          {/* cards */}
          <div className="cards">
            <div className="nested-card">
              <div>Design Your</div>
              <div className="prod-name">Shirt</div>
              <img src={shirt} alt="shirt" />
            </div>
            <div className="nested-card">
              <div>Design Your</div>
              <div className="prod-name">Kurti</div>
              <img src={kurti} alt="kurti" />
            </div>
            <div className="nested-card">
              <div>Appointment with</div>
              <div className="prod-name">Stylish</div>
              <img src={dressshirt} alt="shirt" />
            </div>
          </div>

          {/* form div */}
          <div className="forms">
            <div className="first">
              <InputField
                placeholder="Location"
                type="text"
                height="50px"
                icons={
                  <i className="fa-solid fa-location-dot absolute top-4 left-3  icons"></i>
                }
              />
            </div>
            <div className="second">
              <InputField
                placeholder="Search here..."
                type="text"
                height="50px"
                width={"100%"}
                icons={
                  <i className="fas fa-search absolute top-4 left-3  icons"></i>
                }
              />
            </div>
          </div>
          {/* <h1>Helloo</h1> */}
          <MainSection />
        </div>
      </div>
    </div>
  );
};
