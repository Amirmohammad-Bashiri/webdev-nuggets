import Head from "next/head";
import Image from "next/image";

import specsSvg from "../public/images/ui/specs.svg";

function newsletter() {
  return (
    <main className="h-full pt-32 2xl:pt-36">
      <Head>
        <title>Webdev Nuggets | Newsletter</title>
        <meta
          name="description"
          content="Subscribe to get notified with the lastest posts"
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="p-5">
          <Image src={specsSvg} alt="Building" width={500} height={500} />
        </div>

        <p className="text-xl font-bold tracking-wider text-gray-700 md:text-3xl dark:text-gray-400">
          Coming Soon...
        </p>
      </div>
    </main>
  );
}

export default newsletter;
