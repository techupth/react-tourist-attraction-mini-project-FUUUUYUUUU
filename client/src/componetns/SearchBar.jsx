import { useSelector, useDispatch } from "react-redux";
import { setText } from "../slices/textSlice";

export function SearchBar() {
  const searchText = useSelector((state) => {
    return state.searchText;
  });

  const dispatch = useDispatch();

  return (
    <nav className=" bg-slate-100 flex flex-col  items-center p-5">
      <div className="w-[60%]">ค้นหาที่เที่ยว : {searchText}</div>
      <input
        className=" w-[60%] text-center"
        placeholder="หาที่เที่ยวแล้วไปกัน  ..."
        onChange={(event) => {
          dispatch(setText(event.target.value));
        }
      }
      value={searchText}
      ></input>
      <hr className=" w-[500px] h-[5px] mt-3 bg-black" />
    </nav>
  );
}
