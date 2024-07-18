function SubButton({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="border-[1px] rounded-[12px] shadow-md bg-Blue-500 text-white text-[16px] font-[700] w-[117px] h-[60px]"
      >
        {text}
      </button>
    );
  }
  
  export default SubButton;
  