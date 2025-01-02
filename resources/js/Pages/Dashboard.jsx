import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header="Dashboard"
        >
            <Head title="Dashboard" />

                <div className="py-4">
                    <div className="mx-auto max-w-[86%] sm:px-6 lg:px-4">

                        <div className="flex-1 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-4 text-gray-900">
                                You're logged in!
                            </div>
                        </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
