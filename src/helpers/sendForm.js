export const sendForm = async(form) => {
  const url = "https://formsubmit.co/ajax/30d2a5de25cbcdcf9780c461ed1acd92";


  const res = await fetch(url, {
    method: 'POST',
    body: new FormData(form)
  });
  const result = res.json();
  return result;
}