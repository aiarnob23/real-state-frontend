import banner1 from "../../assets/images/home/banner1.jpg";
import banner2 from "../../assets/images/home/banner2.png";
import banner3 from "../../assets/images/home/banner3.png";
export default function Banner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[800px]"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl leading-[90px] font-bold">
                  Discover Your Ideal Living Space Here
                </h1>
                <p className="text-lg  leading-[30px]">
                  Welcome to Phoenix, where we turn your dream property into
                  reality. Explore our portfolio of modern, classic, and luxury
                  buildings designed to meet every need.
                </p>
                <p className="text-lg  leading-[30px]">
                  Discover our exclusive collection of commercial.
                </p>

                <button className="btn mt-6 bg-[#646EE4] border-none text-white text-lg hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero h-[800px]"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl leading-[90px] font-bold">
                  Discover Your Ideal Living Space Here
                </h1>
                <p className="text-lg  leading-[30px]">
                  Welcome to Phoenix, where we turn your dream property into
                  reality. Explore our portfolio of modern, classic, and luxury
                  buildings designed to meet every need.
                </p>
                <p className="text-lg  leading-[30px]">
                  Discover our exclusive collection of commercial.
                </p>

                <button className="btn mt-6 bg-[#646EE4] border-none text-white text-lg hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero h-[800px]"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-7xl leading-[90px] font-bold">
                  Discover Your Ideal Living Space Here
                </h1>
                <p className="text-lg  leading-[30px]">
                  Welcome to Phoenix, where we turn your dream property into
                  reality. Explore our portfolio of modern, classic, and luxury
                  buildings designed to meet every need.
                </p>
                <p className="text-lg  leading-[30px]">
                  Discover our exclusive collection of commercial.
                </p>

                <button className="btn mt-6 bg-[#646EE4] border-none text-white text-lg hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
