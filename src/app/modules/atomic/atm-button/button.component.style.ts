import { tv, VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'h-xxl w-xxxl rounded-sm px-sm py-sm font-md text-white',
  variants: {
    variant: {
      primary:
        'bg-brand-primary-dark hover:bg-brand-primary-xdark focus:border-accent-light active:bg-feedback-success-dark',
      secondary:
        'bg-gray-xlight text-brand-primary-dark border border-md border-brand-primary-dark hover:border-brand-primary-xdark hover:text-brand-primary-xdark focus:border-lg active:border-brand-primary-xdark',
      primaryDestructive:
        'bg-feedback-error-medium hover:bg-feedback-error-dark focus:border-feedback-error-dark active:bg-feedback-error-dark',
      secondaryDestructive:
        'text-feedback-error-medium border border-sm border-feedback-error-medium hover:border-feedback-error-dark hover:text-feedback-error-dark focus:border-lg active:border-feedback-error-dark',
      cta: 'bg-gray-xdark hover:bg-gray-dark focus:border-gray-xdark active:bg-gray-xxdark',
      link: 'text-brand-primary-dark hover:underline focus:border-brand-primary-dark active:text-brand-accent-blue',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
});

export type ButtonVariants = VariantProps<typeof button>;
