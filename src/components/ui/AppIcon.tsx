'use client';

import React from 'react';

// ─── Outline icons (only those actually used in the project) ───────────────
import { HeartIcon } from '@heroicons/react/24/outline';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { ScaleIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import { FlagIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// ─── Social icons (Fallback to local SVGs to avoid lucide-react resolution issues) ─────────────
import { Facebook, Twitter, Instagram } from './SocialIcons';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string;
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

// Static lookup — avoids barrel imports that pull in hundreds of SVG modules
const ICON_MAP: Record<string, React.ComponentType<any>> = {
    HeartIcon,
    MegaphoneIcon,
    UserGroupIcon,
    BuildingOfficeIcon,
    AcademicCapIcon,
    ScaleIcon,
    ArrowPathIcon,
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
    UserIcon,
    ClockIcon,
    ShieldCheckIcon,
    DocumentCheckIcon,
    UsersIcon,
    GlobeAltIcon,
    SunIcon,
    BoltIcon,
    StarIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon,
    ChartBarIcon,
    FlagIcon,
    SparklesIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    // Social icons
    Facebook,
    Twitter,
    Instagram,
};

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    // variant='solid' not currently used; kept for future use without barrel import
    const IconComponent = ICON_MAP[name];

    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon;