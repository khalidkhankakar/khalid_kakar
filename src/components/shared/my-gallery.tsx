import Image from "next/image";

const MyGallery = () => {
  return (
    <div className="mx-auto  my-16 md:max-w-6xl">
      {/* Top Image */}
      <div className="relative">
        <Image
          src="/images/6.jpg"
          alt="New York City"
          width={1220}
          height={980}
          className="object-cover md:rounded-xl w-full h-full"
          priority
        />
        <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-linear-to-t from-black/80 xl:bg-none xl:static xl:text-gray-900 dark:xl:text-gray-200 xl:px-0">
          <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
            New York City
          </p>
          <p className="text-xs sm:text-sm xl:text-gray-700 dark:xl:text-gray-200">2015 - Present</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex  gap-6 mt-8  xl:mt-10">
        {/* Burlington */}
        <div className="relative w-1/2 ">
          <Image
            src="/images/2.jpeg"
            alt="Burlington"
            width={1080}
            height={1080}
            className="object-cover w-full h-full md:rounded-xl"
          />
          <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-linear-to-t from-black/80 xl:bg-none xl:static xl:text-gray-900 dark:xl:text-gray-200 xl:px-0">
            <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
              Burlington
            </p>
            <p className="text-xs sm:text-sm xl:text-gray-700 dark:xl:text-gray-200">2014-2015</p>
          </div>
        </div>

        {/* Boston */}
        <div className="relative w-1/2 ">
          <Image
            src="/images/5.jpg"
            alt="Boston"
            width={1080}
            height={1080}
            className="object-cover w-full h-full md:rounded-xl"
          />
          <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-linear-to-t from-black/80 xl:bg-none xl:static xl:text-gray-900 dark:xl:text-gray-200 xl:px-0">
            <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
              Boston
            </p>
            <p className="text-xs sm:text-sm xl:text-gray-700 dark:xl:text-gray-200">2010 - 2014</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
