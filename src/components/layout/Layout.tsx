import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button'; // Correct import

export const Layout = () => {
  const location = useLocation();
  const isTransparent = location.pathname === '/' || location.pathname === '/team';

  return (
    <>
      <header className={`w-full top-0 left-0 z-50 ${isTransparent ? 'absolute bg-transparent' : 'relative bg-muted'}`}>
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between text-foreground gap-2 overflow-hidden">
          <Link to="/" className="text-xl font-bold gradient-text">
            The 360 Scope
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/team" className="hover:underline">
              Team
            </Link>
            <Button
              size="sm"
              onClick={() => window.open('https://start.the360scope.com/', '_blank')}
            >
              Book a Call
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-[var(--header-h,4rem)]">
        <Outlet />
      </main>

      <footer className="bg-muted text-foreground text-center py-6">
        © 2024 The 360 Scope. All rights reserved.
      </footer>
    </>
  );
};
