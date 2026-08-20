import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Should be the original path without extension or with .png (we will strip it)
  alt: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
}

export default function Image({ src, alt, className, width, height, priority = false, ...props }: ImageProps) {
  // if src is a complete URL or doesn't have an extension, just use it directly (e.g. for external or logo)
  if (src.includes('logo.png') || src.startsWith('http') || src.startsWith('data:')) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // @ts-expect-error React 18 type definition expects fetchPriority, but DOM expects fetchpriority
        fetchpriority={priority ? 'high' : 'auto'}
        {...props}
      />
    );
  }

  // Extract extension and base path
  const match = src.match(/\.(png|jpg|jpeg)$/i);
  const ext = match ? (match[1].toLowerCase() === 'jpeg' ? 'jpg' : match[1].toLowerCase()) : 'png';
  const basePath = src.replace(/\.(png|jpg|jpeg)$/i, '');

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${basePath}-480.avif 480w, ${basePath}-960.avif 960w, ${basePath}-1600.avif 1600w`}
        sizes="(max-width: 640px) 480px, (max-width: 1024px) 960px, 1600px"
      />
      <source
        type="image/webp"
        srcSet={`${basePath}-480.webp 480w, ${basePath}-960.webp 960w, ${basePath}-1600.webp 1600w`}
        sizes="(max-width: 640px) 480px, (max-width: 1024px) 960px, 1600px"
      />
      <img
        src={`${basePath}-960.${ext}`}
        srcSet={`${basePath}-480.${ext} 480w, ${basePath}-960.${ext} 960w, ${basePath}-1600.${ext} 1600w`}
        sizes="(max-width: 640px) 480px, (max-width: 1024px) 960px, 1600px"
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // @ts-expect-error React 18 type definition expects fetchPriority, but DOM expects fetchpriority
        fetchpriority={priority ? 'high' : 'auto'}
        {...props}
      />
    </picture>
  );
}
