const ListRHS = () => {
  return (
    <div  className="absolute right-0">
      <ul className="items-center p-4 gap-4 w-full text-white text-1xl bg-gray-800">
        <li className="min-w-max p-2 rounded-lg hover:bg-gray-700">
          <a href="#">Your Profile</a>
        </li>
        <li className="min-w-max p-2 rounded-lg hover:bg-gray-700">
          <a href="#">Setting</a>
        </li>
        <li className="min-w-max p-2 rounded-lg text-white text-1xl bg-gray-800 hover:bg-gray-700">
          <a href="#">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default ListRHS;
