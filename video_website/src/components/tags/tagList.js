import { useDispatch, useSelector } from "react-redux";
import Tag from "./tag";
import { useEffect } from "react";
import { fetchTag } from "../../features/tags/tagsSlice";

const TagList = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTag());
  }, [dispatch]);

  return tags ? (
    <section>
      <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
    </section>
  ) : null;
};

export default TagList;
