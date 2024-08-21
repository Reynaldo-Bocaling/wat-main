import React from "react";

const RoadMap = () => {
  const roadmapText = [
    {
      number_variant: "absolute top-[3%] md:top-[3.5%] left-[4%] md:left-[14%]",
      title: "LAUNCH AND INITIAL GROWTH",
      variant: "absolute top-[13%] left-[35%]",
      valueList: [
        "01 2024: LAUNCH MEG COIN",
        "WEBSITE LAUNCH",
        "SOCIAL MEDIA CAMPAIGN",
        "INITIAL DEX LISTING",
        "COMMUNITY BUILDING ON TELEGRAM AND X",
      ],
    },
    {
      number_variant: "absolute top-[23%] right-[1.8%] md:right-[11%]",
      title: " COMMUNITY ENGAGEMENT",
      variant: "absolute top-[34%]  left-[35%]",
      valueList: [
        "02 2024: STRENGTHEN MEG COMMUNITY",
        "HOST AMAS WITH DEVELOPERS",
        "MEME CONTESTS AND GIVEAWAYS",
        "COLLABORATIONS WITH INFLUENCERS",
      ],
    },
    {
      number_variant: "absolute top-[44%] left-[4%] md:left-[14.5%]",
      title: "EXPANSION",
      variant: "absolute top-[57%] left-[35%]",
      valueList: [
        "03 2024: EXPAND MEG REACH",
        "LISTING ON MAJOR EXCHANGE",
        "STATEGIC PARTNERSHIPS",
        "COMMUNITY-DRIVEN CHARITY EVENTS",
      ],
    },
    {
      number_variant: "absolute top-[66%] right-[2%] md:right-[12.8%]",
      title: "INNOVATION",
      variant: "absolute top-[80%] left-[35%]",
      valueList: [
        "04 2024: INNOVATE AND INTEGRATE",
        "DEVELOP MEG UNITY",
        "EXPLORE NFT INTEGRATION",
        "ENHANCE WEBSITE WITH NEW FEATURES",
        "CONTINUED MARKETING AND GLOBAL OUTREACH",
      ],
    },
  ];
  const howtobuy = [
    {
      title: "Wallet",
      value: "Get tronlink Wallet : tronlink.org",
    },
    {
      title: "Tron",
      value:
        "Bridge from ANY chain to TRON. Fast and easy bridge: ff.io (fixedfloat)",
    },
    {
      title: "Sunswap",
      value: "Buy On htpps://sunpump.meme or Sunswap (official Tron Dex)",
    },
  ];

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-3 gap-[1%]">
      {/* <Image src={roadMap} alt="roadmap" className="mx-auto mb-4 neon-image" /> */}

      {howtobuy.map((item, index) => (
        <div
          key={index}
          className="road-blurd flex gap-3 items-start justify-center p-[30px] rounded-[25px]"
        >
          <p className="neon-text-title text-[5rem] font-bold ">{index + 1}</p>
          <div className="flex flex-col  ">
            <h1 className="neon-text-title text-[4rem] md:text-[2rem] font-bold text-left mb-4">
              STEP
            </h1>
            <p className="neon-text-title text-[2.2rem] md:text-[1rem] font-bold text-left mb-11">
              {item.title}
            </p>
            <p className=" md:mt-3 md:-translate-x-[40px] neon-text-p text-white text-[2.7rem] md:text-xs tracking-wider my-2">
              {item.value}
            </p>
          </div>
        </div>
      ))}

      {/* {roadmapText.map((item, index) => (
        <div
          key={index}
          className={`${item.number_variant} flexCenter h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full neon-turquoise-roadmap`}
        >
          <h1 className="neon-text-title text-[12rem] md:text-[7.5rem] font-bold text-center">
            {index + 1}
          </h1>
        </div>
      ))} */}
    </div>
  );
};

export default RoadMap;
