import Navbar from "./navbar";
import Drawer from "./drawer";
import { SearchBar } from "./search-bar";
import { HeaderAvatar } from "./header-avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Navbar />
      <Drawer />
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <SearchBar />
        <HeaderAvatar />
      </div>
    </header>
  );
};
