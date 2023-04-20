import React, { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [oldprice, setoldprice] = useState("");
  const [newprice, setnewprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [productType, setproductType] = useState("");
  const [productFilter, setproductFilter] = useState("");
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }
  const options = [
    {
      label: "Select",
      value: "",
    },
    {
      label: "Books",
      value: "books",
    },

    {
      label: "Software",
      value: "Software",
    },
  ];
  useEffect(() => {
    getImage();
  }, [image]);

  function uploadImage() {
    fetch("http://localhost:8080/api/fetch/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
        name,
        address,
        oldprice,
        newprice,
        discount,
        productType,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      window.location.replace("http://localhost:3000/products")

  }

  function getImage() {
    fetch("http://localhost:8080/api/fetch/get-image", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllImage(data.data);
      });
  }

  return (
    <div className="product-wrapper">
      <div class="productCard">
        <label>Shop Name : </label>
        <input
          type="text"
          value={name}
          className="sigin-input-name"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br></br>
        <label>Address : </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        ></input>
        <br></br>
        <label>Old Price : </label>
        <input
          type="number"
          value={oldprice}
          onChange={(e) => setoldprice(e.target.value)}
        ></input>
        <br></br>
        <label>New Price : </label>
        <input
          type="number"
          value={newprice}
          onChange={(e) => setnewprice(e.target.value)}
        ></input>
        <br></br>
        <label>Discount : </label>
        <input
          type="text"
          value={discount}
          onChange={(e) => setdiscount(e.target.value)}
        ></input>
        <br></br>
        <label>Product type:</label>
        <input
          type="text"
          value={productType}
          onChange={(e) => setproductType(e.target.value)}
        ></input>
        <br></br>
        Let's Upload Image
        <br />
        <br></br>
        <input accepts="image/*" type="file" onChange={convertToBase64}></input>
        {image == "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image}></img>
        )}
        <br></br>
        <button onClick={uploadImage} id="file">
          Submit
        </button>
        <select
          name="select"
          value={productFilter}
          onChange={(e) => {
            setproductFilter(e.target.value);
            console.log(e.target.value);
          }}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="products">
        {allImage.map((data) => {
          if (data.productType == productFilter) {
            return (
              <div className="showProducts">
                <img width={100} height={100} src={data.image} />
                <p>{data.productType}</p>
                <p>{data.address}</p>
                <p>{data.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Products;
