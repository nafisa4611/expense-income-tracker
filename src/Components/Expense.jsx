import React, { useState } from 'react';

export default function Expense({ expenses }) {
    const [isSortOpen, setSortOpen] = useState(false);
    const [isFilterOpen, setFilterOpen] = useState(false);

    const toggleSortMenu = () => setSortOpen(prev => !prev);
    const toggleFilterMenu = () => setFilterOpen(prev => !prev);

    return (
        <>
            <div className="border rounded-md">
                <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                    <div className="flex items-center gap-2">
                        <div
                            className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="mx-auto"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.413 .584a2 2 0 0 0 1.413 3.416h2m4 0h6a1 1 0 0 1 1 1v3" />
                                <path d="M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M16 12h4v4m-4 0a2 2 0 0 1 -2 -2" />
                                <path d="M3 3l18 18" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold leading-7 text-gray-800">Expense</h3>
                        </div>
                    </div>
                    <div>
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={toggleSortMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 6l9 0" />
                                        <path d="M4 12l7 0" />
                                        <path d="M4 18l7 0" />
                                        <path d="M15 15l3 3l3 -3" />
                                        <path d="M18 6l0 12" />
                                    </svg>
                                </button>
                            </div>

                            {isSortOpen && (
                                <div
                                    className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu2"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button2"
                                    tabindex="-1"
                                >
                                    <div className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="menu-item-0"
                                        >
                                            Low to High
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="menu-item-0"
                                        >
                                            High to Low
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={toggleFilterMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 8h4v4h-4z" />
                                        <path d="M6 4l0 4" />
                                        <path d="M6 12l0 8" />
                                        <path d="M10 14h4v4h-4z" />
                                        <path d="M12 4l0 10" />
                                        <path d="M12 18l0 2" />
                                        <path d="M16 5h4v4h-4z" />
                                        <path d="M18 4l0 1" />
                                        <path d="M18 9l0 11" />
                                    </svg>
                                </button>
                            </div>

                            {isFilterOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="filter-button-2"
                                    tabindex="-1"
                                    id="filter-dropdown2"
                                >
                                    <div className="py-1" role="none">
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                id="filter-option-1"
                                            />
                                            <span className="ml-2">Education</span>
                                        </label>
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                id="filter-option-2"
                                            />
                                            <span className="ml-2">Food</span>
                                        </label>
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                id="filter-option-3"
                                            />
                                            <span className="ml-2">Health</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    {expenses.length === 0 ? (
                        <p>No expenses recorded yet.</p>
                    ) : (
                        expenses.map((expense, index) => (
                            <div key={index} className="border rounded-md">
                                <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base"
                                        >
                                            {/* Icon */}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold leading-7 text-gray-800">Expense</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 divide-y">
                                    <div className="flex justify-between items-center py-2">
                                        <div>
                                            <h3 className="text-base font-medium leading-7 text-gray-600">{expense.category}</h3>
                                            <p className="text-xs text-gray-600">{expense.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-base font-semibold text-gray-600">{expense.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
