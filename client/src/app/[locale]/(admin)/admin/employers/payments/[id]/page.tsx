"use client";

type PaymentStatus = "Success" | "Refunded";

interface Payment {
  paymentDate: string;
  amount: string;
  plan: string;
  postedOn: string;
  status: PaymentStatus;
}

const payments: Payment[] = [
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Success"
  },
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Refunded"
  },
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Success"
  },
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Refunded"
  },
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Success"
  },
  {
    paymentDate: "2025-04-25",
    amount: "$1,200",
    plan: "Plan Name",
    postedOn: "2025-05-14",
    status: "Refunded"
  }
];

export default function PaymentHistoryPage() {
  return (
    <div className='w-full'>
      <h2 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Payment
      </h2>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        {/* Header */}
        <h2 className='border-b px-6 py-5 text-[18px] font-semibold'>
          Payment History
        </h2>

        {/* Table */}
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Payment Date</th>
              <th className='px-6 py-4'>Amount Paid</th>
              <th className='px-6 py-4'>Plan</th>
              <th className='px-6 py-4'>Posted On</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='px-6 py-5'>{item.paymentDate}</td>
                <td className='px-6 py-5'>{item.amount}</td>
                <td className='px-6 py-5'>{item.plan}</td>
                <td className='px-6 py-5'>{item.postedOn}</td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                      item.status === "Success"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : "bg-[#FDEEEE] text-[#D84C4C]"
                    } `}
                  >
                    {item.status}
                  </span>
                </td>
                <td className='px-6 py-5'>
                  <a
                    href={"detail"}
                    className='text-sm font-medium text-black underline'
                  >
                    View Receipt
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
