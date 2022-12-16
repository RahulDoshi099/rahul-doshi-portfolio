import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadInUp } from "../animation";
import Head from "next/head";

const Resume = () => {
  

  return (
    <div className="px-6 py-2">
        <Head>
        <title>Resume | Rahul Doshi | Web Developer</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-3xl font-extrabold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-semibold ">
              Bachelor of Computer Science
            </h5>
            <p className="font-light">Narmada collage of Science and Commerce, Bharuch (2017-2021)</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-semibold">
            Master of Information and Communication Technology
            </h5>
            <p className="font-light">Veer Narmad South Gujarat University, Surat (2021-2022)</p>
          </div>
        </motion.div>
        <motion.div variants={fadInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-3xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">MERN Stack Developer</h5>
            <p className="font-semibold">Globalia Soft LLP</p>
            {/* <p className="my-3">I am working here from april-22</p> */}
          </div>
          </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2 mt-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
