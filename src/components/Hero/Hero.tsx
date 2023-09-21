import { Button } from "..";
import { Container } from "..";

export function Hero() {
  return (
    <Container>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div>
          <div className="relative pt-20 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                The new way to manage{" "}
                <span className="text-primary dark:text-white">Claims</span> of
                you bussines
              </h1>
              <p className="mt-8 lg:w-2/3 mx-auto text-gray-700 dark:text-gray-300">
                Optimize your claims today. Join us to simplify and improve your
                claims management. Make it easy and effective with RequestHub!
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a href="login">
                  <Button size="lg">Get started</Button>
                </a>
                <a href="#features">
                  <Button size="lg" variant={"outline"}>
                    Learn more
                  </Button>
                </a>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/microsoft.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/airbnb.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/google.svg"
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/ge.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/netflix.svg"
                className="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/google-cloud.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div> */}
            <div className="w-full mx-auto mt-20 text-center md:w-10/12">
              <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                  <div className="flex items-center flex-none px-4 bg-blue-400 rounded-b-none h-11 rounded-xl">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                      <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                      <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
