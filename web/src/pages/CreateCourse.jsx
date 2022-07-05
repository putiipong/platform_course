import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../api/course";
import Compress from "compress.js";

function CreateCourse() {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    category: "",
    description: "",
    end_time: "",
    image: "",
    image_person: "",
    name: "",
    number_of_student: "",
    start_time: "",
    subject: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCourse(form);
    navigator("/home");
  };

  const uploadImage = async (event, type) => {
    const fileResized = await resizeImageFnAndconvertBase64(
      event.target.files[0]
    );
    setForm({ ...form, [type]: fileResized });
  };
  const resizeImageFnAndconvertBase64 = async (file) => {
    const compress = new Compress();
    const resizedImage = await compress.compress([file], {
      size: 3,
      quality: 1,
      maxWidth: 200,
      maxHeight: 200,
      resize: true,
    });
    const img = resizedImage[0];
    const base64str = img.data;
    return base64str;
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-400">
      <form onSubmit={handleSubmit}>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Name </label>
          <input
            className="w-40 "
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Description </label>
          <textarea
            id="description"
            name="description"
            rows="2"
            cols="15"
            value={form.description}
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
          >
            {form.description}
          </textarea>
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Category </label>
          <input
            className="w-40  "
            type="text"
            name="category"
            value={form.category}
            onChange={(e) => {
              setForm({ ...form, category: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Image </label>
          <input
            className="w-40  "
            type="file"
            name="image"
            onChange={(e) => {
              uploadImage(e, "image");
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Image Person </label>
          <input
            className="w-40  "
            type="file"
            name="imagePerson"
            onChange={(e) => {
              uploadImage(e, "image_person");
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Subject </label>
          <input
            className="w-40  "
            type="text"
            name="subject"
            value={form.subject}
            onChange={(e) => {
              setForm({ ...form, subject: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Start Time </label>
          <input
            className="w-40   "
            type="time"
            name="startTime"
            value={form.start_time}
            onChange={(e) => {
              setForm({ ...form, start_time: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">End Time </label>
          <input
            className="w-40  "
            type="time"
            name="endTime"
            value={form.end_time}
            onChange={(e) => {
              setForm({ ...form, end_time: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2">
          <label className="text-left">Number Of Student </label>
          <input
            className="w-40  "
            type="number"
            name="numberOfStudent"
            value={form.number_of_student}
            onChange={(e) => {
              setForm({ ...form, number_of_student: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2">
          <label className="text-left">Price</label>
          <input
            className="w-40  "
            type="number"
            name="numberOfStudent"
            value={form.price}
            onChange={(e) => {
              setForm({ ...form, price: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <button className="font-semibold rounded-lg border-2 border-slate-400 text-white bg-black ">
            Submit
          </button>
          <button
            className="font-semibold rounded-lg border-2 border-slate-400  text-white bg-black "
            onClick={() => {
              navigator("/home");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateCourse;
