import { Container } from '..';
interface Props {
  title: string;
  description: string;
  img: string;
}

function Feature({ title, description, img }: Props) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8">
        <img
          src={img}
          className="w-12"
          width="512"
          height="512"
          alt="burger illustration"
        />

        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition ">
            {title}
          </h5>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <Container>
      <div className=" mt-40" id="">
        <h2
          id="features"
          className="my-8 text-2xl w-3/5 mx-auto text-center font-bold text-gray-700 dark:text-white md:text-4xl"
        >
          A technology-first approach to commication with clients
        </h2>
        <p className="text-gray-600 text-center w-3/5 mx-auto dark:text-gray-300">
          Ready to find out what makes our software exceptional? Explore the key
          features that make RequestHub a unique solution for your business.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <Feature
          img="https://res-console.cloudinary.com/dtd4ibgoz/thumbnails/v1/image/upload/v1694141884/bW9uaXRvcmluZ19qOWNwbnc=/grid_landscape"
          title="Advanced Analytics Dashboard"
          description="Gain a comprehensive, real-time view of your key data all in one place. "
        ></Feature>
        <Feature
          img="https://res-console.cloudinary.com/dtd4ibgoz/thumbnails/v1/image/upload/v1694141866/dmVyaWZpZWRfZ3p2cHp1/grid_landscape"
          title="Automated QCR Management"
          description="Simplify QCR management with our platform. Record, organize, and efficiently respond to customer questions, complaints, and requests. Maintain a complete history for exceptional customer service."
        ></Feature>
        <Feature
          img="https://res-console.cloudinary.com/dtd4ibgoz/thumbnails/v1/image/upload/v1694141858/Y29tcGxldGVkLWZvcm1fZnpzNDNo/grid_landscape"
          title="User-Friendly Ready-Made Form"
          description="Our software includes a user-friendly, ready-made form that's designed for quick and straightforward use. It's pre-configured to efficiently collect essential information without the need for extensive customization."
        ></Feature>
        <Feature
          img="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
          title="Real-time Notifications"
          description="Stay informed about critical updates with real-time notifications. Receive instant alerts for new OCR, data changes, and other relevant events so you can take action promptly."
        ></Feature>
      </div>
    </Container>
  );
}
export default Features;
