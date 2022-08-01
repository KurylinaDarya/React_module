import { useCallback, useState } from "react";

export const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const handleFormChange = useCallback((event) => {
    const { value, name } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);
  const handleReset = useCallback(() => {
    setFormData(initialData);
  }, []);
  return [formData, handleFormChange, handleReset];
};
