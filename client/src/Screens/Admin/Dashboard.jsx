
function Dashboard() {
  return (
    <main className="flex-grow p-6">

      <header className="flex justify-between items-center pb-4 border-b border-gray-300">
        <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Logout</button>
      </header>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold mt-2">1,250</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">New Signups</h3>
          <p className="text-2xl font-bold mt-2">75</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-2xl font-bold mt-2">$12,300</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Tickets</h3>
          <p className="text-2xl font-bold mt-2">23</p>
        </div>
      </div>


      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h3>
        <div className="bg-white shadow-sm rounded-lg p-4">
          <ul>
            <li className="py-2 border-b border-gray-200 flex justify-between">
              <span>User John Doe signed up</span>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </li>
            <li className="py-2 border-b border-gray-200 flex justify-between">
              <span>Generated new revenue report</span>
              <span className="text-gray-500 text-sm">4 hours ago</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Updated site settings</span>
              <span className="text-gray-500 text-sm">8 hours ago</span>
            </li>
          </ul>
        </div>
      </section>
    </main>

  );
}

export default Dashboard;
