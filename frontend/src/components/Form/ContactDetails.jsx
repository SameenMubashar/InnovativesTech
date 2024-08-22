'use client';
import { FaAngleLeft, FaRegEye } from 'react-icons/fa';

const ContactDetails = ({
  personalName,
  setPersonalName,
  setPersonalEmail,
  personalEmail,
  personalPhoneNumber,
  setPersonalPhoneNumber,
  nationality,
  setNationality,
  message,
  setMessage,
  countriesList,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div id="form-step-3" className="flex flex-col">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Enter Your Contact Details:</p>
        <input
          type="text"
          name="personal-name"
          value={personalName}
          onChange={(e) => setPersonalName(e.target.value)}
          placeholder="Enter Your Name"
          className="py-2 px-4 text-lg border border-slate-400"
        />
        <input
          type="email"
          name="personal-email"
          value={personalEmail}
          onChange={(e) => setPersonalEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="py-2 px-4 text-lg border border-slate-400"
        />
        <input
          type="tel"
          name="personal-phone-number"
          value={personalPhoneNumber}
          onChange={(e) => setPersonalPhoneNumber(e.target.value)}
          placeholder="Enter Your Phone Number (with country code)"
          className="py-2 px-4 text-lg border border-slate-400"
        />
        <select
          name="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          className="py-2 px-4 text-lg border border-slate-400"
        >
          <option value="">Select a nationality</option>
          {countriesList.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Write your message (if any)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          className="py-2 px-4 text-lg border border-slate-400"
        />
      </div>
      <div className="mt-10 flex flex-row justify-between gap-10 items-center">
        <button
          type="button"
          onClick={handlePrevStep}
          className={`w-[130px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white`}
        >
          <FaAngleLeft size={20} />
          <p>Previous</p>
        </button>

        <button
          type="button"
          onClick={handleNextStep}
          disabled={
            personalEmail === '' ||
            personalName === '' ||
            personalPhoneNumber === '' ||
            nationality === ''
          }
          className={`w-[2000px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white ${
            personalEmail === '' ||
            personalName === '' ||
            personalPhoneNumber === '' ||
            nationality === ''
              ? 'opacity-40 cursor-not-allowed'
              : ''
          }`}
        >
          <p>Review Response</p>
          <FaRegEye size={20} />
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
