import { Container } from '..';
function Testimonios() {
  return (
    <div className="text-gray-600 dark:text-gray-300 mt-40" id="reviews">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Testimonials and comments
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/10554486?s=96&v=4"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Daniella Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Since implementing RequestHub, we've seen a substantial
              improvement in claim management efficiency. This has translated
              into cost savings and higher customer satisfaction. A truly
              positive change for our company!
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/776816?v=4"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing
                </p>
              </div>
            </div>
            <p className="mt-8">
              {' '}
              RequestHub has been a godsend for my business. Managing claims
              used to be a headache, but now, with this platform, everything is
              much easier and quicker. Thank you for simplifying this task for
              us!
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/140974213?s=80&v=4"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanick Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              The transition to RequestHub has been incredibly smooth. Our
              customer service team can now resolve claims faster and with
              greater accuracy. This tool has elevated our quality of customer
              care
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/70?v=4"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              As someone responsible for operations, I'm always looking for ways
              to enhance efficiency. RequestHub has not only optimized our claim
              management but also simplified our internal processes. A great
              boost for our company!
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/78784850?s=80&v=4"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Andy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              {' '}
              Efficiently managing claims is crucial to maintaining customer
              satisfaction. With RequestHub, we've drastically improved our
              ability to address issues quickly and effectively, which has had a
              positive impact on our sales and customer retention.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/80023616?s=96&v=4"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanndy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              The transition to RequestHub has been incredibly smooth. Our
              customer service team can now resolve claims faster and with
              greater accuracy. This tool has elevated our quality of customer
              care.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Testimonios;
