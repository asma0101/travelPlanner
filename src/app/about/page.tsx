import React from 'react';

const TeamMemberCard = (props:any) => {
    return (
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg mx-2 mb-4 text-center">
            <div className="flex justify-center">
                <img src="userIcon.png" alt="" width="50px" height="100px" />
            </div>
            <h2 className="text-xl font-bold mb-2">{props.name}</h2>
            <p className="text-gray-700">{props.role}</p>
        </div>
    );
}

const About = () => {
    const teamMembers = [
        { name: 'Muhammad Suleman', role: 'Founder' },
        { name: 'Muhammad Usman', role: 'Founder' },
        { name: 'Hamza Daood', role: 'Tour Guide' },
        { name: 'Hammad', role: 'Tour Guide' },
        { name: 'M. Faizan', role: 'First Aid Guide' },
        { name: 'Muhammad Adnan', role: 'Photographer' },
    ];

    return (
        <div className="container mx-auto p-6 mt-20 flex flex-wrap items-center justify-center">
            <h1 className="font-bold mb-4 text-lg ">About Trip Mates</h1>
            <p className="text-md mb-4 text-center">
                Welcome to Trip Mates, your trusted companion in exploring the beauty and culture of Pakistan.
                We are passionate about curating unforgettable journeys across diverse regions,
                ensuring you have an enriching travel experience.
            </p>
            <p className="text-md">
                Our team is dedicated to providing you with top-notch services and making every trip memorable.
                Join us in discovering the hidden gems of Pakistan and creating lasting memories.
            </p>
                <h1 className="font-bold mb-4 text-lg ">Meet our team members</h1>

            <div className="flex flex-wrap justify-center">

                <div className="w-full mb-6">
                    <h2 className="text-2xl font-bold mb-2 ">Founders</h2>
                    <div className="flex">
                        {teamMembers
                            .filter(member => member.role === 'Founder')
                            .map((member, index) => (
                                <TeamMemberCard key={index} name={member.name} role={member.role} />
                            ))}
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-2">Other Members</h2>
                    <div className="flex">
                        {teamMembers
                            .filter(member => (member.role === 'Tour Guide' || member.role === 'Photographer' || member.role === 'First Aid Guide'))
                            .map((member, index) => (
                                <TeamMemberCard key={index} name={member.name} role={member.role} />
                            ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
