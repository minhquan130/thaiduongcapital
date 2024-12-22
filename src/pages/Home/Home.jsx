import React from "react";
import BannerImage from "../../assets/images/banner.png";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function Home() {
  const newsItems = Array.from({ length: 3 }, (_, index) => ({
    id: index,
    title: `Economic Update ${index + 1}`,
    description: "Latest economic indicators and their impact on investments.",
    imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "March 5, 2024",
  }));
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
          height: "calc(100vh - 105px)",
        }}
      >
        <div className="absolute inset-0 bg-[#1f2937] bg-opacity-75 text-white">
          <div className="container mx-auto px-6 mt-24">
            <h2 className="text-4xl font-bold">THAI DUONG CAPITAL</h2>
            <p class="mt-6 text-xl text-gray-300 max-w-3xl">
              An independent fund manager providing professional services in
              fund and portfolio management and investment advisory in Vietnam
              since 2009.
            </p>
            <Link
              to={"/about"}
              className="px-4 py-3 mt-10 bg-[#f99d20] hover:bg-[#f98220] rounded-lg inline-flex gap-2 font-bold"
            >
              Learn More <MoveRight />
            </Link>
          </div>
        </div>
      </div>

      
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Thai Duong Capital
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2009, Thai Duong Capital has established itself as a
              trusted independent fund manager in Vietnam.
            </p>
          </div>
          <div class="mt-10">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Experience
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Over a decade of experience in fund management and
                      investment advisory services.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Expertise
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Deep understanding of Vietnamese markets and investment
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Trust
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Licensed by State Securities Commission (SSC) with a
                      proven track record.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive investment solutions tailored to your needs
            </p>
          </div>
          <div class="mt-10">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="px-6 py-8">
                  <h3 class="text-lg font-medium text-gray-900">
                    Fund Management
                  </h3>
                  <p class="mt-4 text-base text-gray-500">
                    Professional management of investment funds with a focus on
                    maximizing returns while managing risk.
                  </p>
                </div>
              </div>
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="px-6 py-8">
                  <h3 class="text-lg font-medium text-gray-900">
                    Portfolio Management
                  </h3>
                  <p class="mt-4 text-base text-gray-500">
                    Customized portfolio solutions designed to meet specific
                    investment objectives and risk tolerance.
                  </p>
                </div>
              </div>
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="px-6 py-8">
                  <h3 class="text-lg font-medium text-gray-900">
                    Investment Advisory
                  </h3>
                  <p class="mt-4 text-base text-gray-500">
                    Expert guidance and strategic advice for making informed
                    investment decisions in Vietnamese markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
