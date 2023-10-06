import Image from 'next/image';

export default function Product({ product }) {
  const { name, description, price, image, category } = product;

  return (
      <div className="card w-96 bg-base-100 shadow-xl max-w-[250px] overflow-hidden dark:shadow-blue-600">
        <figure>
          <Image
            className={"w-full"}
            width={250}
            height={250}
            objectFit={"cover"}
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body px-6 py-4">
          <h2 className="card-title font-bold text-xl mb-2">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category.name}</div>
          </div>
        </div>
      </div>
  );
}
