const useTopScroll = () => {
  const onGoToTopScroll = () => {
    if (!window.screenY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { onGoToTopScroll };
};

export default useTopScroll;
