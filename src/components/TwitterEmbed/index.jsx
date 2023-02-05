import { BsTwitter } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
const TwitterEmbed = ({ bgCard, textColor }) => {
  return (
    <div
      className={`${bgCard} text-sm w-[540px]  p-[30px] h-auto rounded-lg ${textColor} grid grid-row-3 gap-y-[20px]`}
    >
      <div className="flex flex-row items-center justify-between    ">
        <div className="flex flex-row items-center gap-x-[18px]">
          <img src="/avatar-twitter-embed.png" />
          <div>
            <h1 className="font-medium text-base">John Doe</h1>
            <h1 className="text-[#9CA4AD]">@realjohndoe</h1>
          </div>
        </div>
        <BsTwitter className="text-[#1F89CA]" size={25} />
      </div>
      <div>
        <h1>
          Why do they call it 'debugging' when it feels more like 'wildly
          guessing and hoping for the best'?
          <span className="text-[#1F89CA] ">
            #programming #coding #debugging
          </span>
        </h1>
      </div>
      <div className="flex flex-row items-center gap-x-[10px] text-[#9CA4AD] font-medium">
        <FiHeart className="font-bold" size={20} />
        <h1>650</h1>
        <h1>3:40 PM- Feb 24, 2022</h1>
      </div>
    </div>
  );
};

export default TwitterEmbed;
