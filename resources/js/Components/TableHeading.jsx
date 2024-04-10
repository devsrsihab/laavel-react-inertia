import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const TableHeading = ({
                          name,
                          children,
                          sortable = true,
                          sort_field = null,
                          sort_direction = null,
                          sortChange = () => {}
                      }) => {
    return (
        <td onClick={e => sortChange(name)}
            className=" cursor-pointer whitespace-normal py-4 text-sm font-medium  sm:px-6">
            <div className="flex px-3 justify-between items-center gap-1  ">
                {children}
                {
                    sortable && (
                        <div className="text-gray-500">
                            <IoIosArrowUp
                                className={
                                    "w-4  " +
                                    (sort_field === name &&
                                        sort_direction === "asc"
                                            ? "text-white " : ""
                                    )
                                }/>
                            <IoIosArrowDown
                                className={
                                    "w-4  " +
                                    (sort_field === name &&
                                        sort_direction === "desc"
                                            ? "text-white " : ""
                                    )
                                }
                            />
                        </div>

                    )
                }

            </div>
        </td>
    );
};

export default TableHeading;
