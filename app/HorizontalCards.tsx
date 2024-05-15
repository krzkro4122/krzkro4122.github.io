import { randomUUID } from "crypto";
import { Card } from "./Card";
import { CardProps } from "./cards";

interface HorizontalCardsProps {
  cards: CardProps[];
  title: string;
}

export const HorizontalCards = ({ cards, title }: HorizontalCardsProps) => {
  return (
    <div className="flex flex-col lg:px-3 text-black lg:text-xl font-bold">
      <div className="flex items-center gap-4">
        <span className="opacity-85 lg:text-xl text-lg font-semibold text-nowrap">{title}</span>
        <div className="hidden lg:block bg-black h-1 w-full opacity-20 rounded-lg"></div>
      </div>
      <div className="flex gap-4 overflow-x-auto p-4">
        {cards &&
          cards.map((card, index) => {
            return <Card {...card} key={randomUUID()} />;
          })}
      </div>
    </div>
  );
};
