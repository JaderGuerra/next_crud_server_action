import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";
/* min 14 */
export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1>NavBar</h1>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
