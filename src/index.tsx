import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IonSpinner } from '@ionic/react';

const container = document.getElementById('root');
const root = createRoot(container!);

const Application = lazy(() => import('./App'));

const SkeletonLoading = () => {
  return (
    <>
      <IonSpinner style={{top: "45vh", left:"45vw"}}></IonSpinner>
    </>
   );
};

root.render(
  <React.StrictMode>
    <Suspense fallback={<SkeletonLoading/>}>
      <Application />
    </Suspense>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
