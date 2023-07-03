import { useState } from 'react';
import { Stepper, StepperControl } from '../../components/utils';

import {
  PrimerPaso,
  SegundoPaso,
  TercerPaso,
  CuartoPaso,
  QuintoPaso,
  SextoPaso,
  SeptimoPaso,
  OctavoPaso,
  Final,
} from '../../components/Conjuntas/PlaneacionStepper';

function PlaneacionConjuntas() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Primer Paso',
    'Segundo Paso',
    'Tercer Paso',
    'Cuarto Paso',
    'Quinto Paso',
    'Sexto Paso',
    'Septimo Paso',
    'Octavo Paso',
    'Completado',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PrimerPaso />;
      case 2:
        return <SegundoPaso />;
      case 3:
        return <TercerPaso />;
      case 4:
        return <CuartoPaso />;
      case 5:
        return <QuintoPaso />;
      case 6:
        return <SextoPaso />;
      case 7:
        return <SeptimoPaso />;
      case 8:
        return <OctavoPaso />;
      case 9:
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
        <h1>Planeación (Conjuntas)</h1>
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

export default PlaneacionConjuntas;
