import React from "react";
import edit from "../../assets/image/edit.png"
import Bin from "../../assets/image/Bin.png"


function LessonCard({ courseId, imageName, courseName, lessonCount, price, createdDate, updatedDate }) {


  
  return (
<div className="w-[1120px] mx-auto overflow-hidden shadow-lg bg-white">
  <table className="min-w-full bg-white border text-sm">
    <tbody>
      <tr className="bg-white border-b text-left">
        <td className="px-6 py-3 font-small text-gray-900 w-[99.81px]">{courseId}</td>
        <td className="px-6 py-3 font-small text-gray-900 w-[121.95px]">
          <img src={imageName} alt="Lesson thumbnail" className="h-10 w-10 object-cover" />
        </td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[177.72px]">{courseName}</td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[125.77px]">{lessonCount}</td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[111.22px]">{price}</td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[175.97px]">{createdDate}</td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[183.08px]">{updatedDate}</td>
        <td className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[124.48px]">
          <button className="p-2 submit">
            <img src={Bin} alt="Delete" />
          </button>
          <button className="p-2 submit">
            <img src={edit} alt="Edit" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
}

export default LessonCard;
