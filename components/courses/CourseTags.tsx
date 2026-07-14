interface CourseTagsProps {
  tags: string[];
}

export default function CourseTags({
  tags,
}: CourseTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border px-3 py-1 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}