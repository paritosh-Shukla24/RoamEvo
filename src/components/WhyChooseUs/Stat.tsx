interface StatProps {
  value: string;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-semibold text-[#1d2952]">{value}</h3>
      <p className="text-sm uppercase tracking-wider text-gray-600 mt-1">{label}</p>
    </div>
  );
};

export default Stat;