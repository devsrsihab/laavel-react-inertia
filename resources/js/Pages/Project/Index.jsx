import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import ProjectTable from "@/Components/Project/ProjectTable.jsx";

const Index = ({auth,projects,queryParams=null}) => {
    return <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
        >
            <Head title="Projects"/>

            <div className="py-12">
                <div className="max-full  mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">See Your Projects</div>
                        <ProjectTable queryParams={queryParams} projects={projects} >
                        </ProjectTable>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </>
};

export default Index;
