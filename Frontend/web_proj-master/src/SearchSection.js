import PriceSlider from "./PriceSlider";
import ClothesFilter from './ClothesFilter';
import './searchScreen.css'

export default function SearchSection({ setSelectedTypes, setSelectedPrice }) {
    const handleTypeChange = (types) => {
        setSelectedTypes(types);
    };
    return (
        <>
            <div className="search-side">
                <div>
                    <b>Search By:</b>
                    <input type="text" className="Bar" />
                    <PriceSlider setSelectedPrice={setSelectedPrice} />
                </div>
                <div>
                    <ClothesFilter
                        types={['T-shirt', 'Hoodie', 'Jacket']}
                        handleTypeChange={handleTypeChange}
                    />
                </div>
            </div>
        </>
    )
}
