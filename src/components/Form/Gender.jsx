'use client';
import { FaAngleRight } from 'react-icons/fa';

const Gender = ({ gender, handleGenderChange, handleNextStep }) => {
  return (
    <div id="form-step-1" className="flex flex-col">
      <div className="flex flex-col gap-1">
        <label htmlFor="gender" className="text-lg font-semibold">
          Select Your Gender:
        </label>
        <div className="flex flex-row gap-[12px] items-center mt-2">
          <input
            type="checkbox"
            name="gender"
            id="male"
            className="appearance-none shrink-0 w-6 h-6 text-black bg-none border border-slate-400 checked:bg-blueMain cursor-pointer"
            checked={gender === 'male'}
            onChange={() => handleGenderChange('male')}
          />
          <label htmlFor="male" className="text-lg cursor-pointer">
            Male
          </label>
        </div>
        <div className="flex flex-row gap-[12px] items-center mt-2">
          <input
            type="checkbox"
            name="gender"
            id="female"
            className="appearance-none shrink-0 w-6 h-6 text-black bg-none border border-slate-400 checked:bg-blueMain cursor-pointer"
            checked={gender === 'female'}
            onChange={() => handleGenderChange('female')}
          />
          <label htmlFor="female" className="text-lg cursor-pointer">
            Female
          </label>
        </div>
      </div>
      <div className="mt-10 items-center">
        <button
          type="button"
          onClick={handleNextStep}
          disabled={gender === ''}
          className={`w-[130px] flex flex-row justify-center gap-2 items-center py-2 px-4 bg-blueMain border border-blueMain hover:bg-transparent hover:text-blueMain transitions duration-200 text-white ${
            gender === '' ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <p>Next</p>
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Gender;
