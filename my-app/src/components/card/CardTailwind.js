import React from "react";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  } `;
  return (
    <div className="relative">
      <div className="w-full h-[400px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </div>
      <div className="absolute w-[calc(100%-36px)] left-1/2 bottom-0 bg-white rounded-2xl z-20 p-5 shadow-md -translate-x-1/2 translate-y-1/2">
        <div className="flex items-center justify-between mb-[30px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full"
              src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-4">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.94668e-08 5.40047C-0.000248434 3.95081 0.582385 2.56192 1.61681 1.5463C2.65124 0.530677 4.05058 -0.0263762 5.5 0.000469468C7.21732 -0.00865054 8.85599 0.719644 10 2.00047C11.144 0.719644 12.7827 -0.00865054 14.5 0.000469468C15.9494 -0.0263762 17.3488 0.530677 18.3832 1.5463C19.4176 2.56192 20.0002 3.95081 20 5.40047C20 10.7565 13.621 14.8005 10 18.0005C6.387 14.7735 7.94668e-08 10.7605 7.94668e-08 5.40047Z"
                fill="#FC2872"
              />
            </svg>
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-medium ${props.fontSize || "text-lg"}`}>
            Cosmic Perspective
          </h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
