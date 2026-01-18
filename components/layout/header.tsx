import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "@/configs/marketing";
import { ModeToggle } from "@/components/mode-toggle";

const HeaderLayout = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={marketingConfig.mainNav}></MainNav>
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
