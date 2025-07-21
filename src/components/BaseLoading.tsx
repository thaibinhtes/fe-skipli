import '../assets/scss/components/base-loading.scss';

const BaseLoading = () => {
  return (
    <div className="base-loading absolute top-0 left-0 w-full h-full">
      <div className="base-loading__container absolute">
        <div className="base-loading__spinner"></div>
      </div>
    </div>
  );
}

export default BaseLoading;