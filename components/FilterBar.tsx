'use client';

import { useTranslations } from 'next-intl';
import type { ArtworkCategory } from '@/lib/types';

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
  ];

  return (
    <div className="flex flex-wrap gap-6 md:gap-8 px-5 md:px-10 py-5 border-b border-[#eee]">
      {/* Category Filter */}
      <div className="flex items-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`text-[13px] font-bold uppercase transition-colors duration-300 ${
              selectedCategory === cat.value
                ? 'text-black'
                : 'text-[#999] hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Year Filter */}
      <div className="flex items-center gap-2">
        <select
          value={selectedYear ?? ''}
          onChange={(e) => onYearChange(e.target.value ? Number(e.target.value) : null)}
          className="text-[13px] font-bold uppercase bg-transparent border border-[#ddd] px-3 py-2 cursor-pointer focus:outline-none focus:border-black transition-colors"
        >
          <option value="">{t('allYears')}</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
