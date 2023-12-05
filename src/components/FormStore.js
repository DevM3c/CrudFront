import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    nome: '',
    email: '',
    senha: '',
  },
  updateFormData: (field, value) =>
    set((state) => ({ formData: { ...state.formData, [field]: value } })),
  resetFormData: () => set({ formData: { nome: '', email: '', senha: '' } }),
}));

export default useFormStore;