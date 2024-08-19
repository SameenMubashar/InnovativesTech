'use client';
import { useState } from 'react';
import Gender from '@/components/Form/Gender';
import PersonalDetails from '@/components/Form/PersonalDetails';
import ContactDetails from '@/components/Form/ContactDetails';
import ReviewResponse from '@/components/Form/ReviewResponse';
import { countriesList } from '@/lib/CountriesList';

const MainFormComponent = () => {
  const [formStep, setFormStep] = useState(1);
  const [gender, setGender] = useState('');
  const [personalDetails, setPersonalDetails] = useState('');
  const [personalName, setPersonalName] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [personalPhoneNumber, setPersonalPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [message, setMessage] = useState('');
  const [detailsReviewConfirmation, setDetailsReviewConfirmation] =
    useState(false);

  const handleNextStep = () => setFormStep(formStep + 1);
  const handlePrevStep = () => setFormStep(formStep - 1);
  const handleGenderChange = (value) => setGender(value);

  return (
    <div className="px-[5%] py-10">
      <div className="w-full">
        <h2 className="text-blueMain text-4xl font-bold text-center">
          Give Us Your Personal Details:
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between mt-6">
          <div className="w-full sm:w-[30%] md:w-[25%] bg-slate-200 flex flex-col gap-6 p-8">
            {[
              'Gender',
              'Personal Details',
              'Contact Details',
              'Review Details',
            ].map((stepName, index) => (
              <div
                key={index}
                className={`flex flex-row gap-4 items-center ${
                  formStep === index + 1 ? '' : 'hidden sm:flex'
                }`}
              >
                <div
                  className={`flex w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full ${
                    formStep === index + 1
                      ? 'bg-blueMain text-slate-200'
                      : 'bg-white text-blueMain'
                  }`}
                >
                  <p className="text-2xl font-bold m-auto">{index + 1}</p>
                </div>
                <p className="text-xl font-bold">{stepName}</p>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[65%] md:w-[72%] border-0 sm:border border-slate-300 p-0 sm:p-8">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex px-4 py-2 bg-blueMain">
                <p className="text-xl text-slate-200 font-bold m-auto">
                  {formStep} / 4
                </p>
              </div>
              <p className="text-sm mr-0 sm:mr-8 text-blueMain">
                All Fields Are Required
              </p>
            </div>
            {formStep === 1 && (
              <Gender
                gender={gender}
                handleGenderChange={handleGenderChange}
                handleNextStep={handleNextStep}
              />
            )}
            {formStep === 2 && (
              <PersonalDetails
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                handlePrevStep={handlePrevStep}
                handleNextStep={handleNextStep}
              />
            )}
            {formStep === 3 && (
              <ContactDetails
                personalName={personalName}
                personalEmail={personalEmail}
                personalPhoneNumber={personalPhoneNumber}
                nationality={nationality}
                message={message}
                countriesList={countriesList}
                setPersonalName={setPersonalName}
                setPersonalEmail={setPersonalEmail}
                setPersonalPhoneNumber={setPersonalPhoneNumber}
                setNationality={setNationality}
                setMessage={setMessage}
                handlePrevStep={handlePrevStep}
                handleNextStep={handleNextStep}
              />
            )}
            {formStep === 4 && (
              <ReviewResponse
                gender={gender}
                personalDetails={personalDetails}
                personalName={personalName}
                personalEmail={personalEmail}
                personalPhoneNumber={personalPhoneNumber}
                nationality={nationality}
                message={message}
                detailsReviewConfirmation={detailsReviewConfirmation}
                setDetailsReviewConfirmation={setDetailsReviewConfirmation}
                handlePrevStep={handlePrevStep}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFormComponent;
