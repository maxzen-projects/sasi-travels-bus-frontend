import { FaMale, FaFemale } from "react-icons/fa";

/* =========================
   SEATER ICONS
========================= */
export const AvailableSeaterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip_available_seater)">
      <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#fffff"></path>
      <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
    </g>
    <defs><clipPath id="clip_available_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
  </svg>
);

const MaleBookedSeaterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip_male_seater)">
      <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#fffff"></path>
      <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="#325DE9" strokeWidth="1.5" strokeMiterlimit="10"></path>
      <g opacity="0.7">
        <path d="M14.2501 8.12509H11.7501C11.0626 8.12509 10.5001 8.68759 10.5001 9.37509V13.1251H11.7501V17.5001H14.2501V13.1251H15.5001V9.37509C15.5001 8.68759 14.9376 8.12509 14.2501 8.12509Z" fill="#325DE9"></path>
        <path d="M13.0001 7.50009C13.6904 7.50009 14.2501 6.94045 14.2501 6.25009C14.2501 5.55974 13.6904 5.00009 13.0001 5.00009C12.3097 5.00009 11.7501 5.55974 11.7501 6.25009C11.7501 6.94045 12.3097 7.50009 13.0001 7.50009Z" fill="#325DE9"></path>
      </g>
    </g>
    <defs><clipPath id="clip_male_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
  </svg>
);

const FemaleBookedSeaterIcon = ({ className }) => (
  <div className={`relative ${className} flex justify-center items-center text-pink-500`}>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
      <g clipPath="url(#clip_female_seater)">
        <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#fff"></path>
        <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
      </g>
      <defs><clipPath id="clip_female_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
    </svg>
    <FaFemale className="z-10 h-5 w-5 text-xs pb-1" />
  </div>
);

const LadiesAvailableSeaterIcon = ({ className }) => (
  <div className={`relative ${className} flex justify-center items-center text-pink-500`}>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
      <g clipPath="url(#clip_ladies_available_seater)">
        <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#fff"></path>
        <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
      </g>
      <defs><clipPath id="clip_ladies_available_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
    </svg>
    <FaFemale className="z-10 h-5 w-5 text-xs pb-1" />
  </div>
);

const SoldSeaterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip_sold_seater)">
      <path opacity="1" d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#F3F4F6"></path>
      <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="#D1D5DB" strokeWidth="1.5" strokeMiterlimit="10"></path>
    </g>
    <defs><clipPath id="clip_sold_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
  </svg>
);

const SelectedSeaterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip_selected_seater)">
      <path d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#10B981"></path>
      <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"></path>
    </g>
    <defs><clipPath id="clip_selected_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
  </svg>
);

const LadiesSelectedSeaterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip_ladies_selected_seater)">
      <path d="M22.9937 9.51864H23.1562V4.72489C23.1562 2.77489 21.6124 1.23114 19.6624 1.23114H6.3374C4.3874 1.23114 2.84365 2.77489 2.84365 4.72489V9.51864C1.6249 9.59989 0.649902 10.5749 0.649902 11.7936V22.2749C0.649902 24.2249 2.19365 25.7686 4.14365 25.7686H21.7749C23.7249 25.7686 25.2687 24.2249 25.2687 22.2749V11.8749C25.3499 10.5749 24.2937 9.51864 22.9937 9.51864Z" fill="#10B981"></path>
      <path d="M2.84395 9.51877V4.40002C2.84395 2.61252 4.30644 1.15002 6.09394 1.15002H19.9064C21.6939 1.15002 23.1564 2.61252 23.1564 4.40002V9.51877M22.9939 9.51877H22.2627C21.6127 9.51877 21.1252 10.0875 21.1252 10.6563V17.725C21.1252 19.675 19.5814 21.2188 17.6314 21.2188H8.45019C6.50019 21.2188 4.95644 19.675 4.95644 17.725V10.6563C4.95644 10.0063 4.46894 9.51877 3.81894 9.51877H3.00645C1.70645 9.51877 0.731445 10.575 0.731445 11.7938V22.5188C0.731445 24.3063 2.19395 25.7688 3.98145 25.7688H22.1002C23.8877 25.7688 25.3502 24.3063 25.3502 22.5188V11.875C25.3502 10.575 24.2939 9.51877 22.9939 9.51877Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"></path>
    </g>
    <defs><clipPath id="clip_ladies_selected_seater"><rect width="26" height="26" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>
  </svg>
);

