

export const POST = async (request: Request) => {
  let { inviteToken, ...user } = await request.json();

  return Response.json(user);
}