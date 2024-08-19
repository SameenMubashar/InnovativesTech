import { montserrat } from '@/app/fonts';

const ReviewDetails = ({
  gender,
  personalDetails,
  personalName,
  personalEmail,
  personalPhoneNumber,
  nationality,
  message,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-white text-lg sm:text-xl font-bold text-center bg-blueMain overflow-y-hidden">
          <th className={`${montserrat.className} w-[50%] py-2 px-4`}>Label</th>
          <th className={`${montserrat.className} w-[50%] py-2 px-4`}>
            Details
          </th>
        </tr>
      </thead>
      <tbody className={`${montserrat.className}`}>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Gender</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {gender}
          </td>
        </tr>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Personal Details</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {personalDetails}
          </td>
        </tr>

        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Your Name</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {personalName}
          </td>
        </tr>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Your Email</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {personalEmail}
          </td>
        </tr>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Your Phone Number</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {personalPhoneNumber}
          </td>
        </tr>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300  overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 overflow-y-hidden break-words">
            <b>Your Nationality</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 overflow-y-hidden break-words">
            {nationality}
          </td>
        </tr>
        <tr className="text-md sm:text-lg border-b border-x border-b-slate-300 border-x-slate-300 rounded-b-lg overflow-y-hidden">
          <td className="w-[50%] py-2 px-4 rounded-bl-lg overflow-y-hidden break-words">
            <b>Your Message</b>
          </td>
          <td className="business-detail w-[50%] py-2 px-4 border-l border-l-slate-300 rounded-br-lg overflow-y-hidden break-words">
            {message}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReviewDetails;
