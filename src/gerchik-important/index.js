import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.css";

registerBlockType("gerchik-blocks/gre-important", {
  title: "GRE Important",
  icon: "editor-paragraph",
  category: "gte",
  edit: () => {
    return (
      <div className="gre-important">
        <InnerBlocks
          allowedBlocks={["core/paragraph"]}
          template={[
            ["core/paragraph", { placeholder: "Insert text here..." }],
          ]}
        />
      </div>
    );
  },
  save: () => {
    return (
      <div className="gre-important">
        <InnerBlocks.Content />
      </div>
    );
  },
});
