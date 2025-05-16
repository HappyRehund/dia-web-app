"use client"
import React, { useContext, createContext } from 'react';

type DietContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const DietContext = createContext<DietContextType>([false, () => {}]);

export function useDietContext() {
    return useContext(DietContext);
}