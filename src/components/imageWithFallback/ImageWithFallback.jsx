'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { checkPexelsString } from '@/utils/helperFunctions';

export default function ImageWithFallback({ alt, src, className, ...props }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={checkPexelsString(src) ? src : '/defaultImage.jpeg'}
      {...props}
      className={className}
      width={props.width}
      height={props.height}
    />
  );
}
