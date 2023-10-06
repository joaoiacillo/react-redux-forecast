/**
 * Base div that wraps the app content.
 * 
 * Has no params.
 * 
 * @author João Iacillo
 */
const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;
