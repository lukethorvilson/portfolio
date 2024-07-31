function Grid({ cols, gap, children }) {
  return (
    <div className={`m-auto grid grid-cols-${cols} gap-${gap}`}>{children}</div>
  );
}

export default Grid;
