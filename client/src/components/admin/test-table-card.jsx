import Bin from "../../assets/image/Bin.png";
import Edit from "../../assets/image/edit.png";

function TestTableCard({ courseId, lesson, subLesson }) {
  return (
    <div className="w-[1120px] h-[80px] ">
      <div className=" text-md flex justify-between ">
        <table className=" h-[68px] text-sm text-left">
          <thead>
            <tr className="bg-white border-b text-left">
              <th className="px-6 py-3 font-small text-gray-900 w-[56px]"></th>
              <th className="px-6 py-3 font-small text-gray-900 w-[48px]">
                {courseId}
              </th>
              <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[500px]">
                {lesson}
              </th>
              <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[396px]">
                {subLesson}
              </th>
              <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[120px]">
                <div className="flex items-center space-x-2">
                  <button>
                    <img src={Bin} alt="Delete" className="w-6 h-6" />
                  </button>
                  <button>
                    <img src={Edit} alt="Edit" className="w-6 h-6" />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default TestTableCard;
