import LessonCard from "./lesson-card";
import 

function Lesson() {
  // Example list of lessons
  const lessons = [
   
    {
      courseId: 2,
      imageName: "image2.jpg",
      courseName: "CSS",
      lessonCount: "4 Lesson",
      price: "2,999.00",
      createdDate: "12/3/2022 11:45AM",
      updatedDate: "12/3/2022 11:45AM",
    },
  
  ];

  return (
    <div className="ml-[120px] relative overflow-x-auto ">
      <table className="w-[1120px] h-[745px]text-sm text-left">
        <thead className="text-xs text-gray-600 bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              No.
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Image
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Course name
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Lesson
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Price
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Created date
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Updated date
            </th>
            <th scope="col" className="px-6 py-3 font-small text-gray-900 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        
      </table>
      <tbody>
      {lessons.map((lesson, index) => (
            <LessonCard
              courseId={lesson.courseId}
              imageName={lesson.imageName}
              courseName={lesson.courseName}
              lessonCount={lesson.lessonCount}
              price={lesson.price}
              createdDate={lesson.createdDate}
              updatedDate={lesson.updatedDate}
            />
          ))}
        </tbody>
    </div>
    

  );
}

export default Lesson;