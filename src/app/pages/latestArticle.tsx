import { Card } from "flowbite-react";
import { GoCalendar } from "react-icons/go";

const cardData = [
  {
    imgSrc: "hello1.png",
    title: "Best LearnPress WordPress Theme Collection For 2023",
    date: "Jan 24, 2023",
    description:
      "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    imgSrc: "hello2.png",
    title: "Best LearnPress WordPress Theme Collection For 2023",
    date: "Jan 24, 2023",
    description:
      "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    imgSrc: "hello3.png",
    title: "Best LearnPress WordPress Theme Collection For 2023",
    date: "Jan 24, 2023",
    description:
      "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
];

const customCardTheme = {
  root: {
    base: "w-[410px] h-[440px] rounded-[16px] border border-gray-200 shadow-md transition hover:shadow-lg bg-white",
    children: "flex flex-col justify-between p-4 h-full",
  },
  img: {
    base: "rounded-t-[16px] w-full object-cover aspect-[16/9.5]",
  },
};

export function LatestArticles() {
  return (
    <section className="py-10 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
        <p className="text-gray-600">Explore our Free Articles</p>
      </div>

      <div className="grid grid-cols-3 justify-center gap-6">
        {cardData.map((item, index) => (
          <Card key={index} theme={customCardTheme} imgSrc={item.imgSrc}>
            <h5 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h5>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <GoCalendar className="text-orange-500 mr-2" />
              {item.date}
            </div>
            <p className="text-gray-700 text-sm mb-3">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
