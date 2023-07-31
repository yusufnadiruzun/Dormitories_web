import React from "react";
import Admin from "./screens/Admin";
import Homepage from "./screens/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import api from "./Api/Api";
import Dormdata from "./screens/Dormdata";

function Navigator() {
  const [login, setLogin] = React.useState(false);
  const [dormsData, setDormsData] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    }
  
    api.getData().then((res) => {
      const formattedData = res.data.map((item) => ({
        ...item,
        dorm_photos: item.dorm_photos.split(",").filter((photo) => photo.trim() !== "undefined"),
        universities: item.universities.split(",").filter((uni) => uni.trim() !== "undefined"),
      }));
  
      setDormsData(formattedData);
    });
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
          <Route
              path="/*"
              element={
                <div>
                 <h1>wrong page</h1>
                </div>
              }
            />
            <Route
              path="/anasayfa"
              element={
                <div>
                  <Homepage dormsData={dormsData}></Homepage>
                </div>
              }
            />
            {dormsData.map((dorm) => (
              <Route
                path={`/${dorm.dorm_url}`}
                element={
                  <div>
                    <Dormdata data={dorm}></Dormdata>
                  </div>
                }
              />
            ))
              
            }
            
            {login ? (
              <Route
                path="/admin"
                element={
                  <div>
                    <Admin></Admin>
                  </div>
                }
              />
            ) : null}

            <Route
              path="/login"
              element={
                <div>
                  <Login setLogin={setLogin}></Login>
                </div>
              }
            />

            {/* <Route
            path="/halic"
            element={
              <div>
                <Dormdata></Dormdata>
              </div>
            }
          /> */}
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigator;
