export default async function Track() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>Track</div>;
}
