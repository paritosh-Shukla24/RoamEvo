import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#1d2952] w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <Image 
          src={`/icons/${icon}`} 
          alt={title}
          width={32}
          height={32}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-medium text-[#1d2952] mb-3">{title}</h3>
      <p className="text-center text-gray-700 max-w-xs">{description}</p>
    </div>
  );
};

export default FeatureCard;