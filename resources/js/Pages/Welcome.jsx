import Animate from '@/Helpers/Animate';
import HeadBar from '@/Layouts/HeadBar';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <HeadBar auth={auth} />

                        <main className="mt-6">
                            <Animate
                                tag="div"
                                className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                                y={30}
                                duration={0.8}
                                delay={0}
                            >
                                <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D20] to-[#FF7A00]">
                                    Product Stocks Management
                                </h2>
                                <p className="text-center text-lg sm:text-xl mb-6 font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                                    Welcome to the Acusense Product Stocks Management system, a platform designed to optimize inventory management.
                                    Keep track of stock levels in real-time, manage trends, and automate your stock alerts.
                                </p>

                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <Animate
                                        tag="div"
                                        className="bg-gradient-to-r cursor-pointer from-[#FF2D20] to-[#FF7A00] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                                        x={0}
                                        y={20}
                                        delay={0.5}
                                        duration={0.5}
                                    >
                                        <div className="flex items-center justify-center text-white text-3xl mb-4">
                                            <span role="img" aria-label="tracking" className="mr-3">📦</span>
                                            <span>Track Product Stock</span>
                                        </div>
                                        <p className="text-white text-center text-lg">Real-time updates of your inventory, ensuring accurate stock counts at all times.</p>
                                    </Animate>

                                    <Animate
                                        tag="div"
                                        className="bg-gradient-to-r cursor-pointer from-[#FF2D20] to-[#FF7A00] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                                        x={0}
                                        y={20}
                                        delay={1}
                                        duration={0.5}
                                    >
                                        <div className="flex items-center justify-center text-white text-3xl mb-4">
                                            <span role="img" aria-label="analytics" className="mr-3">📊</span>
                                            <span>Analyze Trends</span>
                                        </div>
                                        <p className="text-white text-center text-lg">View stock trends and analytics to make informed decisions for your business.</p>
                                    </Animate>

                                    <Animate
                                        tag="div"
                                        className="bg-gradient-to-r cursor-pointer from-[#FF2D20] to-[#FF7A00] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                                        x={0}
                                        y={20}
                                        delay={1.5}
                                        duration={0.5}
                                    >
                                        <div className="flex items-center justify-center text-white text-3xl mb-4">
                                            <span role="img" aria-label="alert" className="mr-3">⏰</span>
                                            <span>Set Stock Alerts</span>
                                        </div>
                                        <p className="text-white text-center text-lg">Create custom alerts to stay updated when stock levels reach a certain threshold.</p>
                                    </Animate>
                                </div>

                                <Animate
                                    tag="div"
                                    className="mt-8 text-center"
                                    x={0}
                                    y={20}
                                    delay={2}
                                    duration={1}
                                >
                                    <p className="text-md sm:text-lg font-semibold text-gray-700 dark:text-gray-400">
                                        Enhance your stock management process with Acusense and unlock the potential for smarter, data-driven decisions.
                                    </p>
                                </Animate>
                            </Animate>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
