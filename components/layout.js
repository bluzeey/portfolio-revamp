import Footer from "./footer";
import { useRouter } from "next/router";
import Header01 from "./header/Header01";
import Header02 from "./header/Header02";
import Header03 from "./header/Header03";
import Header04 from "./header/Header04";

export default function Layout({ children }) {
  const route = useRouter();
  // header start
  let header;
  if (route.asPath === "/home/home_3" || route.asPath === "/home/home_9") {
    header = <Header02 />;
  } else if (route.asPath === "/platform_status") {
    header = <Header03 />;
  } else if (route.asPath === "/home/home_8") {
    header = <Header04 />;
  } else {
    header = <Header01 />;
  }
  // header end

  return (
    <>
      {header}
      <main>{children}</main>
      <Footer />
    </>
  );
}
