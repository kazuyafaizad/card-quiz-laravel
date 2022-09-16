import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0 ">
                        PLAYING CARDS
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 hover:bg-gray-500">
                                <div className="flex items-center">
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="/php"
                                            className=" text-gray-900 dark:text-white"
                                        >
                                            &#9824; PHP
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm"></div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l hover:bg-gray-500">
                                <div className="flex items-center">
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="/javascript"
                                            className=" text-gray-900 dark:text-white"
                                        >
                                            &#9825; Javascript
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm"></div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 hover:bg-gray-500">
                                <div className="flex items-center">
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="/jquery"
                                            className=" text-gray-900 dark:text-white"
                                        >
                                            &#9826; JQuery
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm"></div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l hover:bg-gray-500">
                                <div className="flex items-center">
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="/react"
                                            className=" text-gray-900 dark:text-white"
                                        >
                                            &#9827; ReactJS
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel v{props.laravelVersion} (PHP v
                            {props.phpVersion})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
