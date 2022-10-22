import { HomeLoadingItem } from "./style";

const HomeLoading = () => {
  const skeletonBoxArray = Array.from({ length: 20 });

  return (
    <>
      {skeletonBoxArray.map((item, idx) => (
        <HomeLoadingItem key={idx} />
      ))}
    </>
  );
};

export default HomeLoading;
