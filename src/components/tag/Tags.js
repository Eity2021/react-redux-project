import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import { fetchTags } from "../../features/tags/tagsSlice";

export default function Tags() {
  const dispatch = useDispatch();
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && tags?.length === 0) {
    content = <div className="col-span-12">No tags Found</div>;
  }
  if (!isLoading && !isError && tags?.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);
  }
  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  ) : null;
}
