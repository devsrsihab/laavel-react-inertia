import {Link} from "@inertiajs/react";
const Pagination = ({ links }) => {
    return (
        <nav className="text-center text-white py-4 mt-4">
            {
                links.map((link) => (
                    <Link
                        href={link.url || ""}
                        key={link.label}
                        className=
                         {" inline-block py-2 px-3 rounded-lg text-gray-200 text-xs"
                          + (link.active ? "bg-gray-900" : "")
                          + (!link.url ? "!text-gray-500 cursor-not-allowed" :
                             "hover:bg-gray-950")
                          }


                        dangerouslySetInnerHTML={{ __html: link.label}} >
                    </Link>
                ))
            }
        </nav>
    );
};

export default Pagination;
