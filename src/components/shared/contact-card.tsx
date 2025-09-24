import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

const ContactCard = () => {
  const socialLinks = [
    { icon: "in", label: "LinkedIn" },
    { icon: "ig", label: "Instagram" }, 
    { icon: "dr", label: "Dribbble" },
    { icon: "be", label: "Behance" },
  ];

  const navLinks = ["HOME", "ABOUT", "WORK", "CONTACT"];

  return (
    <div className="  z-30  flex items-center mb-5 justify-center">
      <div className="w-full max-w-7xl p-3 rounded-3xl font-poppins backdrop-blur-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap- items-center">
          {/* Left Content Section */}
          <div className="lg:col-span-8 space-y-3">
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-6">
              
              <h3 className=" font-semibold text-lg">
                  Khalid khan - Product Designer and Framer Developer
                </h3>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl  md:text-4xl font-bold leading-tight">
                LET'S CONNECT
              </h1>
              <p className="text-lg md:text-xl text-contact-text-light font-light max-w-2xl">
                If you're driven by curiosity and love, research-based design arguments
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex md:flex-row flex-col gap-2">
              <Button variant="default" size="lg" className="rounded-xl text-lg px-4 py-2 ">
                <Star className="w-5 h-5 fill-current" />
                Mail me
              </Button>
               <Button variant="default" size="lg" className="rounded-xl text-lg px-4 py-2 ">
                <Star className="w-5 h-5 fill-current" />
                Whatsapp me
              </Button>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <h4 className=" font-semibold ">
                  Stay connected
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 ">
                    <Mail className="w-4 h-4" />
                    <span>j24v6.design@gmail.com</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    <span>+91 63799-04730</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                </div>
              </div>

   
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-contact-text-primary font-semibold text-lg">
                  Social Handles
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <div
                      key={social.label}
                      className="w-10 h-10 bg-contact-social-bg rounded-lg flex items-center justify-center text-contact-text-primary text-sm font-bold cursor-pointer hover:bg-contact-button-bg hover:text-contact-button-text transition-all duration-200"
                    >
                      {social.icon}
                    </div>
                  ))}
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
                  className="w-full h-full object-contain rounded-xl"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;