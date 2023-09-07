import { Container } from "..";
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
      <div className=" mt-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            fill-rule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clip-rule="evenodd"
          />
        </svg>

        <h2 className="my-8 text-2xl w-3/5 mx-auto text-center font-bold text-gray-700 dark:text-white md:text-4xl">
          A technology-first approach to commication with clients
        </h2>
        <p className="text-gray-600 text-center w-3/5 mx-auto dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
          minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
          magni adipisci.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <Feature
          img="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
          title="First feature"
          description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
        ></Feature>
        <Feature
          img="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
          title="Second feature"
          description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
        ></Feature>
        <Feature
          img="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
          title="Third feature"
          description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
        ></Feature>
        <Feature
          img="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
          title="More features"
          description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
        ></Feature>
      </div>
    </Container>
  );
}
export default Features;
