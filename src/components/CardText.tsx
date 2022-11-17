import * as React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './CardText.css';

type Props = {
  title: string, 
  subtitle: string,
  color: string,
  children?: React.ReactNode
}

const CardText: React.FC<Props> = ({children, title, subtitle, color}) => {
  return (
    <IonCard color={color}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {children}
      </IonCardContent>
    </IonCard>
  );
}
export default CardText;