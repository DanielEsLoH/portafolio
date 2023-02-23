import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Picture: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg transition-all hover:brightness-110 aspect-square"
        animate={{y:10, transition:{duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse"}}}
        initial={{y: -10}}
        >
        <Image
          src="/fotoPorta.jpeg"
          alt="Profile"
          width={110}
          height={110}
          priority
        />
      </motion.div>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Hola, soy Daniel Londoño
      </motion.h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-sky-100"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5}
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Bienvenido a mi portafolio<br />
        Soy una persona responsable, proactivo, con capacidad de trabajar en
        equipo y rápido aprendizaje. Cuento con conocimientos en desarrollo de aplicaciones web, y me
        encuentro en formación constante para actualización de esta. Me gusta
        todo lo relacionado con sistemas, desarrollo de software y áreas afines. Mi
        objetivo es evolucionar en el sector.
      </motion.p>
    </motion.div>
  );
};

export default Picture;
