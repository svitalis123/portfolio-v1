import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

/** Free-text chips (tags, categories): type a value, press Enter to add it. */
const TokenListField = ({ id, label, values, onAdd, onRemove }) => {
  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    // Enter inside this input must add a chip, never submit the surrounding form.
    event.preventDefault();

    const value = event.target.value.trim();
    if (!value || values.includes(value)) return;

    onAdd(value);
    event.target.value = '';
  };

  return (
    <div className="flex-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onKeyDown={handleKeyDown} placeholder={`Enter ${label.toLowerCase()} and press Enter`} />

      <ul className="flex flex-wrap gap-2 mt-2 list-none p-0">
        {values.map((value, index) => (
          <li
            key={value}
            className="bg-transparent text-white px-2 py-1 rounded-full text-sm flex items-center"
          >
            {value}
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="ml-1 focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label={`Remove ${value}`}
            >
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenListField;
