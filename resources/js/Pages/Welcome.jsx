import Animate from '@/Helpers/Animate';
import HeadBar from '@/Layouts/HeadBar';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/60 dark:bg-gray-900 dark:text-white/60 min-h-screen">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px] opacity-50 dark:opacity-30"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex flex-col items-center justify-center min-h-screen selection:bg-[#FF2D20] selection:text-white">
                    <div className="w-full max-w-6xl px-6 lg:px-12">
                        <HeadBar auth={auth} />

                        <main className="mt-10">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                                    Welcome to Acusense
                                </h1>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                    Manage your inventory effortlessly with real-time updates, analytics, and automated alerts.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Animate
                                    tag="div"
                                    className="bg-gradient-to-r cursor-pointer from-red-500 to-orange-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out"
                                    x={0}
                                    y={20}
                                    delay={0.2}
                                    duration={0.5}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <span role="img" aria-label="tracking" className="text-4xl text-white">
                                            📦
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white text-center">Track Product Stock</h2>
                                    <p className="mt-2 text-white text-center text-sm">
                                        Real-time updates to maintain accurate inventory counts.
                                    </p>
                                </Animate>

                                <Animate
                                    tag="div"
                                    className="bg-gradient-to-r cursor-pointer from-blue-500 to-cyan-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out"
                                    x={0}
                                    y={20}
                                    delay={0.4}
                                    duration={0.5}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <span role="img" aria-label="analytics" className="text-4xl text-white">
                                            📊
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white text-center">Analyze Trends</h2>
                                    <p className="mt-2 text-white text-center text-sm">
                                        Gain insights into stock trends for better decision-making.
                                    </p>
                                </Animate>

                                <Animate
                                    tag="div"
                                    className="bg-gradient-to-r cursor-pointer from-green-500 to-teal-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out"
                                    x={0}
                                    y={20}
                                    delay={0.6}
                                    duration={0.5}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <span role="img" aria-label="alert" className="text-4xl text-white">
                                            ⏰
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white text-center">Set Stock Alerts</h2>
                                    <p className="mt-2 text-white text-center text-sm">
                                        Receive alerts when stock levels fall below the threshold.
                                    </p>
                                </Animate>
                            </div>
                        </main>

                        <footer className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
                            Made with ❤️ using Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
