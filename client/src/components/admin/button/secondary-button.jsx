function OrageButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-Orange-500 shadow-md bg-white text-Orange-500 rounded-[12px] w-[208px] h-[60px] text-[16px] font-[700]"
    >
      {text}
    </button>
  );
}

export default OrageButton;