export default function Seat({ seat, onSeatClick }) {

  /* =========================
     BORDER STYLE
  ========================= */

  const getSeatStyle = () => {

    if (seat.status === "sold")
      return "bg-gray-200 border-gray-300 cursor-not-allowed";

    if (seat.status === "selected")
      return "bg-green-300 border-2 border-white";

    if (seat.gender === "male")
      return "bg-white border-2 border-blue-500 hover:bg-blue-50";

    if (seat.gender === "female")
      return "bg-white border-2 border-pink-500 hover:bg-pink-50";

    if (seat.ladiesOnly)
      return "bg-white border-2 border-pink-500 hover:bg-pink-50";

    return "bg-white border-2 border-green-500 hover:bg-green-50";
  };

  /* =========================
     ICON COLOR
  ========================= */

  const getIconColor = () => {
    const { status, gender, ladiesOnly } = seat;

    if (status === "sold") {
      return "text-gray-300";
    }

    if (ladiesOnly) {
      return "text-pink-500";
    }

    if (gender === "female") {
      return "text-pink-500";
    }

    if (gender === "male") {
      return "text-blue-500";
    }

    return "text-green-600";
  };
  /* =========================
     CUSHION COLOR
  ========================= */

  const getCushionColor = () => {

    if (seat.status === "selected")
      return "bg-green-500";

    if (seat.gender === "male")
      return "bg-blue-400";

    if (seat.gender === "female")
      return "bg-pink-500";

    if (seat.ladiesOnly)
      return "bg-pink-500";

    return "bg-green-400";
  };

  const isSleeper = seat.type === "sleeper";

  /* =========================
     SLEEPER SEAT
  ========================= */

  if (isSleeper) {
    return (

      <div className="flex flex-col items-center gap-1 w-10 sm:w-10 md:w-12">
        <button
          title={`Seat ${seat.id}`}
          disabled={seat.status === "sold"}
          onClick={() => onSeatClick(seat.id)}
          className={`w-10 h-16 sm:w-10 sm:h-18 md:w-10 md:h-20 rounded-lg flex items-center justify-center relative transition ${getSeatStyle()}`}        >

          {seat.status !== "sold" && (

            <div className="flex items-center justify-center">
              {(() => {
                if (seat.gender === 'male') return <FaMale className={`text-2xl ${getIconColor()}`} />
                if (seat.gender === 'female') return <FaFemale className={`text-2xl ${getIconColor()}`} />
                if (seat.ladiesOnly)
                  return <FaFemale className={`text-2xl ${getIconColor()}`} />;
                return null
              })()}
              <div
                className={`absolute -bottom-1 w-6 h-2 rounded-full mb-2 ${getCushionColor()}`}
              ></div>
            </div>

          )}

        </button>

        <span className={`text-xs text-start text-left font-semibold ${seat.status === 'sold' ? 'text-gray-400' : 'text-gray-700'}`}>
          {seat.status === "sold" ? "Sold" : `₹ ${seat.price}`}
        </span>

      </div>
    );
  }

  /* =========================
     SEATER SEAT
  ========================= */

  return (

    <div className="flex flex-col items-center gap-1 w-8 sm:w-10 md:w-12">

      <button
        title={`Seat ${seat.id}`}
        disabled={seat.status === "sold"}
        onClick={() => onSeatClick(seat.id)}
        className="flex items-center justify-center disabled:cursor-not-allowed w-8 h-8"
      >
        {(() => {
          if (seat.status === "sold") {
            return <SoldSeaterIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
          }
          if (seat.status === "selected") {
            if (seat.ladiesOnly) {
              return <LadiesSelectedSeaterIcon className="w-8 h-8" />;
            }
            return <SelectedSeaterIcon className="w-8 h-8" />;
          }
          if (seat.gender === "male") {
            return <MaleBookedSeaterIcon className="w-8 h-8" />;
          }
          if (seat.gender === "female") {
            return <FemaleBookedSeaterIcon className="w-8 h-8" />;
          }
          if (seat.ladiesOnly) {
            return <LadiesAvailableSeaterIcon className="w-8 h-8" />;
          }
          return <AvailableSeaterIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500" />;
        })()}
      </button>

      <span className={`text-xs font-semibold ${seat.status === 'sold' ? 'text-gray-400' : 'text-gray-700'}`}>
        {seat.status === "sold" ? "Sold" : `₹ ${seat.price}`}
      </span>

    </div>
  );
}