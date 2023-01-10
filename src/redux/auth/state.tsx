export default interface authstate {
  authenticated: boolean;
  user: {
    id: string | undefined;
    username: string | null;
    email: string | null;
    createdAt: string | null;
  };
  token: string | null;
}
