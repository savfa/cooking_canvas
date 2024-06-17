export const getConfigUploadFile = (setProgress?: any) => ({
  headers: {
    "Content-Type": `multipart/form-data`,
  },
  ...(setProgress && {
    onUploadProgress: (progressEvent: any) => {
      const uploadPercentage = parseInt(
        Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        ).toString(),
        10
      );
      if (uploadPercentage < 100) setProgress(uploadPercentage);
    },
  }),
});
