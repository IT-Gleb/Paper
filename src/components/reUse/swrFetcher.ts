export async function swrFetcher(url: string | URL) {
  const response = await fetch(url);
  return await response.json();
}
