import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import api from "../Api/Api";
function Admin() {
  

  const call = async (values) => {
    
    console.log("---", values)
    api.sendData(values.name, values.adres, values.tel, values.since, values.capacity, values.map, values.universities, values.images).then((res) => {
      console.log("res", res)
    }
    );
  };
  return (
    <div>
      <div className="flex justify-center flex-col flex- w-1/4 mx-auto">
        <h1 className="">Yurt Ekleme Sayfası</h1>
        <Formik
          initialValues={{
            name: "",
            adres: "",
            tel: "",
            since: "",
            capacity: "",
            map: "",
            universities: [""],
            images: [""],
          }}
          onSubmit={(values) => call(values)}
        >
          {({ values }) => (
            <Form>
              <div>
                <div className="">Yurt Adı:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="name"
                />
              </div>
              <div>
                <div>Yurt Adres:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="adres"
                />
              </div>

              <div>
                <div>Yurt Telefon:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="tel"
                />
              </div>

              <div>
                <div>Yapım Yılı:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="since"
                />
              </div>

              <div>
                <div>Öğrenci Kapasitesi:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="capacity"
                />
              </div>

              <div>
                <div>Harita linki:</div>
                <Field
                  type="text"
                  className="border rounded-md border-black"
                  name="map"
                />
              </div>

              <div>Talebelerin Gittiği Okullar:</div>
              <FieldArray name="universities">
                {({ insert, remove, push }) => (
                  <div>
                    {values.universities.length > 0 &&
                      values.universities.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <Field
                              name={`universities.${index}`}
                              type="text"
                              className="border rounded-md border-black my-1"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary my-1"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push()}
                    >
                      Üniversite Ekle
                    </button>
                  </div>
                )}
              </FieldArray>
              <div>
                <div>Yurt Resmi:</div>
                <FieldArray name="images">
                {({ insert, remove, push }) => (
                  <div>
                    {values.images.length > 0 &&
                      values.images.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <Field
                              name={`images.${index}`}
                              type="text"
                              className="border rounded-md border-black my-1"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary my-1"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push()}
                    >
                      Resim ekle
                    </button>
                  </div>
                )}
              </FieldArray>
                {/*                
                <input type="file" onChange={HandleChange} /> */}
              
              </div>

              <button type="submit">Gönder</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Admin;
