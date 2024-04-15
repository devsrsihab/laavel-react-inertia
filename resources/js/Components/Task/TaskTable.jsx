import {Link, router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination.jsx";
import {TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP} from "@/constants.jsx";
import TextInput from "@/Components/TextInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import TableHeading from "@/Components/TableHeading.jsx";

const TaskTable = ({tasks, queryParams}) => {

    queryParams = queryParams || {}
    const handleSearchFieldChanged = (name, value) => {
        console.log(value)
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        // inertia router
        router.get(route("tasks.index"), queryParams);
    }

    const handleOnkeypress = (name, e) => {
        if (e.key !== 'Enter') return false;

        handleSearchFieldChanged(name, e.target.value)
    }

    // sorting
    const sortChange = (name) => {
        console.log(name)
        if (name === queryParams.sort_field) {

            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc"
            } else {
                queryParams.sort_direction = "asc"
            }
        } else {
            queryParams.sort_field = name
            queryParams.sort_direction = "asc"
        }
        // send a get request with query string in backedn
        router.get(route("tasks.index"), queryParams);
    }


    return (
        <div className="py-10">
            <div className="mx-auto mt-8  px-2">
                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    <p className="flex-1 text-base font-bold  text-white">
                        Latest Payments
                    </p>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl border shadow">
                    <div className="overflow-auto">
                        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                            <thead className="hidden border-b lg:table-header-group">
                            <tr className="text-white uppercase">

                                <TableHeading
                                name="id"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChange = {sortChange}
                                >
                                    ID
                                </TableHeading>

                                <TableHeading
                                    sortable = {false}
                                >
                                    Image
                                </TableHeading>

                                <TableHeading
                                    name="name"
                                    sort_field={queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction}
                                    sortChange = {sortChange}
                                >
                                    Name
                                </TableHeading>

                                <TableHeading
                                    name="Status"
                                    sort_field={queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction}
                                    sortChange = {sortChange}
                                >
                                    Status
                                </TableHeading>

                                <TableHeading
                                    name="created_at"
                                    sort_field={queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction}
                                    sortChange = {sortChange}
                                >
                                    Created Date
                                </TableHeading>

                                <TableHeading
                                    name="due_date"
                                    sort_field={queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction}
                                    sortChange = {sortChange}
                                >
                                    Due Date
                                </TableHeading>

                                <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                    Created by
                                </td>
                                <td className="whitespace-normal py-4 text-sm text-right font-medium sm:px-6">
                                    Actions
                                </td>
                            </tr>
                            </thead>

                            <thead className="hidden border-b lg:table-header-group">
                            <tr className="text-white">
                                <td
                                    className="whitespace-normal py-4 text-sm font-medium  sm:px-6">

                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium  sm:px-6">

                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium  sm:px-6">
                                    <TextInput
                                        className="w-full"
                                        defaultValue={queryParams.name}
                                        placeholder="Search by Name"
                                        onBlur={e => handleSearchFieldChanged('name', e.target.value)}
                                        onKeyPress={e => handleOnkeypress('name', e)}
                                    />
                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                                    <SelectInput className="w-full"
                                                 defaultValue={queryParams.status}
                                                 onChange={(e) => handleSearchFieldChanged("status", e.target.value)}
                                    >
                                        <option value="select">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </SelectInput>
                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">

                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">

                                </td>
                                <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">

                                </td>
                                <td className="whitespace-normal py-4 text-sm text-right font-medium sm:px-6">

                                </td>
                            </tr>
                            </thead>
                            <tbody className="lg:border-gray-300">
                            {tasks?.data?.map((task) => (
                                <tr key={task.id} className="text-white">
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        {task.id}
                                    </td>
                                    <td className="whitespace-no-wrap bg-gray-500 hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        <img style={{width: 60}} src={task.image_path} alt=""/>
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        {task.name}
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                   <span className={
                                       "px-2 py-1 rounded text-white " +
                                       TASK_STATUS_CLASS_MAP[task.status]
                                   }>

                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                   </span>
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        {task.created_at}
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        {task.due_date}
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                                        {task.createdBy.name}
                                    </td>
                                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                        <Link
                                            href={route("tasks.edit", task.id)}
                                            className="font-semibold text-blue-600 dark:text-blue-500
                                    hover:underline mx-1">
                                            Edit
                                        </Link>
                                        <Link
                                            href={route("tasks.destroy", task.id)}
                                            className="font-semibold text-red-600 dark:text-red-500
                                        hover:underline mx-1">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>

                    </div>

                    {/*  pagination  */}
                    <Pagination links={tasks.meta.links}/>
                </div>
            </div>
        </div>

    );
};

export default TaskTable;
