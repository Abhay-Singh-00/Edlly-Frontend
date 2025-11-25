import React from "react";

const Earnings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow">
      <h3 className="text-lg font-semibold">Earnings</h3>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">This month</div>
          <div className="text-2xl font-bold">₹12,400</div>
        </div>

        <div className="text-xs text-gray-500">Withdraw</div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Payouts processed every 7 days. Keep up the great work!
      </div>
    </div>
  );
};

export default Earnings;
