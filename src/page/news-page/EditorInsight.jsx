import { AiOutlineCalendar } from "react-icons/ai";

const EditorInsight = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-10 ">
      {/* single  card */}
      <div className="border p-2">
        <img className="w-full " src="/assets/editorsInsight1.png" alt="" />
        <h1 className="text-xl mb-3 font-bold">
          21 The Most Stylish Wedding Guest Dresses For Spring
        </h1>
        <div className="flex items-center text-gray-400">
          <AiOutlineCalendar />
          <p>Jan 4, 2022</p>
        </div>
      </div>
      {/* single  card */}
      <div className="border p-2">
        <img src="/assets/editorsInsight2.png" alt="" />
        <h1 className="text-xl mb-3 font-bold">
          21 The Most Stylish Wedding Guest Dresses For Spring
        </h1>
        <div className="flex items-center text-gray-400 gap-3">
          <AiOutlineCalendar />
          <p>Jan 4, 2022</p>
        </div>
      </div>
      {/* single  card */}
      <div className="border p-2">
        <img src="/assets/editorsInsight3.png" alt="" />
        <h1 className="text-xl mb-3 font-bold">
          21 The Most Stylish Wedding Guest Dresses For Spring
        </h1>
        <div className="flex items-center text-gray-400">
          <AiOutlineCalendar />
          <p>Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default EditorInsight;
