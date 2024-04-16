// Global Context Provider.
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";

/**
 * Created this Hook to Destructuring Nested variable in Global Context.
 */
const useGlobalContext = () => {
    const { showLoader } = useContext(GlobalContext);
    const [_showLoader, setShowLoader] = showLoader;

    const setShowLoaderHandler = (value) => {
        setShowLoader(value);
    };

    const obj = {
        setShowLoaderHandler,
        showLoader: _showLoader,
    };
    return obj;
};

export default useGlobalContext;