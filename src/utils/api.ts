export const fetchMessages = async (id: number = 1) => {
  const data: any = await fetch(
    `https://shrewdness.herokuapp.com/api/channelMessages/${id}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data.channelMessage;
};
