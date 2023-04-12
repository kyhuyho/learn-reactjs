import useClickOutSide from "../hooks/useClickOutSide";

const DropdownWithHook = () => {
  const { nodeRef, show, setShow } = useClickOutSide();
  return (
    <div className="p-5">
      <div className="relative w-full max-w-[500px]" ref={nodeRef}>
        <div
          className="p-5 border border-gray-500 rounded-lg w-full cursor-pointer"
          onClick={() => setShow((showDropdown) => !showDropdown)}
        >
          Selected
        </div>
        {show && (
          <div className="border border-gray-500 rounded-lg absolute top-full left-0 w-full bg-white">
            <div className="p-5 cursor-pointer">JavaScript</div>
            <div className="p-5 cursor-pointer">ReactJS</div>
            <div className="p-5 cursor-pointer">VueJS</div>
            <div className="p-5 cursor-pointer">AngularJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownWithHook;
