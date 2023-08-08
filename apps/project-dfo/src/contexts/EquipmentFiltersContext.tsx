import { createContext, ReactNode, useContext } from 'react';

import { EquipmentType } from '~/constants/equipmentType';

export type EquipmentFilter = {
  id: EquipmentType;
  value: string;
};

export const EquipmentFiltersContext = createContext<EquipmentFilter[]>(null);

export type FiltersContextProviderProps = {
  children: ReactNode;
  defaultFilters: EquipmentFilter[];
};

export const FiltersContextProvider = ({ children, defaultFilters }: FiltersContextProviderProps) => {
  return (
    <EquipmentFiltersContext.Provider
      value={{
        ...defaultFilters,
      }}
    >
      {children}
    </EquipmentFiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const filtersContext = useContext(EquipmentFiltersContext);

  return { filtersContext };
};
