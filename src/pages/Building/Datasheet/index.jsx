import React from 'react';
import { VisitModalProvider } from './context';
import DataSheet from './datasheet';

export default function Datasheet({ property }) {
    return (
        <VisitModalProvider>
            <DataSheet property={property} />
        </VisitModalProvider>
    )
}
