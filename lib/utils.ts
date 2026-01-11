import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/haifei_portfolio' : '';

export function getImageUrl(src: string): string {
  // 如果是外部 URL，直接返回
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  // 如果是本地路径，添加 basePath
  return `${basePath}${src}`;
}
