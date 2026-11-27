import { ThemeSwitcher } from "./ThemeSwitcher";

export const Footer = () => {
  return (
    <footer className="container mt-24">
      <div className="flex h-24 items-center justify-between border-slate-4 border-t">
        <div className="text-slate-11 text-sm">Copyright &copy; Andy Tran</div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
