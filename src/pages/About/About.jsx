import React, { useState } from "react";

function About() {
  const [indexAbout, setIndexObout] = useState(0);

  const arrTags = [
    {
      title: "Overview",
      content: [
        `THAI DUONG CAPITAL is an independent fund manager, incorporated in 2009, under a business license by State Securities Commission (SSC). The Company now is proving professional services in fund and portfolio management and investment advisory in Vietnam.`,
        `We are interested in long-term private equity in businesses and projects in Vietnam and consider as one of our advantages and investment disciplines. We, also improve our strategic adaptability to short term investment opportunities and hedge.`,
        `Sectors and industries that we have expertise and give priority to investment include the fundamental ones such as agriculture, mining, energy, real-estate, infrastructure, logistic and financial & banking services.`,
        `As an independent, not controlled by any financial institution, we adhere to act with integrity, dedication and care for the best interests of Client and private confidential.`,
      ],
    },
    {
      title: "Business Principles",
      content: [
        {
          title: "",
          description:
            "As an investment manager to selected affuluent individuals, families and institutions, our secure forward-thinking policies have been built with these keystones:",
        },
        {
          title: "Integrity and privacy",
          description:
            "We maintain integrity in all matters involving clients and associates of our firm. Our independent status from other financial institutions removes any possibility of conflicts of interest. Our corporate governance and internal control are applicable for best interest of Client and duly compliant with laws. This ensures independent, professional and fair dealings in every employee. Manager and Employees adhere to Client’s confidentiality and trade secrets.",
        },
        {
          title: "Dedication and Agility",
          description:
            "We develop an investment approach which can be customized for long-standing but adaptive to client’s change in needs. Our investment and risk management procedures are designed so that client’s long-term investment can be adjusted if any change.",
        },
      ],
    },
    {
      title: "Our People",
      content: [
        {
          username: "Mrs. Cao Ngoc Diep",
          position: "Chairwoman",
        },
        {
          username: "Mrs. Le Quynh Chi",
          position: "CEO",
        },
        {
          username: "Dr. Martin Doan",
          position: "Member",
        },
        {
          username: "Mr. Cao Duy Dong – Chief Strategist Officer",
          position: "Mr. Cao Duy Dong – Chief Strategist",
        },
      ],
    },
    {
      title: "Investor Relations",
      content: [
        {
          title: "Signing audit contract for fiscal year 2024",
          image:
            "http://thaiduongcapital.com.vn/uploaded/images/news/2024-11-30/100x100/1732931142.jpg",
          content: "Signing audit contract for fiscal year 2024",
          date: "14/10/2024",
        },
        {
          title: "Signing audit contract for fiscal year 2024",
          image:
            "http://thaiduongcapital.com.vn/uploaded/images/news/2024-11-30/100x100/1732931142.jpg",
          content: "Signing audit contract for fiscal year 2024",
          date: "14/10/2024",
        },
        {
          title: "Signing audit contract for fiscal year 2024",
          image:
            "http://thaiduongcapital.com.vn/uploaded/images/news/2024-11-30/100x100/1732931142.jpg",
          content: "Signing audit contract for fiscal year 2024",
          date: "14/10/2024",
        },
        {
          title: "Signing audit contract for fiscal year 2024",
          image:
            "http://thaiduongcapital.com.vn/uploaded/images/news/2024-11-30/100x100/1732931142.jpg",
          content: "Signing audit contract for fiscal year 2024",
          date: "14/10/2024",
        },
      ],
    },
  ];

  const getLinkClass = (index) => {
    return indexAbout === index
      ? "bg-[#f99d20] text-white"
      : "hover:bg-[#f99d20] hover:text-white";
  };
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Firm</h1>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
        <div className="w-full lg:col-span-3 bg-slate-50 p-4 rounded-lg">
          <ul className="flex flex-col gap-2">
            {arrTags.map((tag, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg cursor-pointer transition duration-300 font-bold ${getLinkClass(
                  index
                )}`}
                onClick={() => {
                  setIndexObout(index);
                  console.log(getLinkClass(index));
                }}
              >
                {tag.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-9">
          <h2 className="text-2xl font-bold">{arrTags[indexAbout].title}</h2>
          <br />
          {indexAbout === 0 &&
            arrTags[indexAbout].content.map((ct, i) => (
              <p key={i} className="p-2">
                {ct}
              </p>
            ))}
          {indexAbout === 1 &&
            arrTags[indexAbout].content.map((ct, i) => (
              <>
                <h4 className="font-bold">{ct.title}</h4>
                <p key={i} className="p-2">
                  {ct.description}
                </p>
              </>
            ))}
          {indexAbout === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {arrTags[indexAbout].content.map((ct, i) => (
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold">{ct.username}</h4>
                  <p key={i} className="p-2">
                    {ct.position}
                  </p>
                </div>
              ))}
            </div>
          )}
          {indexAbout === 3 && (
            <div className="grid gap-2">
              {arrTags[indexAbout].content.map((ct, i) => (
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold">{ct.date + ": " + ct.title}</h4>
                  <div className="flex justify-between mt-4">
                    <div className="flex">
                      <img src={ct.image} alt="" />
                      <p key={i} className="p-2">
                        {ct.content}
                      </p>
                    </div>
                    <div className="flex items-end">
                      <button className="text-red-500 font-bold hover:text-[#f99d20] hover:underline">
                        Read more...
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
