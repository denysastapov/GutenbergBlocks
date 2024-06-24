import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./style.css";

registerBlockType("gerchik-blocks/gerchik-simple-slider", {
  title: "GTE Slider 1 image",
  icon: "format-image",
  category: "gte",
  attributes: {
    images: {
      type: "array",
      default: [],
      source: "query",
      selector: ".swiper-slide",
      query: {
        url: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "src",
        },
        id: {
          type: "number",
          source: "attribute",
          selector: "img",
          attribute: "data-id",
        },
      },
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { images } = attributes;

    const onSelectImage = (newImages) => {
      const imagesArray = newImages.map((image) => ({
        url: image.url,
        id: image.id,
      }));
      setAttributes({ images: imagesArray });
    };

    useEffect(() => {
      if (typeof window.Swiper !== "undefined") {
        const swiper = new window.Swiper(".swiper.swiper-single", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 16,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else {
        console.error("Swiper is not defined");
      }
    }, [images]);

    return (
      <div className="swiper-container">
        <div className="swiper swiper-single">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <img src={image.url} alt="" data-id={image.id} />
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              multiple
              gallery
              value={images.map((image) => image.id)}
              render={({ open }) => (
                <Button onClick={open} isDefault>
                  Add Images
                </Button>
              )}
            />
          </MediaUploadCheck>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    const { images } = attributes;
    return (
      <div className="swiper-container">
        <div className="swiper swiper-single">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <img src={image.url} alt="" data-id={image.id} />
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  },
});
