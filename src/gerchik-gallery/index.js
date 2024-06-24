import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.css";

registerBlockType("gerchik-blocks/gte-gallery", {
  title: "GTE Gallery",
  icon: "format-gallery",
  category: "gte",
  edit: () => {
    return (
      <div className="gte-gallery">
        <InnerBlocks
          allowedBlocks={["core/gallery"]}
          template={[["core/gallery"]]}
        />
      </div>
    );
  },
  save: () => {
    return (
      <div className="gte-gallery">
        <InnerBlocks.Content />
      </div>
    );
  },
});
