import { MainNav } from "@/components/main-nav";
import { docsConfig } from "@/configs/docs";

const HeaderLayout = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={docsConfig.mainNav}></MainNav>
        <div className="flex flex-1 items-center space-x-4 sm:justify-end"></div>
      </div>
    </header>
  );
};

export default HeaderLayout;
