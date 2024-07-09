import modal_vector from "../../icons/coursedetail/modal_vector.png";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function Modal() {
const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="border-solid border-2 bg-white sm:h-[304px] sm:w-[343px] rounded-[16px] xl:w-[528px] xl:h-[212px]">
          <div className="flex items-center justify-between pl-[16px] pr-[16px] sm:h-[56px] border-solid border-b-[1px] border-[#E4E6ED] xl:pl-[24px] xl:pr-[24px]">
            <h1 className="text-Body1 font-Body1 text-black">Confirmation</h1>
            <button onClick={()=>{
              navigate("/user/coursedetail")
            }}>
              <img className="w-[9.94px] h-[9.7px]" src={modal_vector}></img>
            </button>
=======

function Modal() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="border-solid border-2 sm:h-[304px] sm:w-[343px] rounded-[16px] xl:w-[528px] xl:h-[212px]">
          <div className="flex items-center justify-between pl-[16px] pr-[16px] sm:h-[56px] border-solid border-b-[1px] border-[#E4E6ED] xl:pl-[24px] xl:pr-[24px]">
            <h1 className="text-Body1 font-Body1 text-black">Confirmation</h1>
            <img className="w-[9.94px] h-[9.7px]" src={modal_vector}></img>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
          </div>
          <div className="sm:w-[343px] sm:h-[248px] pl-[16px] pr-[16px] xl:w-[528px] xl:pl-[24px] xl:pr-[24px]">
            <h1 className="text-Body2 font-Body2 text-[#646D89] pt-[24px] pb-[24px]">
              Do you sure to subscribe Service Design Essentials Course?
            </h1>
            <div className="border-solid border-1 sm:w-[311px] sm:h-[128px] flex flex-col gap-[16px] xl:w-[528px] xl:flex-row">
<<<<<<< HEAD
              <button onClick={()=>{
                navigate("/user/coursedetail")
              }} className="sm:w-[311px] sm:h-[56px] rounded-[12px] border-solid border-[1px] border-Orange-500 text-Orange-500 xl:text-[16px] xl:font-[700] xl:w-[142px] xl:h-[60px]">
                No, I don't
              </button>
              <button onClick={()=>{
                navigate("/user/confirmationcourse")
              }} className="sm:w-[311px] sm:h-[56px] rounded-[12px] border-solid border-[1px] bg-Blue-500 text-white xl:text-[16px] xl:font-[700] xl:w-[250px] xl:h-[60px]">
=======
              <button className="sm:w-[311px] sm:h-[56px] rounded-[12px] border-solid border-[1px] border-Orange-500 text-Orange-500 xl:text-[16px] xl:font-[700] xl:w-[142px] xl:h-[60px]">
                No, I don't
              </button>
              <button className="sm:w-[311px] sm:h-[56px] rounded-[12px] border-solid border-[1px] bg-Blue-500 text-white xl:text-[16px] xl:font-[700] xl:w-[250px] xl:h-[60px]">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
                Yes, I want to subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
