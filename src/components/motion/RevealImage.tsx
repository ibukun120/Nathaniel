import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "fill" | "className" | "width" | "height"> & {
  /** Sizing/aspect classes for the wrapper, e.g. "aspect-[4/5] w-full". Reserves space so nothing shifts. */
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  /** Oversizes the image vertically so a parallax hook can move it without exposing edges. */
  parallax?: boolean;
  parallaxRef?: React.Ref<HTMLDivElement>;
};

/**
 * Masked image used for important imagery. Animated by the imageReveal() preset:
 * the overlay wipes off while the image settles from a slight zoom.
 */
export default function RevealImage({
  className = "",
  imageClassName = "",
  overlayClassName = "bg-ink",
  parallax = false,
  parallaxRef,
  alt,
  ...image
}: Props) {
  return (
    <div data-reveal data-img-reveal className={`relative overflow-hidden ${className}`}>
      <div data-reveal-media className="absolute inset-0">
        <div ref={parallaxRef} className={`absolute inset-x-0 ${parallax ? "-inset-y-[8%]" : "inset-y-0"}`}>
          <Image alt={alt} fill className={`object-cover ${imageClassName}`} {...image} />
        </div>
      </div>
      <div data-reveal-overlay aria-hidden className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
