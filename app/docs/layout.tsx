import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { source } from "@/lib/source";
import type { ReactNode } from "react";
import "fumadocs-ui/style.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ enabled: false }}>
      <DocsLayout
        tree={source.getPageTree()}
        nav={{
          title: (
            <div className="flex items-center gap-2 font-bold">
              <img src="/sysmos-icon.svg" alt="Sysmos" className="h-7 w-7" />
              Sysmos Docs
            </div>
          ),
          url: "/",
        }}
        sidebar={{
          defaultOpenLevel: 1,
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
