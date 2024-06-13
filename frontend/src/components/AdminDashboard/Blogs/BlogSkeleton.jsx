import React from "react";

const BlogSkeleton = () => {
    return (
        <>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border border-gray-200 rounded-lg overflow-hidden">
                            <div class="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                            <div class="p-6 bg-white dark:bg-gray-800">
                                <div class="bg-gray-200 dark:bg-gray-500 animate-pulse h-4 w-1/4 mb-2"></div>
                                <div class="w-1/2 mb-4 h-6 animate-pulse bg-gray-300 dark:bg-gray-500"></div>
                                <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>


                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border border-gray-200 rounded-lg overflow-hidden">
                            <div class="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                            <div class="p-6 bg-white dark:bg-gray-800">
                                <div class="bg-gray-200 dark:bg-gray-500 animate-pulse h-4 w-1/4 mb-2"></div>
                                <div class="w-1/2 mb-4 h-6 animate-pulse bg-gray-300 dark:bg-gray-500"></div>
                                <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>


                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border border-gray-200 rounded-lg overflow-hidden">
                            <div class="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                            <div class="p-6 bg-white dark:bg-gray-800">
                                <div class="bg-gray-200 dark:bg-gray-500 animate-pulse h-4 w-1/4 mb-2"></div>
                                <div class="w-1/2 mb-4 h-6 animate-pulse bg-gray-300 dark:bg-gray-500"></div>
                                <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>
                                <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-200 dark:bg-gray-500"></p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BlogSkeleton;