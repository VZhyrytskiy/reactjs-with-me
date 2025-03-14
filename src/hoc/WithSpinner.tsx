import Spinner from "../components/Spinner/Spinner";

interface WithSpinnerProps {
  isLoading: boolean;
}

function WithSpinner<T extends object>(Component: React.FC<T>) {
  return function WithSpinnerComponent({ isLoading, ...props }: WithSpinnerProps & T) {
    if (isLoading) return <Spinner />;
    return <Component {...(props as T)} />;
  };
}

export default WithSpinner;