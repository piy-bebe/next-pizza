import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';
import { it } from 'node:test';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceHolder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceHolder = 'Поиск...',
  onChange,
  defaultValue,
  className,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input placeholder={searchInputPlaceHolder} className="bg-gray-50 border-none" />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={() => onCheckedChange(item.value)}
            checked={selected.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdorment={item.endAdornment}
        ))}
      </div>
    </div>
  );
};
