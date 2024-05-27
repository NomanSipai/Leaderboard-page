const DataTable = () => {
  const tableData = [
    {
      rank: 1,
      Name: "Isabella Galindo",
      CalmarRatio: 3.96,
      OverallProfit: 381845,
      AvgDailyProfit: 319.54,
      WinPer: 0.65,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/024/858/preview/21728726_464528753933389_6770068239313210578_o.jpg?1510550973",
    },
    {
      rank: 2,
      Name: "Lucia Hickman",
      CalmarRatio: 3.62,
      OverallProfit: 268872.5,
      AvgDailyProfit: 216.31,
      WinPer: 0.64,
      price: 500,
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/476/310/preview/Profile_Photo.jpg?1673044611",
    },
    {
      rank: 3,
      Name: "Nicole Walls",
      CalmarRatio: 3.42,
      OverallProfit: 255425,
      AvgDailyProfit: 208.51,
      WinPer: 0.64,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/980/470/preview/Mask_group.jpg?1688831157",
    },
    {
      rank: 4,
      Name: "Milena Mora",
      CalmarRatio: 3.22,
      OverallProfit: 370845,
      AvgDailyProfit: 303.47,
      WinPer: 0.65,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/217/509/preview/Screen_Shot_2018-02-01_at_5.25.21_PM.png?1518589452",
    },
    {
      rank: 5,
      Name: "Carly Benjamin",
      CalmarRatio: 3.22,
      OverallProfit: 370845,
      AvgDailyProfit: 303.47,
      WinPer: 0.65,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/077/943/preview/IMG_3166.JPG?1670795505",
    },
    {
      rank: 6,
      Name: "Kimora Cervantes",
      CalmarRatio: 3.01,
      OverallProfit: 135980,
      AvgDailyProfit: 185.77,
      WinPer: 0.49,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/057/115/preview/OsMhQSGD_400x400.jpg?1507622068",
    },
    {
      rank: 7,
      Name: "Meadow Black",
      CalmarRatio: 2.76,
      OverallProfit: 267867.5,
      AvgDailyProfit: 218.49,
      WinPer: 0.6,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/804/147/preview/1.jpg?1588749630",
    },
    {
      rank: 8,
      Name: "Etta Clark",
      CalmarRatio: 2.62,
      OverallProfit: 178252.5,
      AvgDailyProfit: 161.9,
      WinPer: 0.63,
      price: "-",
      img: "https://assets.materialup.com/uploads/4e71b789-8333-4f29-829e-f27b97d8c781/avatar.jpg",
    },
    {
      rank: 9,
      Name: "Octavia Gray",
      CalmarRatio: 2.44,
      OverallProfit: 176420,
      AvgDailyProfit: 137.51,
      WinPer: 0.65,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/001/296/325/preview/Tariqul_islam_picture.png?1666718910",
    },
    {
      rank: 10,
      Name: "Charlotte Poole",
      CalmarRatio: 2.04,
      OverallProfit: 244555,
      AvgDailyProfit: 198.66,
      WinPer: 0.62,
      price: "-",
      img: "https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/362/521/preview/open-uri20220326-4-pop8i?1648345120",
    },
  ];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Calmar Ratio
              </th>
              <th scope="col" className="px-6 py-3">
                Overall Profit
              </th>
              <th scope="col" className="px-6 py-3">
                Avg. Daily Profit
              </th>
              <th scope="col" className="px-6 py-3">
                Win %(Day)
              </th>
              <th scope="col" className="px-6 py-3">
                $ Price
              </th>
              <th scope="col" className="px-6 text-center py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => {
              return (
                <tr
                  key={item.rank}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-black font-semibold">
                  <th
                    scope="row"
                    className="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                  </th>
                  <td className="px-6 py-4 flex items-center text-blue-500 font-bold">
                    <img
                      className=" rounded-full me-3"
                      width={36}
                      src={item.img}
                      alt=""
                    />
                    {item.Name}
                  </td>
                  <td className="px-6 py-4">{item.CalmarRatio}</td>
                  <td className="px-6 py-4">{item.OverallProfit}</td>
                  <td className="px-6 py-4">{item.AvgDailyProfit}</td>
                  <td className="px-6 py-4">{item.WinPer}%</td>
                  <td className="px-6 py-4">
                    {typeof item.price === "number" ? "$" : ""}
                    {item.price}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {typeof item.price === "number" ? (
                      <a
                        href="#"
                        className=" bg-gradient-to-r from-sky-600 to-cyan-400 text-xs font-bold hover:bg-gray-700 text-white py-2 px-5 rounded inline-flex items-center">
                        Buy
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs  py-2 px-4 rounded inline-flex items-center">
                        View
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
