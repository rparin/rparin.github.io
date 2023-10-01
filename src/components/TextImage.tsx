import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

const TextImageVariants = cva(
  "absolute bg-background rounded-lg line-clamp-2 md:line-clamp-none top-1/4 md:top-1/3 p-2 md:p-3 text-sm md:text-base md:max-w-lg lg:max-w-xl",
  {
    variants: {
      variant: {
        left: "left-[20%] md:left-[30%] lg:left-[35%]",
        right: "right-[25%] lg:right-[33%]",
      },
    },
    defaultVariants: {
      variant: "left",
    },
  }
);

export interface TextImageProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof TextImageVariants> {
  text: string;
  img: StaticImageData;
  alt: string;
}

const TextImage = React.forwardRef<HTMLButtonElement, TextImageProps>(
  ({ className, variant, text, img, alt }, ref) => {
    return (
      <figure
        ref={ref}
        className={cn("relative flex justify-center", className)}>
        <figcaption className={cn(TextImageVariants({ variant }))}>
          {text}
        </figcaption>
        <Image
          className="max-h-48 md:max-h-56 lg:max-h-64 w-auto"
          src={img}
          alt={alt}
        />
      </figure>
    );
  }
);

export { TextImage, TextImageVariants };
