import { cn } from '@/lib/utils';

interface LogoAnimatedProps {
    className?: string;
}

export default function LogoAnimated({ className }: LogoAnimatedProps) {
    return (
        <div className={cn('relative', className)}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow blur-sm opacity-75" />
            <div className="relative flex items-center justify-center h-full w-full rounded-full glass-card-strong">
                <span className="text-2xl font-display font-bold text-gradient">MA</span>
            </div>
        </div>
    );
}
