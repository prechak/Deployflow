import { useForm, useFieldArray, Controller } from "react-hook-form";
import Uploadvideo from "../../../assets/image/Uploadvideo.png";
import NavbarAddSubLesson from "../navbar/navbar-addsublesson";
import axios from "axios";
import { useParams } from "react-router-dom";
import drag1 from "../../../assets/icons/admin/drag1.png";


function AddSubLessonFrom() {
  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: {
      lessonName: "",
      subLessons: [{name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subLessons",
  });

  const params = useParams();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `http://localhost:4000/admin/${params.courseId}/lesson`,
        {
          modulename: data.lessonName,
          sublessonname: data.subLessons.map((subLesson) => subLesson.name),
        }
      );
      alert("Add Lesson and SubLesson Successfully");
      reset("");
    } catch (error) {
      console.error(
        "There was an error adding the lesson and sublesson:",
        error
      );
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <nav>
        <NavbarAddSubLesson
          handleSubmit={handleSubmit(onSubmit)}
          text="Create"
        />
      </nav>
      <div className="mt-[50px] mx-8 w-[1120px] h-fit bg-white rounded-[16px] border-[1px] mb-[100px]">
        <div className=" mx-8 p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mx-[40px] w-[920px] h-[76px]">
                <label className="w-full h-[24px] text-black text-[16px]">
                  Lesson name *
                </label>
                <input
                  className="w-full h-[48px] bg-white text-black border-[1px] rounded-[8px] pl-[20px]"
                  placeholder="Place Holder"
                  {...register("lessonName")}
                />
              </div>
              <div className="mx-[40px]">
                <hr className="my-8 border-1 " />
              </div>
              <div className="mx-[40px] text-[20px] font-[600] text-[#646D89]">
                Sub-Lesson
              </div>
            </div>
            {fields.map((field, index) => (
              <aside
                key={field.id}
                className="mt-[30px] mx-[40px] w-[920px] h-[340px] bg-Gray-100 flex justify-center items-center rounded-[16px] border-[1px]"
              >
                <div className="w-[888px] h-[292px] flex gap-[24px]">
                  <div className="w-[26px] h-[76px] text-[#C8CCDB]">
                    <img src={drag1}></img>
                  </div>
                  <div className="w-[747px] flex flex-col justify-center gap-[23px]">
                    <div className="flex flex-col gap-[4px]">
                      <label
                        htmlFor={`sub-lesson-name-${field.id}`}
                        className="text-Body2 font-Body2 text-[#08090D]"
                      >
                        Sub-Lesson name *
                      </label>
                      <Controller
                        render={({ field }) => (
                          <input className="text-black" {...field} />
                        )}
                        name={`subLessons.${index}.name`}
                        control={control}
                      />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <h1 className="font-[400] text-[16px] text-[#07090D]">
                        Video *
                      </h1>
                      <div className="w-[160px] h-[160px] rounded-[8px] bg-Gray-200 flex items-center justify-center">
                        <img src={Uploadvideo} />
                      </div>
                    </div>
                  </div>
                  <div className=" w-[67px] h-[32px] text-center text-[16px] font-[700] text-Gray-500">
                  {index > 0 ? (
                      <button type="button" onClick={() => remove(index)}>Delete</button>
                    ) : (
                      <button type="button" onClick={() => alert("Cannot delete the only sub-lesson")}>Delete</button>
                    )}
                  </div>
                </div>
              </aside>
            ))}
            ;
            <button
              className="mx-[40px] mt-[32px] border-[1px] border-Orange-500 shadow-md bg-white text-Orange-500 rounded-[12px] w-[208px] h-[60px] text-[16px] font-[700]"
              type="button"
              onClick={() => append({ name: "" })}
            >
              Add Sub-Lesson
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubLessonFrom;
