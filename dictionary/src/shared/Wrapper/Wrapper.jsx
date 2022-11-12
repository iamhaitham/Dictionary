import styles from './Wrapper.module.css';

const Wrapper = ({ children }) => {
    const { wrapperStyles } = styles;

    return (
        <div className={ wrapperStyles }>
            { children }
        </div>
    )
}

export default Wrapper;