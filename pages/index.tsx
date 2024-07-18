import Image from "next/image";
import profilePic from "../public/about-pic.jpg";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";
import Icons from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ContactForm from "@/components/ContactForm";
// import ParticleBackgroundEffect from "@/components/ParticleBackgroundEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Abdul Razak's Home Page" />
      </Head>
      <TransitionEffect />
      {/* <ParticleBackgroundEffect></ParticleBackgroundEffect> */}
      <section className="grid grid-cols-8 md:gap-16 pt-16">
      {/* <div className="w-1/2">
          <Image
            src={profilePic}
            alt="grace-anand"
            className="mx-auto dark:brightness-75"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div> */}
        
        <div className="items-start justify-start lg:col-span-4 col-span-8">
          <AnimatedHeading className="xl:text-6xl md:text-left lg:text-5xl md:text-4xl text-3xl text-center">
            Hello, I&apos;m Razak 👋. A passionate web dev who is keen on
            learning new tech.
          </AnimatedHeading>
          <p className="my-4 font-medium md:text-left text-center">
            I am a web developer with a passion for building web applications. I
            enjoy learning new technologies and building projects with them.
          </p>
          <div className="flex items-center justify-center md:justify-normal md:self-start mt-2">
            <Link
              href="/razak-s-resume.pdf"
              className="flex items-center rounded-lg border-2 border-solid bg-primary py-2 px-4 md:py-2.5 lg:px-6 text-lg font-semibold
            capitalize text-primary-foreground hover:border-primary hover:bg-transparent hover:text-primary
            md:p-2 md:px-4 md:text-base hover:bg-none dark:hover:bg-none"
              target="_blank"
              download
            >
              Resume
              <Icons.externalLink className="inline-block ms-1" width={20} />
            </Link>
            <Link href="/#contact" className="ms-5 underline">
              Contact
            </Link>
          </div>
        </div>

         <div className="col-span-8 relative rounded-2xl p-8 border-2 border-primary bg-background h-fit lg:col-span-4 my-5 sm:my-8 md:my-0">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
          <Image
            src={profilePic}
            alt="Abdul Razak"
            className="rounded-2xl dark:brightness-75"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
       
      </section>
      <ContactForm />
      <HireMe className="fixed bottom-4 left-4 hidden md:block" />
    </>
  );
}
