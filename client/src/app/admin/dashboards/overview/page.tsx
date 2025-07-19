import {
  BiBarChartSquare,
  BiUser,
  BiBriefcase,
  BiBarChartAlt2
} from "react-icons/bi";
import ActivityFeed from "~/components/Admin/Dashboards/Overview/ActivityFeed";
import AreaStatsTable from "~/components/Admin/Dashboards/Overview/AreaStatsTable";
import ChartCard from "~/components/Admin/Dashboards/Overview/ChartCard";
import MetricCard from "~/components/Admin/Dashboards/Overview/MetricCard";
import arrow1 from "@/assets/Admin/arrow1.png";
import arrow2 from "@/assets/Admin/arrow2.png";
import arrow3 from "@/assets/Admin/arrow3.png";
import arrow4 from "@/assets/Admin/arrow4.png";

export default function OverviewPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Dashboard
      </h1>
      {/* Top Stat Cards */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <MetricCard
          title='Total User'
          value='120K'
          change={+2.6}
          subtitle='last Month'
          bars={[5, 6, 3, 20, 25, 3, 17, 16]}
          barColor='#00a76f'
          arrowIcon={arrow1}
        />
        <MetricCard
          title='Active Employees'
          value='4 876'
          change={+0.2}
          subtitle='last Month'
          bars={[5, 6, 20, 25, 3, 17, 16]}
          barColor='#559093'
          arrowIcon={arrow2}
        />
        <MetricCard
          title='Active Employers'
          value='200'
          change={-0.1}
          subtitle='last Month'
          bars={[10, 10, 15, 5, 8, 20, 7, 16]}
          barColor='#1e4ff2'
          arrowIcon={arrow3}
        />
        <MetricCard
          title='Job Listings'
          value='200'
          change={-0.1}
          subtitle='last Month'
          bars={[10, 10, 15, 20, 5, 8, 20, 7, 16]}
          barColor='#FFAB00'
          arrowIcon={arrow4}
        />
      </div>

      {/* Chart + Area Table */}
      <div className='grid min-h-[380px] grid-cols-1 gap-4 lg:grid-cols-3'>
        <div className='col-span-1 flex h-full flex-col rounded-[16px] bg-white'>
          <AreaStatsTable />
        </div>
        <div className='col-span-1 flex h-full flex-col rounded-[16px] bg-white lg:col-span-2'>
          <ChartCard />
        </div>
      </div>

      {/* Activity Feed */}
      <ActivityFeed />
    </div>
  );
}
