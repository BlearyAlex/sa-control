import { useState } from 'react';
import Stepper from '../../components/Stepper';
import StepperControl from '../../components/StepperControl';

import PrimerPaso from './FormsStepper/PrimerPaso';
import SegundoPaso from './FormsStepper/SegundoPaso';
import Final from './FormsStepper/Final';

function NuevoInforme() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Primer Paso', 'Segundo Paso', 'Completado'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PrimerPaso />;
      case 2:
        return <SegundoPaso />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl">
      <div className="justify-center text-center mt-5 font-bold text-2xl">
        <h1>Informe</h1>
      </div>
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default NuevoInforme;
