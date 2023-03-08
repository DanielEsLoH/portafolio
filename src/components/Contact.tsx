import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Sobre mi:
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-3xl md:text-5xl">
              ¿Quieres Contáctarme?
            </h1>
            <p className="text-white-secondary text-xl md:text-2xl md:w-2/3">
              Puedes hacerlo mediante las siguientes plataformas:
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-2xl text-lg">
          <li>
              <a
                href="https://www.linkedin.com/in/daniel-esteban-londo%C3%B1o-henao-b9212b1b9"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <FaLinkedinIn size={30} color="#3b82f6" />
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DanielEsLoH"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:daniel.esloh@gmail.com"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <HiMail size={30} color="#3b82E1" />
                <p>daniel.esloh@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;