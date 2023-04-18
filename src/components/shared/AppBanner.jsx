import profileImage from '../../images/aboutMe.png';
import { FiArrowDownCircle } from 'react-icons/fi';
import AboutMeBio from '../about/AboutMeBio';
import { AboutMeProvider } from '../../context/AboutMeContext';
import { motion } from 'framer-motion';
import audio1 from '../../audio/cover.mp3';

const AppBanner = () => {
	

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			
			<div id="pro" className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>

				<img src={profileImage} className="rounded-lg w-96"  alt="" />
				<br />
					Hi, I'm José Mendonça

				</motion.h1>
				
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Jose-Mendonca.pdf"
						href="/files/Jose-Mendonca.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>

			
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className=""
			>

	<div>
      <audio autoPlay="autoplay">
        <source src={audio1} type="audio/mpeg" />
      </audio>
    </div>
				<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.2,
				}}

				className="container mx-auto"
			>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer & Front-End Enthusiast
					<br /><br />
				</motion.p>
				<AboutMeBio />
				
			</motion.div>
		</AboutMeProvider>
				
			</motion.div>

		</motion.section>
	);
};

export default AppBanner;
