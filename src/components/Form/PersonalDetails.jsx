'use client';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PersonalDetails = ({
  personalDetails,
  setPersonalDetails,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div id="form-step-2" className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="personalDetails" className="text-lg font-semibold">
            Personal Details
          </label>
          <input
            type="text"
            name="personalDetails"
            value={personalDetails}
            onChange={(e) => setPersonalDetails(e.target.value)}
            placeholder="Enter Your Full Name Here ..."
            className="py-2 px-4 text-lg border border-slate-400"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-row gap-10 items-center">
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
          disabled={personalDetails === ''}
          className={`w-[130px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white ${
            personalDetails === '' ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <p>Next</p>
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
