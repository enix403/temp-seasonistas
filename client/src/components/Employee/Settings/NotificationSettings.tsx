import SectionBlock from "./SectionBlock";
const NotificationSettings = () => {
  return (
    <div className='space-y-6 sm:space-y-10'>
      <div className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end'>
        <div>
          <h2 className='text-[18px] leading-[24px] font-semibold sm:text-[20px]'>
            My Notification Setting
          </h2>
          <p className='text-[14px] font-normal text-[#767676] sm:text-[16px]'>
            Manage how and when you'd like to receive important updates from the
            platform.
          </p>
        </div>
        <button className='rounded-full bg-[#559093] px-6 py-2 text-sm font-semibold text-white'>
          Save
        </button>
      </div>
      <hr className='w-full' />
      {[
        {
          title: "Email Notifications",
          desc: "Get essential updates straight to your inbox.",
          settings: [
            {
              title: "Application Updates",
              desc: "Receive notifications when there’s activity on your job applications, status, or interview progress.",
              initial: true
            },
            {
              title: "Weekly Job Digest",
              desc: "A curated list of new opportunities based on your preferences, skills, and saved searches."
            }
          ]
        },
        {
          title: "Push Notifications",
          desc: "Instant alerts to keep you connected, anytime.",
          settings: [
            {
              title: "Interview Reminders",
              desc: "Get notified about upcoming interviews and schedule changes, directly on your device."
            },
            {
              title: "Employer Messages",
              desc: "Receive real-time messages and replies from employers, recruiters, or hiring managers.",
              initial: true
            }
          ]
        },
        {
          title: "New Job Alerts",
          desc: "Be the first to know when a perfect match is posted.",
          settings: [
            {
              title: "Jobs Matching Your Profile",
              desc: "Immediate alerts for new roles that fit your skills, experience, and selected job filters.",
              initial: true
            },
            {
              title: "Trending Opportunities",
              desc: "Stay ahead with alerts on high-demand or featured jobs across various industries."
            }
          ]
        }
      ].map((section, index) => (
        <>
          <SectionBlock
            index={index}
            title={section.title}
            desc={section.desc}
            settings={section.settings}
          />
          {index !== 2 && <hr className='w-full' />}
        </>
      ))}
    </div>
  );
};

export default NotificationSettings;
