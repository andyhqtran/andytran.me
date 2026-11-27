import classNames from "classnames";
import Link from "next/link";

export type LogoProps = {
  label: string;
};

export const Logo = ({ label }: LogoProps) => {
  const initials = label.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);

  return (
    <Link
      aria-label={`Logo for ${label}`}
      className={classNames(
        "bg-slate-2 text-slate-12 flex h-14 w-14 items-center justify-center rounded-full border border-transparent font-bold outline-none select-none",
        "hover:bg-slate-3",
        "focus-visible:ring-blue-7 focus-visible:ring-2",
        "active:border-slate-5",
      )}
      href="/"
    >
      {initials}
    </Link>
  );
};
