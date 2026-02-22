import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SparkleIcon } from "lucide-react";
import Link from "next/link";
import { navItems } from "../../lib/constants";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary">Built</span> This
      </span>
    </Link>
  );
};

const Header = () => {
  const isSignedIn = false;
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-6 sm:px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
                >
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <SignedOut>
              <Button
                asChild
                variant="outline"
                className="hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/submit">
                  <SparkleIcon className="size-4" /> Submit Project
                </Link>
              </Button>
              <div className="clerk-user-button">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
