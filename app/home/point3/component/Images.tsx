import React from "react";

const Images = () => {
  const normalImages = [
    { label: "Image 1", src: "https://picsum.photos/id/1015/1600/900" },
    { label: "Image 2", src: "https://picsum.photos/id/1015/1600/900" },
  ];

  const gridImages = Array.from(
    { length: 6 },
    (_, i) => `https://picsum.photos/500/300?random=${i + 1}`
  );

  return (
    <div className="w-[70vw] p-10 flex flex-col gap-20 text-lg font-semibold font-rethink">

      {/* Image 1 & 2 */}
      {normalImages.map((image) => (
        <div key={image.label} className="flex flex-col gap-2">
          <span>{image.label}</span>

          <img
            src={image.src}
            alt={image.label}
            className="w-full"
          />
        </div>
      ))}

      {/* Grid Images */}
      <div className="flex flex-col gap-2">
        <span>Grid Images</span>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {gridImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Grid image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Image 4 */}
      <div className="flex flex-col gap-2">
        <span>Image 3</span>

        <img
          src="https://picsum.photos/id/1015/1600/900"
          alt="Image 4"
          className="w-full"
        />
      </div>

    </div>
  );
};

export default Images;