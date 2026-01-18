'use client';

import { useState } from 'react';

interface BookingWidgetProps {
  fullWidth?: boolean;
  className?: string;
}

export default function BookingWidget({ fullWidth = false, className = '' }: BookingWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-[420px]'} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl min-h-[400px] z-10 bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900" />
            <p className="text-gray-500">Loading booking system...</p>
          </div>
        </div>
      )}
      <div
        className={`bg-white rounded-2xl overflow-hidden transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <iframe
          src="https://book.mylimobiz.com/v4/wrightchoice"
          width="100%"
          allow="geolocation"
          onLoad={() => setIsLoading(false)}
          style={{
            width: '100%',
            overflow: 'hidden',
            minHeight: fullWidth ? '1100px' : '600px',
            border: 'none',
            borderRadius: '16px',
            display: 'block',
          }}
          title="Wright Choice Limousine Booking"
        />
      </div>
    </div>
  );
}
