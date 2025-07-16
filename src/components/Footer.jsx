import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#090909] w-full md:h-[463px] flex flex-col justify-between">
      <div className="">
        <div className="md:px-[7%] px-[4%] py-[2%] flex flex-col h-full justify-between">
          <div className="flex md:flex-row flex-col md:gap-0 gap-[2rem] justify-between">
            <div className="flex flex-col gap-[20px]">
              <Image src="/footerlogo.svg" width={220} height={40} />
              <p className="text-[#ffff] lg:w-[496px] w-full">
                Frestar Digital is authorised and regulated by the Central Bank{" "}
                <br className="md:hidden block" /> of Nigeria to offer banking
                services. Deposits are insured by the{" "}
                <br className="md:hidden block" /> Nigerian Deposit Insurance
                Corporation (NDIC).
              </p>
            </div>
            <div className="flex flex-row items-start gap-[40px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-[16px] text-white">Quick Links</p>
                <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/"}>Buy</Link>
                  <Link href={"/"}>Sell</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-[16px] text-white">Solution</p>
                <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                  <Link href={"/"}>Digital</Link>
                  <Link href={"/"}>Electronics</Link>
                  <Link href={"/"}>Saloon</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-[16px] text-white">Company</p>
                <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                  <Link href={"/"}>About</Link>
                  <Link href={"/"}>Contact us</Link>
                  {/* <Link href={"/"}>Saloon</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:px-[7%] px-[4%] py-[2%] flex flex-col justify-between">
          <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
            <div className="flex flex-col gap-[20px]">
              {/* <Image src="/footerlogo.svg" width={220} height={40} /> */}
              <p className="text-[#ffff] lg:w-[496px]">
                Frestar BN 12345, Nigeria
              </p>
            </div>
            <div className="flex flex-row items-start gap-[40px]">
              <div className="flex flex-col items-center gap-[16px]">
                <p className="font-bold text-[16px] text-white">
                  Connect with US
                </p>
                <div className="flex flex-row gap-[8px] text-[#9E9FA4]">
                  <Link href={"/"}>
                    <Image
                      src={"/linkedIn.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image src={"/x.svg"} width={24} height={24} alt="" />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={"/instagram.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image src={"/youtube.svg"} width={24} height={24} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:justify-between my-6 border-t-[2px] border-white">
            <div className="flex flex-col gap-[20px] pt-2.5">
              <p className="text-[#9E9FA4] lg:w-[496px]">
                Copyright © 2025, Frestar Inc
              </p>
            </div>
            <div className="flex flex-row items-start gap-[40px]">
              <div className="flex flex-col items-center gap-[16px]">
                <div className="flex flex-row gap-[8px] text-[#9E9FA4]">
                  <Link href={"/"}>Terms of Use</Link>
                  <Link href={"/"}>Privacy Policy</Link>
                  <Link href={"/"}>Cookie Policy</Link>
                  {/* <Link href={"/"}><Image src={"/youtube.svg"} width={24} height={24} alt=''/></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
