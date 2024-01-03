import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setText, setClickText } from "../slices/textSlice";
import { setLocation } from "../slices/locationSlice";
import axios from "axios";

export function Boxlist() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => {
    return state.searchText;
  });

  const locationList = useSelector((state) => {
    return state.locationList;
  });

  useEffect(() => {
    getLocationData();
  }, [searchText]);

  const getLocationData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );

      const adjustedResult = handleDescriptionLength(result.data.data);

      console.log(adjustedResult);
      dispatch(setLocation(adjustedResult));
    } catch {}
  };

  const handleDescriptionLength = (array) => {
    array.map((item) => {
      if (item.description.length > 100) {
        item.description = item.description.slice(0, 100) + "...";
        return item;
      } else return item;
    });

    return array;
  };

  return (
    <div className=" bg-orange-400 flex flex-col  items-center">
      {locationList.map((item) => {
        return (
          <section className="w-[1000px] h-[300px] m-4 bg-slate-300 flex flex-row gap-4">
            <img className="w-[200px] h-[200px]" src={item.photos[0]} alt="" />

            <div className=" w-[80%]  bg-slate-600 flex flex-col gap-2">
              <div>{item.title}</div>

              <div>{item.description} </div>
              <a href={item.url} target="_blank">อ่านต่อ</a>

              <div className="flex flex-row gap-1">
                <div>Tag:</div>
                {item.tags.map((tag) => {
                  return <div onClick={() => {dispatch(setClickText(tag))}}>{tag}</div>;
                })}
              </div>

              <div className=" flex flex-row  gap-6">
                {item.photos.slice(1).map((photo,index) => {

                    return ( <img className="w-[100px] h-[100px]" src={photo} alt="" />) 
                })}



              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
