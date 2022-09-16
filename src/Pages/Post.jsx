import { useState } from "react";
import "../Styles/App.scss";

function Post() {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [body, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const [image1, setImage1] = useState({ preview: "", data: "" });
  const [image2, setImage2] = useState({ preview: "", data: "" });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  const handleFileChange1 = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage1(img);
  };
  const handleFileChange2 = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage2(img);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("News_title", title);
    formData.append("News_description", description);
    formData.append("News_body", body);
    formData.append("News_category", category);
    formData.append("image", image.data);
    formData.append("image1", image1.data);
    formData.append("image2", image2.data);

    try {
      let res = await fetch("/api/post", {
        method: "POST",
        mode: "cors",

        body: formData,
      });
      if (res.status === 200) {
        setName("");
        setDescription("");
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
    <div className="Postpage">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          value={title}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
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
        {image1.preview && (
          <img src={image1.preview} width="100" height="100" alt="" />
        )}
        {image2.preview && (
          <img src={image2.preview} width="100" height="100" alt="" />
        )}
        <hr></hr>
        <input type="file" name="image" onChange={handleFileChange}></input>
        <input type="file" name="image1" onChange={handleFileChange1}></input>
        <input type="file" name="image2" onChange={handleFileChange2}></input>

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Post;
