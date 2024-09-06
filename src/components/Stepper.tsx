interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6">
      {/* Stepper Circles and Connectors */}
      {steps.map((step, idx) => (
        <div key={step} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-white text-lg sm:text-xl font-bold ${currentStep >= step ? 'bg-blue-500' : 'bg-gray-300'
              }`}
          >
            {currentStep > step ? '✓' : step}
          </div>

          {/* Step Connector */}
          {idx < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-1 mx-1 sm:mx-2 ${currentStep > step ? 'bg-blue-500' : 'bg-gray-300'
                }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;

