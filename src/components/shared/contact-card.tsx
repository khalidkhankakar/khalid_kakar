import { Button } from "@/components/ui/button";
import { Star, Mail, Phone, ExternalLink, MailIcon, Github, Linkedin, Twitch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ContactCard = () => {
  const socialLinks = [
    { icon: "in", label: "LinkedIn" },
    { icon: "ig", label: "Instagram" },
    { icon: "dr", label: "Dribbble" },
    { icon: "be", label: "Behance" },
  ];

  return (
    <div className="  z-30  flex items-center mb-5 justify-center">
      <div className="w-full  p-4   font-poppins backdrop-blur-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap- items-center">
          {/* Left Content Section */}
          <div className="lg:col-span-8 space-y-3">
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-6">

              <h3 className=" font-semibold text-lg">
                Khalid khan - Full Stack Developer
              </h3>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl  md:text-4xl font-bold leading-tight">
                LET&apos;S CONNECT
              </h1>
              <p className="text-lg md:text-xl text-contact-text-light font-light max-w-2xl">
                If you&apos;re driven by curiosity and love, research-based design arguments
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex md:flex-row flex-col gap-2">
              <Button variant="default" >
                <Image src={'/icons/gmail.svg'} width={50} height={50} alt="whatsapp" className="w-6 h-6" />

                <span> Mail me</span>
              </Button>
              <Button variant="default" >
                <Image src={'/icons/whatsapp.svg'} width={50} height={50} alt="whatsapp" className="w-6 h-6" />

                <span> Whatsapp me</span>
              </Button>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex flex-col md:flex-row md:w-1/2 gap-8 py-4">
              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <h4 className=" font-semibold ">
                  Stay connected
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 ">
                    <MailIcon className="w-4 h-4" />
                    <span>khalidkhankakar2468@gmail.com</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    <span>+92 3708218757</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <h4 className=" font-semibold ">
                  Social Links
                </h4>
                <div className="flex flex-col gap-2">
                  <Link href={'https://github.com/khalidkhankakar'} target="_blank" className="hover:underline">
                    <div className="flex  items-center gap-3 ">
                      <Image src={'/icons/github.svg'} width={20} height={20} alt="github" />
                      <span>GitHub</span>
                      <ExternalLink className="w-4 h-4 " />
                    </div>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/khalid-khan-kakar1/'} target="_blank" className="hover:underline ">
                    <div className="flex   items-center gap-3 ">
                      <Image src={'/icons/linkedin.svg'} width={20} height={20} alt="linkedin" />

                      <span>LinkedIn</span>
                      <ExternalLink className="w-4 h-4 " />
                    </div>
                  </Link>
                  <Link href={'https://x.com/KhalidK37931474'} target="_blank" className="hover:underline ">
                    <div className="flex   items-center gap-3 ">
                      <Image src={'/icons/x.svg'} width={20} height={20} alt="linkedin" />
                      <span>X</span>
                      <ExternalLink className="w-4 h-4 " />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration Section */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <Image
                src={'/profile.jfif'}
                alt="profile"
                width={150}
                height={150}
                className="w-full grayscale-100 hover:grayscale-0 transition-all h-full object-contain rounded-xl"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;