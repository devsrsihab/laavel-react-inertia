import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import TaskTable from "@/Components/Task/TaskTable.jsx";

const Index = ({auth,tasks,queryParams=null}) => {
    return <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tasks</h2>}
        >
            <Head title="Tasks"/>

            <div className="py-12">
                <div className="max-full  mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">See Your Tasks</div>
                        <TaskTable queryParams={queryParams} tasks={tasks} >
                        </TaskTable>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </>
};

export default Index;
