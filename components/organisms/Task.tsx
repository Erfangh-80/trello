import Message from "../atoms/icons/Message";
import { ImageProfile } from "../atoms/img/Image";
import { Paragraph } from "../atoms/typography/paragraph";
import { Badge } from "../atoms/typography/span";

export const Task = () => {
  return (
    <div>
      <Paragraph text="" className="" />
      <div className="badge">
        <Badge text="" className="" />
      </div>
      <div>
        <div>
            <ImageProfile className="" address="" alt=""/>
        </div>
        <Message />
      </div>
    </div>
  );
};
