const EventBox = ({ event }) => {
  return (
    <div className="snap-start relative z-10 flex-none w-full lg:w-1/3 h-5/6 bg-transparent text-white pb-4 rounded-[32px] border border-violet-700 flex flex-col gap-5">
      <div className="w-full h-80">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 rounded-t-[32px] object-cover object-center"
        />
      </div>
      <div className="px-5">
        <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
        <p className="text-gray-400 mt-1 flex flex-wrap">{event.description}</p>
        <p className="text-violet-500 mt-1">{event.date}</p>
      </div>
    </div>
  );
};

export default EventBox;
