import classNames from 'classnames';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export type ArticleProps = Pick<ComponentProps<'button'>, 'className'> &
  Pick<LinkProps, 'href'> & {
    description?: string;
    thumbnail?: ImageProps['src'];
    title?: string;
  };

export const Article = ({ className, description, href = '/', thumbnail, title }: ArticleProps) => {
  return (
    <article className={classNames('flex flex-col gap-3', className)}>
      {thumbnail && (
        <Link
          className='relative min-h-[120px] overflow-hidden rounded border border-slate-4 outline-none focus-visible:ring-2 focus-visible:ring-blue-7'
          href={href}
        >
          <Image alt={`Thumbnail for ${title}`} fill src={thumbnail} style={{ objectFit: 'cover' }} />
        </Link>
      )}

      {(description || title) && (
        <div className='flex flex-col items-start gap-1'>
          {title && (
            <Link
              className='outline-none hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-blue-7'
              href={href}
            >
              <h2 className='text-base font-semibold text-slate-12'>{title}</h2>
            </Link>
          )}

          {description && <p className='text-sm text-slate-11'>{description}</p>}
        </div>
      )}
    </article>
  );
};
