import MetricCard from "@/components/Employer/Dashboard/MetricCard";
import UsageCard from "@/components/Employer/Dashboard/UsageCard";
import ChartSection from "@/components/Employer/Dashboard/ChartSection";
import EventList from "@/components/Employer/Dashboard/EventList";
import AllJobsSection from "@/components/Employer/Dashboard/AllJobsSection";

const Page = () => {
  return (
    <div className='space-y-6 py-4 sm:px-6'>
      {/* Top Metrics */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <MetricCard
          title='Total followers'
          value='4500'
          change={+2.6}
          subtitle='last 7 days'
          bars={[5, 6, 3, 20, 25, 3, 17, 16]}
        />
        <MetricCard
          title='Applied Jobs'
          value='4 876'
          change={+0.2}
          subtitle='last 7 days'
          bars={[5, 9, 17, 7, 5, 7, 10, 15]}
        />
        <UsageCard used={4} total={10} plan='Professional Plan' price={18} />
      </div>

      {/* Chart + Events */}
      <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
        <div className='xl:col-span-2'>
          <ChartSection />
        </div>
        <EventList />
      </div>

      {/* All Jobs */}
      <AllJobsSection />
    </div>
  );
};

export default Page;
