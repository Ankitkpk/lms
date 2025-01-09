import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'
const FormControls = ({ formControls = [], formData, setFormData }) => {
  
  function renderComponentByType(controlItem) {
    const { name, placeholder, type, ComponentType } = controlItem;
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    };

    switch (ComponentType) {
      case 'input':
        return (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name] || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2"
          />
        );

      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={formData[name] || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2"
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={formData[name] || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {/* Example options */}
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        );

      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
};

export default FormControls;
