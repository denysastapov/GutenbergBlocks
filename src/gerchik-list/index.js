import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.css";

registerBlockType("gerchik-blocks/gerchik-list", {
  title: "GTE List",
  icon: "editor-ul",
  category: "gte",
  edit: () => {
    return (
      <div className="gerchik-list">
        <InnerBlocks
          allowedBlocks={["core/list"]}
          template={[["core/list", { placeholder: "Insert list here..." }]]}
        />
      </div>
    );
  },
  save: () => {
    return (
      <div className="gerchik-list">
        <InnerBlocks.Content />
      </div>
    );
  },
});
