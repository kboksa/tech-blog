async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector(`input[name="post-title"]`).value;
  const content = document.querySelector(`textarea[name="content"]`).value;

  if (title && content) {
    const response = await fetch(`/api/posts`,
     method: "POST",
        body: JSON.stringify({
            title,
            content,
    }),
    headers: {
        "Contant-Type": "application/json",
    })
  }
}
