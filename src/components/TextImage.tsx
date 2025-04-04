import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

const TextImageVariants = cva(
  "absolute bg-background rounded-lg line-clamp-2 md:line-clamp-none top-1/4 md:top-1/3 p-2 md:p-3 text-sm md:text-base  md:max-w-lg",
  {
    variants: {
      variant: {
        left: "left-[25%] md:left-[30%] lg:left-[38%]",
        right: "right-[30%] lg:right-[35%]",
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
  textSm?: string;
  img: StaticImageData;
  alt: string;
}

const TextImage = React.forwardRef<HTMLButtonElement, TextImageProps>(
  ({ className, variant, text, textSm, img, alt }, ref) => {
    return (
      <figure
        ref={ref}
        className={cn("relative flex justify-center", className)}>
        <figcaption className={cn(TextImageVariants({ variant }))}>
          <span className="hidden md:block">{text}</span>
          <span className="md:hidden">{textSm}</span>
        </figcaption>
        <Image
          className="max-h-48 w-auto md:max-h-56 lg:max-h-64"
          src={img}
          alt={alt}
        />
      </figure>
    );
  }
);

TextImage.displayName = "TextImage";

export { TextImage, TextImageVariants };
