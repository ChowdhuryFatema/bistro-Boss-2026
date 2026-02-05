

const SectionTitle = ({heading, SubHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 h-24 mb-10">
            <p className="text-yellow-600 py-2">---{SubHeading}---</p>
            <h2 className="text-3xl uppercase border-y-2 border-gray-200 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;