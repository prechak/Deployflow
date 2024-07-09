

function Lesson() {
  return (
<div className="relative overflow-x-auto sm:rounded-lg">
    <table className="w-full h-[41px] text-sm text-left rtl:text-right">
        <thead className="text-xs text-gray-600 bg-gray-200">
            <tr>
                <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Course name
                </th>
                <th scope="col" className="px-6 py-3">
                    Lesson
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Created date
                </th>
                <th scope="col" className="px-6 py-3">
                    Updated date
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b w-[1120px] h-[88px] ">
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    1 
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap w-[96px] h-[88px]">
                    <img src="" />
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    HTML
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    6 Lesson
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    3,559.00
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    12/2/2022 10:30PM
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    12/2/2022 10:30PM
                </td>
                <td className="px-6 py-4 font-small text-gray-900 whitespace-nowrap">
                    <button className="p-2 submit">Delete</button>
                    <button className="p-2 submit">Edit</button>
                </td>

            </tr>
        </tbody>
    </table>
</div>
    
  )
}

export default Lesson
