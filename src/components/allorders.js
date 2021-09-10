import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Allorder() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allorder")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-center ">
      All Orders
      <div className="">
        {posts.map((post) => (
          <div>
            {post.name} - {post.email} - {post.address} - {post.order}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allorder;
