import { IoLocationOutline } from 'react-icons/io5';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center text-sm text-[#000000B2] mb-2">
      <IoLocationOutline className="text-[#4A5B2D] mr-2" size={16} />
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span className="mx-2">–</span>}
          <span className="text-gray-700">{item.label}</span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;