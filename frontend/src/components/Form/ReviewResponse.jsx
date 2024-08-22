'use client';
import { FaAngleLeft, FaCheck } from 'react-icons/fa';
import ReviewDetails from './ReviewDetails';

const ReviewResponse = ({
  gender,
  personalDetails,
  personalName,
  personalEmail,
  personalPhoneNumber,
  nationality,
  message,
  detailsReviewConfirmation,
  setDetailsReviewConfirmation,
  handlePrevStep,
}) => {
  return (
    <div id="form-step-4" className="flex flex-col">
      <div className="flex flex-col gap-2 text-lg">
        <h4 className="text-blueMain text-3xl font-semibold text-center mb-4">
          Review Your Entered Details
        </h4>
        <ReviewDetails
          gender={gender}
          personalDetails={personalDetails}
          personalName={personalName}
          personalEmail={personalEmail}
          personalPhoneNumber={personalPhoneNumber}
          nationality={nationality}
          message={message}
        />
      </div>
      <button
        type="button"
        onClick={handlePrevStep}
        className={`mt-10 w-[130px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white`}
      >
        <FaAngleLeft size={20} />
        <p>Go Back</p>
      </button>
      <div className="mt-10 flex flex-col gap-4">
        <input
          type="checkbox"
          id="review-confirmation"
          checked={detailsReviewConfirmation}
          onChange={() =>
            setDetailsReviewConfirmation(!detailsReviewConfirmation)
          }
          className="appearance-none w-6 h-6 border border-slate-400 checked:bg-blueMain cursor-pointer"
        />
        <label htmlFor="review-confirmation" className="text-lg">
          I confirm that the details are accurate
        </label>
        <button
          type="submit"
          className={`w-[130px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white ${
            !detailsReviewConfirmation ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          disabled={!detailsReviewConfirmation}
        >
          <p>Submit</p>
          <FaCheck size={20} />
        </button>
      </div>
    </div>
  );
};

export default ReviewResponse;
