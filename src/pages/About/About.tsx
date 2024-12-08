import banner from '../../assets/images/about/banner.png';
import image1 from '../../assets/images/about/image1.png';
import image2 from '../../assets/images/about/image2.png';
import bank1 from '../../assets/icons/about/america-bank.svg';
import bank2 from '../../assets/icons/about/citizens-bank.svg';
import bank3 from '../../assets/icons/about/hsbc-bank.svg';
import bank4 from "../../assets/icons/about/citigroup-bank.svg";
import Faq from '../../components/faq/Faq';

export default function About() {
  return (
    <div className="max-w-[1280px] mt-16 container mx-auto">
      {/* headings */}
      <div className="flex items-center justify-between">
        <h2 className="max-w-[560px] text-[64px] font-medium leading-[77px]">
          Explore Our Property Listings
        </h2>
        <p className="max-w-[520px] font-medium text-[18px] leading-[28px] text-[#70707B]">
          At Phoenix, we are dedicated to transforming the real estate landscape
          with innovative and sustainable property solutions. Our mission is to
          craft exceptional spaces that inspire, empower, and elevate the lives
          of those who live, work, and invest in them.
        </p>
      </div>
      {/* banner */}
      <div className="w-full">
        <img
          className="w-[100%] mt-[56px] rounded-md"
          src={banner}
          alt="banner.png"
        />
      </div>
      {/* stats */}
      <div className="mt-[56px] flex justify-between">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" ">
            <div className="relative text-[64px] font-medium leading-[65px] inline-flex">
              280
              <div className="absolute text-[40px] leading-[48px] font-medium text-[#A0A0AB] -right-8 -top-1">
                +
              </div>
            </div>
          </div>
          <div className="text-[20px] text-[#70707B] leading-[31px] italic font-medium">
            Property Sold
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" ">
            <div className="relative text-[64px] font-medium leading-[65px] inline-flex">
              99
              <div className="absolute text-[40px] leading-[48px] font-medium text-[#A0A0AB] -right-8 -top-1">
                +
              </div>
            </div>
          </div>
          <div className="text-[20px] text-[#70707B] leading-[31px] italic font-medium">
            Property for Rent
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" ">
            <div className="relative text-[64px] font-medium leading-[65px] inline-flex">
              360
              <div className="absolute text-[40px] leading-[48px] font-medium text-[#A0A0AB] -right-8 -top-1">
                +
              </div>
            </div>
          </div>
          <div className="text-[20px] text-[#70707B] leading-[31px] italic font-medium">
            Happy Clients
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" ">
            <div className="relative text-[64px] font-medium leading-[65px] inline-flex">
              95
              <div className="absolute text-[40px] leading-[48px] font-medium text-[#A0A0AB] -right-10 -top-1">
                %
              </div>
            </div>
          </div>
          <div className="text-[20px] text-[#70707B] leading-[31px] italic font-medium">
            Client Satisfactin Rate
          </div>
        </div>
      </div>
      {/* pioneering execeelence */}
      <div className="mt-[56px] flex justify-between items-center">
        <div className="max-w-[586px]">
          <h3 className=" mb-6 text-[52px] font-medium leading-[63px]">
            Pioneering Excellence in Property Development for Your Future
          </h3>
          <p className="mb-6 text-[18px] font-medium text-[#70707B]">
            At Phoenix, we are dedicated to transforming the real estate
            landscape with innovative and sustainable property solutions. Our
            mission is to craft exceptional spaces that inspire, empower, and
            elevate the lives of those who live, work, and invest in them.
          </p>
          <p className="mb-6 text-[18px] font-medium text-[#70707B]">
            From modern residential communities to dynamic commercial
            developments, every project we undertake is a reflection of our
            commitment to excellence. Guided by a vision of creating lasting
            value, we prioritize quality, functionality, and design to ensure
            our properties stand the test of time
          </p>
          <p className="mb-6 text-[18px] font-medium text-[#70707B]">
            With a passionate team of professionals and a forward-thinking
            approach, Phoenix combines cutting-edge technology with meticulous
            attention to detail. We go beyond building properties; we build
            opportunities, connections, and thriving communities where dreams
            take shape and futures are secured.
          </p>
          <p className="text-[18px] font-medium text-[#70707B]">
            Your aspirations drive our purpose. Together, let’s pioneer a new
            standard of excellence in property development—because your future
            deserves nothing less.
          </p>
        </div>
        <div className="max-w-[646px] h-[700px]">
          <img className="w-[100%] h-full rounded-md" src={image1} alt="" />
        </div>
      </div>

      {/* trusted by */}
      <div className="mt-[160px] gap-12 flex items-center justify-center flex-col">
        <h2 className="text-[40px] font-medium leading-[48px]">
          Trusted by leading banks
        </h2>
        <div className="flex w-full items-center justify-between">
          <div>
            <img src={bank1} alt="" />
          </div>
          <div>
            <img src={bank2} alt="" />
          </div>
          <div>
            <img src={bank3} alt="" />
          </div>
          <div>
            <img src={bank4} alt="" />
          </div>
        </div>
      </div>

      {/* clients review */}
      <div className="mt-[160px]">
        <div className="flex justify-between items-center">
          <h4 className="text-[52px] font-normal leading-[63px]">
            What Our Clients Say
          </h4>
          <p className="max-w-[568px] text-[18px] font-medium leading-[28px] text-[#51525C]">
            Hear from our satisfied clients who have found their dream homes and
            investment properties with us. Our commitment to exceptional service
            and client satisfaction is at the heart of everything we do.
          </p>
        </div>
        <div className="flex justify-between mt-[112px]">
          <div className='flex flex-col max-w-[662px] gap-6 justify-center items-start'>
            <h4 className="text-[48px] font-[500] leading-[58px]">
              A Seamless Buying Experience
            </h4>
            <p className="text-[32px] font-medium text-[#51525C]">
              Working with Comfea made buying my first home an enjoyable
              experience. The team was patient, knowledgeable, and guided me
              through every step. I couldn’t be happier with my new home!
            </p>
            <p className='text-[20px] font-[500] leading-[31px]'>— Jessica R</p>
          </div>
          <div className="max-w-[540px]">
            <img className='h-[580px]' src={image2} alt="" />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <Faq/>
      </div>
    </div>
  );
}