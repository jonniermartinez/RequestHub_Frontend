import { Container } from "..";

function Fotter() {
  return (
    <Container>
      <div className="m-auto pt-40 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
        <span className="block text-center text-gray-500 dark:text-gray-400">
          RequestHub © <span id="year"></span>
        </span>
        <span className="block text-center text-gray-500 dark:text-gray-400">
          The value of innovation is not in avoiding being copied, but in
          getting everyone to want to copy you.
        </span>

        <span className="block text-center text-gray-500 dark:text-gray-400">
          Need help?{" "}
          <a
            href="https://twitter.com/jayddox"
            target="_blank"
            className="font-semibold text-gray-600 dark:text-white"
          >
            {" "}
            Contact Us
          </a>
        </span>
      </div>
    </Container>
  );
}
export default Fotter;
