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
  NovenoPaso,
  DecimoPaso,
  OnceavoPaso,
  DoceavoPaso,
  TreceavoPaso,
  CatorceavoPaso,
  QuinceavoPaso,
  Final,
} from '../../components/Conjuntas/EjecucionSteppers';

function EjecucionConjuntas() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Paso Uno',
    'Paso Dos',
    'Paso Tres',
    'Paso Cuarto',
    'Paso Cinco',
    'Paso Seis',
    'Paso Siete',
    'Paso Ocho',
    'Paso Nueve',
    'Paso Diez',
    'Paso Once',
    'Paso Doce',
    'Paso Trece',
    'Paso Catorce',
    'Paso Quince',
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
        return <NovenoPaso />;
      case 10:
        return <DecimoPaso />;
      case 11:
        return <OnceavoPaso />;
      case 12:
        return <DoceavoPaso />;
      case 13:
        return <TreceavoPaso />;
      case 14:
        return <CatorceavoPaso />;
      case 15:
        return <QuinceavoPaso />;
      case 16:
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
        <h1>Ejecución (Conjuntas)</h1>
      </div>
      {/* Stepper */}
      <div className="horizontal container mt-5">
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

export default EjecucionConjuntas;
