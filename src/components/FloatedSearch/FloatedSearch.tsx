import { SearchLocation } from "../SearchLocation";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";
import { SearchPriceRange } from '../SearchPriceRange/SearchPriceRange';
import { SearchButton } from "../SearchButton";

export function FloatedSearch() {
    return (
        <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
            <div className="flex flex-wrap justify-between px-3 gap-4 py-4 bg-white rounded-md md:flex-nowrap backdrop-blur shadow-light">
                <SearchLocation />
                <SearchProperty/>
                <SearchPriceRange/>
                <SearchButton/>
            </div>
        </Transition>
    )
}
