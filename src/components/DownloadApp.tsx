import Image from 'next/image';
import Link from 'next/link';

export default function DownloadApp() {
  return (
    <section className="mb-8 mt-20">
      <div className="relative bg-blue-600 text-white rounded-md py-12 px-8">
        <Image
          src="https://res.cloudinary.com/dmlavu7is/image/upload/v1756890502/105_app-cta-background-5_pgxqqm.webp"
          alt="Mobile app background"
          fill
          className="object-cover opacity-20"
          data-ai-hint="mobile app"
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-2">Download Daily News App</h2>
            <p className="text-blue-100 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end lg:pr-7">
            <Link href="#">
              <Image src="https://res.cloudinary.com/dmlavu7is/image/upload/v1756890479/072_app-store_zszgh6.svg" alt="Download on the App Store" width={160} height={40} />
            </Link>
            <Link href="#">
              <Image src="https://res.cloudinary.com/dmlavu7is/image/upload/v1756890434/003_google-play-store_nxxyir.svg" alt="Get it on Google Play" width={160} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
