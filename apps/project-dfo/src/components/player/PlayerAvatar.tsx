import { tv, VariantProps } from 'tailwind-variants';

const playerAvatar = tv({
  base: 'h-14 w-14 rounded border',
  variants: {
    appearance: {
      default: 'border-slate-5 bg-slate-2',
      featured: 'border-blue-5 bg-blue-2',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export type PlayerAvatarVariants = VariantProps<typeof playerAvatar>;

export type PlayerAvatarProps = PlayerAvatarVariants;

export const PlayerAvatar = ({ appearance }: PlayerAvatarProps) => {
  return <div className={playerAvatar({ appearance })} />;
};
