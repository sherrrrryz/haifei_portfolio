'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { newsItems, type NewsItem, type ContentBlock } from '@/data/news';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getImageUrl } from '@/lib/utils';
import { X } from 'lucide-react';

interface NewsSectionProps {
  locale: string;
}

export default function NewsSection({ locale }: NewsSectionProps) {
  const t = useTranslations('news');
  const lang = locale as 'zh' | 'en';
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="mt-6 md:mt-0 mb-12">
      <div className="flex items-center justify-between pb-2 mb-2">
        <h2 className="text-2xl font-bold">{t('artistNews')}</h2>
      </div>

      <div className="space-y-0">
        {newsItems.map((item, index) => (
          <div key={item.id}>
            <article
              className="py-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 -mx-4 px-4"
              onClick={() => setSelectedNews(item)}
            >
              <div>
                {/* Content */}
                <div>
                  <h3 className="text-[17px] font-bold mb-2 leading-[1.4]">
                    {item.title[lang]}
                  </h3>
                  <p className="text-[13px] text-[#333] leading-[1.8] line-clamp-3">
                    {item.summary[lang]}
                  </p>
                </div>
              </div>
            </article>
            {index < newsItems.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      {/* News Detail Dialog */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-[1100px] max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="sticky top-0 bg-white z-10 p-6 pb-4 border-b">
            <DialogTitle className="text-[20px] font-bold pr-8">
              {selectedNews?.title[lang]}
            </DialogTitle>
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </DialogHeader>

          {selectedNews && (
            <div className="p-6 pt-4">
              {/* Meta info */}
              <div className="flex gap-4 text-[13px] text-muted-foreground mb-6">
                <span>{selectedNews.date}</span>
                {selectedNews.source && (
                  <>
                    <span>|</span>
                    <span>
                      {t('source')}: {selectedNews.source[lang]}
                    </span>
                  </>
                )}
              </div>

              {/* Video */}
              {selectedNews.videoUrl && (
                <div className="mb-6">
                  <video
                    src={getImageUrl(selectedNews.videoUrl)}
                    controls
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Content Blocks (text and images interspersed) */}
              {selectedNews.contentBlocks && selectedNews.contentBlocks.length > 0 ? (
                <div className="space-y-6">
                  {selectedNews.contentBlocks.map((block, idx) => (
                    <div key={idx}>
                      {block.type === 'text' && block.content && (
                        <p className="text-[15px] leading-[2] text-[#333] whitespace-pre-line">
                          {block.content[lang]}
                        </p>
                      )}
                      {block.type === 'image' && block.imageUrl && (
                        <div className="relative w-full">
                          <Image
                            src={getImageUrl(block.imageUrl)}
                            alt={`${selectedNews.title[lang]} - ${idx + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Fallback: Content */}
                  <p className="text-[15px] leading-[2] text-[#333] mb-8">
                    {selectedNews.summary[lang]}
                  </p>

                  {/* Fallback: Images */}
                  {selectedNews.images && selectedNews.images.length > 0 && (
                    <div className="space-y-4">
                      {selectedNews.images.map((img, idx) => (
                        <div key={idx} className="relative w-full">
                          <Image
                            src={getImageUrl(img)}
                            alt={`${selectedNews.title[lang]} - ${idx + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
