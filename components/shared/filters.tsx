import React from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Title } from './title'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-medium" />

      {/* Фильтры */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-medium mb-3">Цена от и до: </p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={1} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Солёные огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Солёные огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
          {
            text: 'Лук',
            value: '7',
          },
          {
            text: 'Салат',
            value: '8',
          },
          {
            text: 'Халапеньо',
            value: '9',
          },
          {
            text: 'Колбаса',
            value: '10',
          },
        ]}
      />
    </div>
  )
}
