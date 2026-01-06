import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { SiteFooter } from "@/components/site-footer";
import { dashboardConfig } from "@/configs/dashboard";
import { docsConfig } from "@/configs/docs";
import { siteConfig } from "@/configs/site";
import Link from "next/link";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col container mx-auto">
      <div className="container flex-1">{children}</div>
    </div>
  );
}
