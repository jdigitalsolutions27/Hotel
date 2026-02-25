import { Footer } from "@/components/layout/footer";
import { MobileBookNow } from "@/components/layout/mobile-book-now";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { TopInfoBar } from "@/components/layout/top-info-bar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
      <MobileBookNow />
    </>
  );
}
