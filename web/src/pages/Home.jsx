import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../api/course";

import CardCoruseHorizontal from "../component/CardCoruseHorizontal";
import CardCoruseVertical from "../component/CardCoruseVertical";
import Header from "../component/Header";
import { setAllCourse } from "../redux/slices/courseSlice";
function HomePage() {
  const [width, setWindowWidth] = useState(0);
  const dispatch = useDispatch();
  // const [course, setCourse] = useState([]);
  const course = useSelector((state) => state.course?.data);
  const renderCardCourse = (data) => {
    if (data && window.innerWidth > 820) {
      return data.map((item, index) => (
        <CardCoruseHorizontal
          key={index}
          imgBranner={item.image}
          imgPerson={item.image_person}
          title={item.description}
          name={item.name}
          name1={item.name}
          halfPrice={item.price}
          fullPrice={item.price}
        />
      ));
    } else {
      return data.map((item, index) => (
        <CardCoruseVertical
          key={index}
          imgBranner={item.image}
          title={item.description}
          name={item.name}
          halfPrice={item.price}
          fullPrice={item.price}
        />
      ));
    }
  };
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const getCourse = async () => {
    const data = await getAllCourse();
    // setCourse(data.data);
    dispatch(setAllCourse(data.data));
  };

  useEffect(() => {
    getCourse();
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col sm:flex-row flex-wrap justify-start items-center sm:p-9 ">
        {renderCardCourse(course)}
      </div>
    </div>
  );
}

export default HomePage;
