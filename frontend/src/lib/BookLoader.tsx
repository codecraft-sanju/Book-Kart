"use client";

export default function BookLoader() {
  return (
    <div className="z-50 fixed inset-0 flex flex-col justify-center items-center bg-gray-300 bg-opacity-80 backdrop-blur-md">
      <div className="flex flex-col items-center">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  className="w-24 h-24"
>
  <linearGradient id="a12">
    <stop offset="0" stopColor="#FF156D" stopOpacity="0"></stop>
    <stop offset="1" stopColor="#FF156D"></stop>
  </linearGradient>
  <circle
    fill="none"
    stroke="url(#a12)"
    strokeWidth="15"
    strokeLinecap="round"
    strokeDasharray="0 44 0 44 0 44 0 44 0 360"
    cx="100"
    cy="100"
    r="70"
    style={{ transformOrigin: 'center' }} 
  >
    <animateTransform
      type="rotate"
      attributeName="transform"
      calcMode="discrete"
      dur="2"
      values="360;324;288;252;216;180;144;108;72;36"
      repeatCount="indefinite"
    ></animateTransform>
  </circle>
</svg>


        {/* Loading Text */}
        <p className="mt-6 font-semibold text-gray-700 text-xl">
          Loading Books...
        </p>
        <p className="mt-2 text-gray-500 text-sm">
          Your next favorite read is on its way!
        </p>
      </div>
    </div>
  );
}