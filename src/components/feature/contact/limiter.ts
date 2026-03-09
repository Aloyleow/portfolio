export const setEmailSentFlag = () => {
  const dateNow = Date.now();
  localStorage.setItem(
    `${import.meta.env.VITE_EMAIL_SENT_FLAG_KEY}`,
    dateNow.toString(),
  );
  return;
};

export const getEmailSentFlag = () => {
  const dateNow = Date.now();
  const sentDate = localStorage.getItem(
    `${import.meta.env.VITE_EMAIL_SENT_FLAG_KEY}`,
  );
  if (!sentDate) return false;

  const timeLapsed = (dateNow - Number(sentDate)) / 1000; //Seconds
  if (timeLapsed > Number(import.meta.env.VITE_EMAIL_REFRESH_TIME))
    return false;

  return true;
};
