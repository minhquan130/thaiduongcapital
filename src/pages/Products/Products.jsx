import React, { useState } from "react";

function Products() {
  const [indexProduct, setIndexProduct] = useState(0);
  const arrTabProducts = [
    {
      title: "Fund Management",
      description: [
        "We provide portfolio management services to private funds with long-term vision forward to alternatives investment such as private equity, real estates or structured investments.",
        "This type of investment products will be offerred to qualified professional investors with certain investment understanding and aggresive risk tolerance.",
      ],
    },
    {
      title: "Investment Managed Account",
      description: [
        "This service is specifically tailored to clients with differing characteristics, investment needs, and risk tolerance.",
        "A separately managed account is created solely for the purpose of investing a client’s funds on a stand-alone basis. All transactions shall be administered by the custody bank and periodically reported to client respectively.",
        "Clients may select either non-discretionary investment or discretionary investment account services. ",
      ],
    },
    {
      title: "Investment & Strategy Advisory",
      description: [
        "We offer investment advisory services specializing in private equity, M&A and structured investments, such as investment & deal analysis, strategy and portfolio restructure.",
        "We, particularly provide complementary advisory in business strategy, compliance, corporate governance and corporate finance in accordance with accredited standards, which in turn will create significant value added to our portfolio companies",
      ],
    },
    {
      title: "Incidental Investment Services",
      description: [
        "Investors and Clients will be rendered with certain complementary services such as, Incorporation, Corporate Governance, Proxy and Tax compliance.",
      ],
    },
  ];
  const getLinkClass = (index) => {
    return indexProduct === index
      ? "bg-[#f99d20] text-white"
      : "hover:bg-[#f99d20] hover:text-white";
  };
  return (
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">
        Products &amp; Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 bg-slate-50 p-4 rounded-lg">
          <ul className="flex flex-col gap-2">
            {arrTabProducts.map((tag, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg cursor-pointer transition duration-300 font-bold ${getLinkClass(
                  index
                )}`}
                onClick={() => {
                  setIndexProduct(index);
                  console.log(getLinkClass(index));
                }}
              >
                {tag.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-9">
          <h2 className="text-2xl font-bold">
            {arrTabProducts[indexProduct].title}
          </h2>
          <br />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img
                src="http://thaiduongcapital.com.vn/uploaded/images/news/2016-12-30/250x188/1688112325.jpg"
                alt=""
              />
            </div>
            <div className="col-span-8 flex flex-col gap-4">
              {arrTabProducts[indexProduct].description.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              {/* <p>{arrTabProducts[indexProduct].description}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
