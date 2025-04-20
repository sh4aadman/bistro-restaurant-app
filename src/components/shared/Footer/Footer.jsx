import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const year = getCurrentYear();

  return (
    <footer>
      <div className="flex justify-center">
        <section className="bg-[#1F2937] w-1/2 text-center py-20">
          <h3 className="uppercase font-medium text-3xl text-[#FFFFFF]">Contact us</h3>
          <p className="font-light text-xl text-[#FFFFFF] mt-5 leading-[1.8]">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </section>
        <section className="bg-[#111827] w-1/2 text-center py-20">
          <h3 className="font-medium text-3xl text-[#FFFFFF]">Follow US</h3>
          <p className="font-light text-xl text-[#FFFFFF] mt-5">
            Join us on social media
          </p>
          <div className="text-3xl text-[#FFFFFF] flex justify-center gap-8 mt-5">
            {/* social links will be here */}
            <RiFacebookFill />
            <RiInstagramLine />
            <RiTwitterFill />
          </div>
        </section>
      </div>
      <p className="font-inter font-medium text-center text-xl text-[#FFFFFF] bg-[#151515] py-4 leading-[1.8]">
        Copyright © {year} - CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
