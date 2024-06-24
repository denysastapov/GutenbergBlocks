import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.css";

registerBlockType("gerchik-blocks/gte-quote", {
  title: "GTE Quote",
  icon: "format-quote",
  category: "gte",
  edit: () => {
    return (
      <div className="gte-quote">
        <InnerBlocks
          allowedBlocks={["core/quote"]}
          template={[["core/quote"]]}
        />
      </div>
    );
  },
  save: () => {
    return (
      <div className="gte-quote">
        <InnerBlocks.Content />
      </div>
    );
  },
});
