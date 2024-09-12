export default async (req, context) => {
  console.log(req);
  return new Response("Hello, world!");
};
