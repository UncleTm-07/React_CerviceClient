import React, {FC, useState} from 'react';

interface FilterComponentProps {
    filterName: string;
    options: string[];
}

const FilterComponentPc: FC<FilterComponentProps> = ({filterName, options}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filter">
            <div className="computer-filter-name" onClick={toggleFilter}>
                {filterName}
            </div>
            {isOpen && (
                <div className="filter-size">
                    {options.map((option) => (
                        <div key={option}>{option}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterComponentPc;