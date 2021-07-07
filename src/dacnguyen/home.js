import React, { useState } from "react";
import Form from "./Form";
import List from "./list";

Home.propTypes = {};

function Home(props) {
  const [product, setproduct] = useState([
    {
      name: "Rượu vang đỏ",
      id: 1,
      gia: "100nvd",
    },
    {
      name: "rượu Phúc Bồn Tử",
      id: 2,
      gia: "100nvd",
    },
    {
      name: "Rượu Linh Chi",
      id: 3,
    },
  ]);
  function inlist(para) {
    var newlist = product.findIndex((a) => {
      return a.id === para.id;
    });
    var newproduct = [...product];
    newproduct.splice(newlist, 1);
    setproduct(newproduct);
  }
  // function invalue(para) {
  //   console.log(product);
  //   var newinput = {
  //     name: para,
  //     id: product.length + 1,
  //   };

  //   var productnew = [...product];
  //   productnew.push(newinput);
  //   console.log(productnew);
  //   setproduct(productnew);
  // }
  return (
    <div>
      <Form />
      <List outputproduct={product} outlist={inlist} />
    </div>
  );
}

export default Home;
