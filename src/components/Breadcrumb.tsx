import { IoLocationOutline } from 'react-icons/io5';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center text-base sm:text-lg md:text-xl text-[#000000B2] mb-1 sm:mb-2 overflow-x-auto">
      <IoLocationOutline className="text-[#4A5B2D] mr-1 sm:mr-2 flex-shrink-0" size={18} />
      {items.map((item, index) => (
        <span key={item.href} className="whitespace-nowrap">
          {index > 0 && <span className="mx-1 sm:mx-2">–</span>}
          <span className="text-[#000000B2]">{item.label}</span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;