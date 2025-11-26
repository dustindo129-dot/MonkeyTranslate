import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditingState {
  regionId: string;
  value: string;
  onSave: () => void;
}

interface EditingContextType {
  currentEdit: EditingState | null;
  setCurrentEdit: (edit: EditingState | null) => void;
  autoSaveCurrentEdit: () => void;
}

const EditingContext = createContext<EditingContextType | undefined>(undefined);

interface EditingProviderProps {
  children: ReactNode;
}

export function EditingProvider({ children }: EditingProviderProps) {
  const [currentEdit, setCurrentEdit] = useState<EditingState | null>(null);

  const autoSaveCurrentEdit = () => {
    if (currentEdit) {
      currentEdit.onSave();
      setCurrentEdit(null);
    }
  };

  return (
    <EditingContext.Provider value={{
      currentEdit,
      setCurrentEdit,
      autoSaveCurrentEdit
    }}>
      {children}
    </EditingContext.Provider>
  );
}

export function useEditing() {
  const context = useContext(EditingContext);
  if (context === undefined) {
    throw new Error('useEditing must be used within an EditingProvider');
  }
  return context;
}
