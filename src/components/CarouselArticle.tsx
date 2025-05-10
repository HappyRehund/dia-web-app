"use client";

import { Article } from "@/lib/helpers/article";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

function CarouselArticle({ article }: { article: Article[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(1);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel setApi={setApi} className="w-full bg-transparent">
      <CarouselContent className="relative z-10 -ml-1.5 bg-transparent px-4 pb-10 md:px-10 md:-ml-[3vw]">
        {article.map((item, index) => (
          <CarouselItem
            key={index}
            className={`
                        basis-[95%] sm:basis-[45%] md:basis-1/3 lg:basis-1/4 pl-2 md:pl-[3vw]
                        transition-all ease-in-out
                        ${
                          current !== index + 1
                            ? "scale-90 sm:scale-95 md:scale-100"
                            : "scale-100"
                        }
                    `}
          >
            <Card {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 z-10" />
      <CarouselNext className="right-0 z-10" />
    </Carousel>
  );
}

const Card = ({ slug, title, description }: Article) => {
  return (
    <main className="relative grid h-72 grid-rows-[1fr,auto] overflow-hidden rounded-2xl bg-white shadow-lg">
      <section className="relative flex w-full flex-col justify-end overflow-hidden bg-neutral-200 transition-all duration-300 ease-in-out">
        <Image
          src={`/article/${slug}.webp`}
          alt={title}
          width={768}
          height={768}
          className="z-0 select-none object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>
      <section className="group hover:text-primary-900 flex flex-col items-start px-4 py-3 transition-all duration-300 ease-in-out">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="line-clamp-6 select-none hover:cursor-default overflow-hidden text-justify text-sm transition-all duration-300 ease-in-out">
          {description}
        </p>
      </section>
    </main>
  );
};

export default CarouselArticle;
