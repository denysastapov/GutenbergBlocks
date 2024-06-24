import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.css";

registerBlockType("gerchik-blocks/gte-preformatted", {
  title: "GTE Preformatted",
  icon: "text",
  category: "gte",
  edit: () => {
    return (
      <div className="gte-preformatted">
        <InnerBlocks
          allowedBlocks={["core/preformatted"]}
          template={[["core/preformatted"]]}
        />
      </div>
    );
  },
  save: () => {
    return (
      <div className="gte-preformatted">
        <InnerBlocks.Content />
      </div>
    );
  },
});
