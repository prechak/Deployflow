function CancelButton({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="border-[1px] rounded-[12px] shadow-md border-Orange-500 bg-white text-Orange-500 text-[16px] font-[700] w-[119px] h-[60px]"
      >
        {text}
      </button>
    );
  }
  
  export default CancelButton;
  