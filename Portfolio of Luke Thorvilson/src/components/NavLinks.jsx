export default function NavLinks({ children }) {
  return (
    <ul className="text-white my-auto mr-10 flex w-[40%] justify-between">
      {children}
    </ul>
  );
}
