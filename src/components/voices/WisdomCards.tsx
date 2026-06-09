interface Props {
  title: string;

  items: string[];
}

export default function WisdomCards({
  title,
  items,
}: Props) {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="
            p-6
            rounded-3xl
            border
            border-memory/20
            bg-memory/5
          "
          >
            <div className="text-3xl mb-4">
              ✨
            </div>

            <p>{item}</p>

          </div>
        ))}

      </div>

    </div>
  );
}
