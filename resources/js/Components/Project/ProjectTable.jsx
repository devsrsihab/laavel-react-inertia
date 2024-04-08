import {Link} from "@inertiajs/react";
import Pagination from "@/Components/Pagination.jsx";

const ProjectTable = ({projects}) => {
    return (
        <div className="py-10">
            <div className="mx-auto mt-8  px-2">
                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    <p className="flex-1 text-base font-bold  text-white">
                        Latest Payments
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <div className="flex items-center justify-start sm:justify-end">
                            <div className="flex items-center">
                                <label
                                    htmlFor=""
                                    className="mr-2 flex-shrink-0 text-sm font-medium text-white"
                                >
                                    Sort by:
                                </label>
                                <select
                                    name=""
                                    className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                                >
                                    <option className="whitespace-no-wrap text-sm">Recent</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                            >
                                <svg
                                    className="mr-1 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        className=""
                                    />
                                </svg>
                                Export to CSV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl border shadow">
                    <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                        <thead className="hidden border-b lg:table-header-group">
                        <tr className="text-white">
                            <td
                                className="whitespace-normal py-4 text-sm font-medium  sm:px-6">
                                ID
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium  sm:px-6">
                                Image
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium  sm:px-6">
                                Name
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                Status
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                Created Date
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                Due Date
                            </td>
                            <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                Created by
                            </td>
                            <td className="whitespace-normal py-4 text-sm text-right font-medium sm:px-6">
                                Actions
                            </td>
                        </tr>
                        </thead>
                        <tbody className="lg:border-gray-300">
                        { projects?.data?.map((project) => (
                            <tr key={project.id} className="text-white">
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.id}
                                </td>
                                <td className="whitespace-no-wrap bg-gray-500 hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    <img style={{width: 60}} src={project.image_path} alt=""/>
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.name}
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.status}
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.created_at}
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.due_date}
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                    {project.createdBy.name }
                                </td>
                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm  lg:text-left">
                                    $59.00
                                    <div
                                        className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                                        Complete
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                   <Link
                                       href={route("projects.edit", project.id)}
                                       className="font-semibold text-blue-600 dark:text-blue-500
                                    hover:underline mx-1">
                                       Edit
                                   </Link>
                                    <Link
                                        href={route("projects.destroy",project.id)}
                                        className="font-semibold text-red-600 dark:text-red-500
                                        hover:underline mx-1">
                                       Delete
                                   </Link>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                {/*  pagination  */}
                 <Pagination links={projects.meta.links} />
                </div>
            </div>
        </div>

    );
};

export default ProjectTable;
