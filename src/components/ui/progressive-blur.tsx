'use client'
import { cn } from '@/lib/utils'

type ProgressiveBlurProps = {
  className?: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  direction = 'right',
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradientDirection = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction]

  return (
    <div
      className={cn('relative', className)}
      style={{
        maskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
      }}
    >
      <div
        className="size-full"
        style={{
          backdropFilter: `blur(${blurIntensity * 4}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity * 4}px)`,
        }}
      />
    </div>
  )
}
