'use client';

import { useTranslations } from 'next-intl';
import type { ArtworkCategory } from '@/lib/types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  years: number[];
  selectedYear: number | null;
  selectedCategory: ArtworkCategory;
  onYearChange: (year: number | null) => void;
  onCategoryChange: (category: ArtworkCategory) => void;
}

export default function FilterBar({
  years,
  selectedYear,
  selectedCategory,
  onYearChange,
  onCategoryChange,
}: FilterBarProps) {
  const t = useTranslations('works');

  const categories: { value: ArtworkCategory; label: string }[] = [
    { value: 'all', label: t('all') },
    { value: 'watercolor', label: t('watercolor') },
    { value: 'oil', label: t('oil') },
    { value: 'mural', label: t('mural') },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-2 pb-[18px]">
      {/* Category Filter - ToggleGroup */}
      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => value && onCategoryChange(value as ArtworkCategory)}
        className="gap-4"
      >
        {categories.map((cat) => (
          <ToggleGroupItem
            key={cat.value}
            value={cat.value}
            className={cn(
              'text-base md:text-2xl font-bold uppercase',
              'text-muted-foreground',
              'transition-colors duration-300',
              'hover:bg-transparent hover:text-foreground',
              'data-[state=on]:bg-transparent data-[state=on]:text-foreground',
              'px-0 h-auto rounded-none border-none'
            )}
          >
            {cat.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* Year Filter - Select */}
      <Select
        value={selectedYear?.toString() ?? ''}
        onValueChange={(value) => onYearChange(value === 'all' ? null : Number(value))}
      >
        <SelectTrigger
          className={cn(
            'w-[140px] md:w-[160px] text-sm md:text-lg font-normal uppercase',
            'border-muted-foreground/30 rounded-none',
            'focus:ring-0 focus:ring-offset-0 focus:border-foreground',
            'transition-colors duration-300'
          )}
        >
          <SelectValue placeholder={t('allYears')} />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          <SelectItem value="all" className="text-lg font-normal uppercase">
            {t('allYears')}
          </SelectItem>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()} className="text-lg">
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
