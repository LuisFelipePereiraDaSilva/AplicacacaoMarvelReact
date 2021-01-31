export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const getId = (resourceURI: string) => {
  const resultRegex = resourceURI.match(/\/\d/);
  const result = resultRegex?.input?.substring(
    resultRegex.index ? resultRegex.index + 1 : 0
  );
  return result ? result : "";
};

export const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }
  return false;
};
