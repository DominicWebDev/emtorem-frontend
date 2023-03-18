import Image from "next/image";
import twitterLogo from "../../public/assets/icons/twitter-logo-1024.png";

export default function Home() {
  return (
    <div className="bg-gray-900 bg-landing">
      <header>
        <div className="py-8 sm:py-8">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Image
                src={twitterLogo}
                alt="Picture of a blue bird"
                width={250}
                height={250}
                className="m-auto"
              />
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                emtorem - css unit conversion made easy
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Simple conversion table for CSS units. No registration needed -
                ready to use. Copy with one click.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-24 -mx-6 overflow-hidden mt-28 sm:mx-0 sm:rounded-2xl md:grid-cols-3 ">
              <div className="p-8 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </div>
              <div className="p-6 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
              </div>
              <div className="p-6 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
              </div>
              <div className="p-6 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
                  alt="Laravel"
                  width={158}
                  height={48}
                />
              </div>
              <div className="p-6 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
              </div>
              <div className="p-6 bg-white/5 sm:p-10">
                <img
                  className="object-contain w-full max-h-12"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
