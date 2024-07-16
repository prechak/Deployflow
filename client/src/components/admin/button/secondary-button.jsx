function OrageButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-orange-600 bg-white text-orange-600 px-4 py-2 rounded-md hover:bg-orange-100 w-[208px] h-[60px]"
    >
      {text}
    </button>
  );
}

export default OrageButton;
