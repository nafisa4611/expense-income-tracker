import React, { useState } from 'react';

export default function Incomes({ incomes }) {
    // State to track selected filters
    const [filters, setFilters] = useState({
        salary: false,
        outsourcing: false,
        bond: false,
        dividend: false,
    });

    // State to track the sorting order
    const [sortOrder, setSortOrder] = useState('lowToHigh'); // 'lowToHigh' or 'highToLow'

    // State to track whether the sort dropdown is open
    const [isSortOpen, setIsSortOpen] = useState(false);

    // State to track whether the filter dropdown is open
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Function to handle checkbox changes for filters
    const handleFilterChange = (category) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: !prevFilters[category],
        }));
    };

    // Function to handle sort order changes
    const handleSortChange = (order) => {
        setSortOrder(order);
        setIsSortOpen(false); // Close sort dropdown after selection
    };

    // Function to toggle the sort dropdown
    const toggleSortDropdown = () => {
        setIsSortOpen(prev => !prev);
        setIsFilterOpen(false); // Close filter dropdown if it's open
    };

    // Function to toggle the filter dropdown
    const toggleFilterDropdown = () => {
        setIsFilterOpen(prev => !prev);
        setIsSortOpen(false); // Close sort dropdown if it's open
    };

    // Filter incomes based on selected filters
    const filteredIncomes = incomes.filter(income => {
        if (filters.salary && income.category !== 'Salary') return false;
        if (filters.outsourcing && income.category !== 'Outsourcing') return false;
        if (filters.bond && income.category !== 'Bond') return false;
        if (filters.dividend && income.category !== 'Dividend') return false;
        return true;
    });

    // Sort the filtered incomes based on selected sort order
    const sortedIncomes = filteredIncomes.sort((a, b) => {
        if (sortOrder === 'lowToHigh') {
            return a.amount - b.amount;
        } else if (sortOrder === 'highToLow') {
            return b.amount - a.amount;
        }
        return 0;
    });

    return (
        <>
            <div className="border rounded-md relative">
                <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                    <div className="flex items-center gap-2">
                        <div
                            className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base"
                        >
                            {/* Icon */}
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
                                <path
                                    d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                                />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold leading-7 text-gray-800">Incomes</h3>
                        </div>
                    </div>

                    {/* Sorting Options */}
                    <div>
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={toggleSortDropdown}
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
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="sort-button"
                                    tabindex="-1"
                                >
                                    <div className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                            role="menuitem"
                                            onClick={() => handleSortChange('lowToHigh')}
                                        >
                                            Low to High
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                            role="menuitem"
                                            onClick={() => handleSortChange('highToLow')}
                                        >
                                            High to Low
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Filter Options */}
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={toggleFilterDropdown}
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
                                    aria-labelledby="filter-button"
                                    tabindex="-1"
                                >
                                    <div className="py-1" role="none">
                                        {/* Filter by categories */}
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                checked={filters.salary}
                                                onChange={() => handleFilterChange('salary')}
                                            />
                                            <span className="ml-2">Salary</span>
                                        </label>
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                checked={filters.outsourcing}
                                                onChange={() => handleFilterChange('outsourcing')}
                                            />
                                            <span className="ml-2">Outsourcing</span>
                                        </label>
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                checked={filters.bond}
                                                onChange={() => handleFilterChange('bond')}
                                            />
                                            <span className="ml-2">Bond</span>
                                        </label>
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                                checked={filters.dividend}
                                                onChange={() => handleFilterChange('dividend')}
                                            />
                                            <span className="ml-2">Dividend</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    {sortedIncomes.length === 0 ? (
                        <p>No incomes recorded for the selected filters.</p>
                    ) : (
                        sortedIncomes.map((income, index) => (
                            <div key={index} className="border rounded-md">
                                <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base"
                                        >
                                            {/* Icon */}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold leading-7 text-gray-800">Income</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 divide-y">
                                    <div className="flex justify-between items-center py-2">
                                        <div>
                                            <h3 className="text-base font-medium leading-7 text-gray-600">{income.category}</h3>
                                            <p className="text-xs text-gray-600">{income.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-base font-semibold text-gray-600">{income.amount}</p>
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
