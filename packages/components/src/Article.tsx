import classNames from "classnames";
import Image, { type ImageProps } from "next/image";
import Link, { type LinkProps } from "next/link";
import { type ComponentProps } from "react";

export type ArticleProps = Pick<ComponentProps<"button">, "className"> &
  Pick<LinkProps, "href"> & {
    description?: string;
    thumbnail?: ImageProps["src"];
    title?: string;
  };

export const Article = ({
  className,
  description,
  href = "/",
  thumbnail,
  title,
}: ArticleProps) => {
  return (
    <article className={classNames("flex flex-col gap-3", className)}>
      {thumbnail && (
        <Link
          className="border-slate-4 focus-visible:ring-blue-7 relative min-h-[120px] overflow-hidden rounded border outline-none focus-visible:ring-2"
          href={href}
        >
          <Image
            alt={`Thumbnail for ${title}`}
            fill
            src={thumbnail}
            style={{ objectFit: "cover" }}
          />
        </Link>
      )}

      {(description || title) && (
        <div className="flex flex-col items-start gap-1">
          {title && (
            <Link
              className="focus-visible:ring-blue-7 outline-none hover:underline focus-visible:underline focus-visible:ring-2"
              href={href}
            >
              <h2 className="text-slate-12 text-base font-semibold">{title}</h2>
            </Link>
          )}

          {description && (
            <p className="text-slate-11 text-sm">{description}</p>
          )}
        </div>
      )}
    </article>
  );
};
