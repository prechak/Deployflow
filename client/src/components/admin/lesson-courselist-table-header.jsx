import LessonCard from "./lesson-courselist-card";


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
    {
      courseId: 2,
      imageName: "image2.jpg",
      courseName: "CSS",
      lessonCount: "4 Lesson",
      price: "2,999.00",
      createdDate: "12/3/2022 11:45AM",
      updatedDate: "12/3/2022 11:45AM",
    },
    {
      courseId: 2,
      imageName: "image2.jpg",
      courseName: "CSS",
      lessonCount: "4 Lesson",
      price: "2,999.00",
      createdDate: "12/3/2022 11:45AM",
      updatedDate: "12/3/2022 11:45AM",
    },
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
      <table className="w-[1120px] h-[48px] text-sm text-left">
      <thead>
      <tr className="bg-gray-300 border-b text-left">
        <th className="px-6 py-3 font-small text-gray-900 w-[99.81px]">ID</th>
        <th className="px-6 py-3 font-small text-gray-900 w-[121.95px]">Image</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[177.72px]">Course Name</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[125.77px]">Lesson Count</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[111.22px]">Price</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[175.97px]">Created Date</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[183.08px]">Updated Date</th>
        <th className="px-6 py-3 font-small text-gray-900 whitespace-nowrap w-[124.48px]">Actions</th>
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
