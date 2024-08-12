function Grid({ gap, children }) {
  const gridGapClass = `gap-${gap}`;
  return (
    <div className={`grid grid-cols-5 ${gridGapClass}`}>{children}</div>
  );
}

export default Grid;
