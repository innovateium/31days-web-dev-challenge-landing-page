/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export interface HugeIconProps extends React.SVGProps<SVGSVGElement> {
  icon: any;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

export const HugeIcon = ({ icon, size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }: HugeIconProps) => {
  const Icon = icon;
  return <HugeiconsIcon icon={Icon} size={size} color={color} strokeWidth={strokeWidth} className={props.className} />;
};
