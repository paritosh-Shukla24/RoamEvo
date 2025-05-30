import Image from 'next/image';

export default function MeetTheTeam() {
    const teamMembers = [
        {
            name: "Ravi Thakur",
            title: "CHIEF EXECUTIVE OFFICER ( CEO )",
            image: "/images/team/person1.png" // Replace with actual image path
        },
        {
            name: "Neha Mehra",
            title: "CHIEF OPERATING OFFICER ( COO )",
            image: "/images/team/person2.png" // Replace with actual image path
        },
        {
            name: "Aditya Joshi",
            title: "CHIEF FINANCIAL OFFICER ( CFO )",
            image: "/images/team/person3.png" // Replace with actual image path
        }
    ];

    return (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A5B2D] mb-6 lg:mb-0 font-extralight">
                        Meet the team
                    </h2>
                    <p className="text-gray-600 text-lg max-w-md lg:text-right leading-relaxed">
                        Our handpicked team is a blend of mountain guides, yoga instructors, storytellers, and outdoor freaks who know every rock and riverbend in these hills.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 uppercase tracking-wide">
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}