import { SembTitle } from "@/components/sembTitle";
import UserAvatarPopover from "@/components/userAvatarPopover";
import { sideNavAtom } from "@/store/applicationSettings";
import { BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Header = ({ className = "" }: { className?: string }) => {
  const setSideNavState = useSetRecoilState(sideNavAtom);
  const navigate = useNavigate();

  const toggleSideDrawer = () => {
    setSideNavState((state) => ({ sideNavExpand: false, isDrawerOpen: !state.isDrawerOpen }));
  };

  const toggleSideNav = () => {
    setSideNavState((state) => ({ isDrawerOpen: false, sideNavExpand: !state.sideNavExpand }));
  };

  return (
    <header className={cn("border-b bg-background z-20 flex px-4 items-center justify-between sticky top-0", className)}>
      <div id="title-section" className="relative z-20 flex gap-3 h-full items-center">
        <HamburgerMenuIcon onClick={toggleSideNav} className="hidden lg:block h-5 w-6 cursor-pointer leading-none" />
        <HamburgerMenuIcon onClick={toggleSideDrawer} className="lg:hidden h-5 w-6 cursor-pointer leading-none" />
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          <SembTitle />
        </span>
      </div>
      <div id="avatar-section" className="relative z-20 h-full flex gap-3 items-center select-none">
        <BellIcon className="h-5 w-6 cursor-pointer" />
        <UserAvatarPopover />
      </div>
    </header>
  );
};

export default Header;
