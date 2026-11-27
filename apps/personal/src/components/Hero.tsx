import Link from "next/link";

const NAVIGATION = [
  {
    href: "mailto:hello@andytran.me",
    label: "Email",
  },
  {
    href: "https://www.notion.so/andytran/Andy-Tran-635f05c3018844f5872e9bb692bd73d4",
    label: "About",
  },
  {
    href: "https://github.com/andyhqtran",
    label: "GitHub",
  },
];

export const Hero = () => {
  return (
    <section className="flex flex-col gap-6 px-14 pt-10 pb-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-12 text-7xl font-black tracking-tight">
          Andy Tran
        </h1>
        <p className="text-slate-11 text-2xl">
          Senior Front-end Engineer at{" "}
          <Link
            className="text-slate-12 hover:text-blue-9 tracking-tight underline"
            href="https://air.inc"
            target="_blank"
          >
            Air Labs
          </Link>
          .
        </p>
      </div>

      <nav className="flex items-center gap-4">
        {NAVIGATION.map((navigationItem, index) => {
          return (
            <Link
              className="text-slate-12 hover:text-blue-9 text-lg underline"
              href={navigationItem.href}
              key={index}
              target="_blank"
            >
              {navigationItem.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
