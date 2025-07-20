const events = Array.from({ length: 5 }, (_, i) => ({
  title: "Meeting With Haider",
  position: "Position for UI Designer",
  time: "8:00 pm",
  date: "07/08/2024"
}));

const EventList = () => {
  return (
    <div className='h-full space-y-4 rounded-xl bg-white px-6 py-4 shadow-sm'>
      <h4 className='text-lg font-semibold'>Event & Meetings</h4>
      <ul className='space-y-4'>
        {events.map((event, i) => (
          <li key={i} className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500'>
                  📅
                </div>
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    {event.title}
                  </p>
                  <p className='text-xs text-gray-500'>{event.position}</p>
                </div>
              </div>
              <div className='text-right text-sm'>
                <p>{event.time}</p>
                <p className='text-xs text-gray-500'>{event.date}</p>
              </div>
            </div>
            <hr className={`w-full ${events.length - 1 === i && "hidden"}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
