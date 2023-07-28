import './Loader.css';
const Loader = ({isLoading}) => {
    return isLoading ? <div className="Spinner"></div> : null;
}
export default Loader;