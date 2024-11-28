function Square({
  value,
  btnClick,
}: {
  value: '🌸' | '💣' | null;
  btnClick: () => void;
}) {
  return (
    <button
      className='w-full h-32 border text-6xl border-pink-500 bg-pink-950/10'
      onClick={btnClick}
    >
      {value}
    </button>
  );
}

export { Square };
