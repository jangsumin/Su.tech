import { createContext, useState, useContext, ReactNode } from "react";

interface CarouselContextProps {
  current: number;
  setCurrent: (index: number) => void;
  contentCount: number;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context)
    throw new Error(
      "useCarousel 훅은 CarouselProvider 내부에서만 사용할 수 있습니다."
    );

  return context;
};

interface CarouselProviderProps {
  children: ReactNode;
  contentCount: number;
}

export const CarouselProvider = ({
  children,
  contentCount,
}: CarouselProviderProps) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <CarouselContext.Provider value={{ current, setCurrent, contentCount }}>
      {children}
    </CarouselContext.Provider>
  );
};
