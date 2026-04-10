import { FaMale, FaFemale } from "react-icons/fa";

export default function SeatLegend() {

  const legends = [
    {
      label: "Available",
      box: (
        <div className="w-6 h-6 border-2 border-green-500 rounded-full bg-white" />
      ),
    },
    {
      label: "Male",
      box: (
        <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white">
          <FaMale className="text-blue-500 text-lg" />
        </div>
      ),
    },
    {
      label: "Female",
      box: (
        <div className="w-6 h-6 border-2 border-pink-500 rounded-full flex items-center justify-center bg-white">
          <FaFemale className="text-pink-500 text-lg" />
        </div>
      ),
    },
    // {
    //   label: "Ladies",
    //   box: (
    //     <div className="w-8 h-8 border-2 border-pink-500 rounded-full flex items-center justify-center bg-white">
    //       <FaFemale className="text-pink-500 text-lg" />
    //     </div>
    //   ),
    // },
    {
      label: "Selected",
      box: (
        <div className="w-6 h-6 border-2 border-green-600 bg-green-100 rounded-full" />
      ),
    },
    {
      label: "Sold",
      box: (
        <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-gray-300">
          <span className="text-xs font-semibold text-gray-500">Sold</span>
        </div>
      ),
    },
    // {
    //   label: "Seater",
    //   box: (
    //     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none" className="w-8 h-8">
    //       <g clipPath="url(#clip_legend_seater)">
    //         <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#fffff"></path>
    //         <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="#9CA3AF" strokeWidth="1.5" strokeMiterlimit="10"></path>
    //       </g>
    //       <defs><clipPath id="clip_legend_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
    //     </svg>
    //   ),
    // },  
    // {
    //   label: "Sleeper",
    //   box: (
    //     <div className="w-8 h-14 border-2 border-gray-400 rounded-lg flex items-center justify-center relative bg-white">
    //       <div className="w-6 h-2 bg-gray-400 rounded-full absolute -bottom-1 mb-2"></div>
    //     </div>
    //   ),
    // },
  ];

  return (
   <div className="w-full flex justify-center px-2">

  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-6 mt-4 sm:mt-6 w-full max-w-3xl border border-gray-100">

    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10">

      {legends.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-center min-w-[50px] sm:min-w-[70px]"
        >
          {item.box}
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>

</div>
  );
}