const ListLHS = () => {
  return (
    <ul className="items-center p-4 gap-4 w-full text-white text-1xl bg-gray-800 -op-7">
      <li className="p-3 rounded-lg">
        <a href="#">Dashboard</a>
      </li>
      <li className="p-3 rounded-lg hover:bg-gray-700">
        <a href="#">Team</a>
      </li>
      <li className="p-3 rounded-lg hover:bg-gray-700">
        <a href="#">Projects</a>
      </li>
      <li className="p-3 rounded-lg hover:bg-gray-700">
        <a href="#">Calendar</a>
      </li>
      <li className="p-3 rounded-lg hover:bg-gray-700">
        <a href="#">Reports</a>
      </li>
    </ul>
  );
};

export default ListLHS;
