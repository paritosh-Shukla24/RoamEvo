import { IoLocationOutline } from 'react-icons/io5';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#000000B2] py-1 2xl:py-2 overflow-x-auto">
      <IoLocationOutline className="text-[#4A5B2D] mr-1 sm:mr-2 2xl:mr-3 flex-shrink-0" size={16} />
      {items.map((item, index) => (
        <span key={item.href} className="whitespace-nowrap">
          {index > 0 && <span className="mx-1 sm:mx-2 2xl:mx-3">–</span>}
          <span className="text-[#000000B2]">{item.label}</span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;