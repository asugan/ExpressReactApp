import { useState } from "react";
import "./App.css";

function Post() {
  const [title, setName] = useState("");
  const [body, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("News_title", title);
    formData.append("News_body", body);
    formData.append("News_category", category);
    formData.append("image", image.data);

    try {
      let res = await fetch("/api/post", {
        method: "POST",
        mode: "cors",

        body: formData,
      });
      if (res.status === 200) {
        setName("");
        setAge("");
        setCategory("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          value={title}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={body}
          placeholder="Body"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <h1>Upload to server</h1>
        {image.preview && (
          <img src={image.preview} width="100" height="100" alt="" />
        )}
        <hr></hr>
        <input type="file" name="image" onChange={handleFileChange}></input>

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Post;
