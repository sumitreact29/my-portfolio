type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
